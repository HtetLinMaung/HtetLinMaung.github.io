from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "projects"
SOURCE_PATH = OUTPUT_DIR / "rust-ingest-architecture.png"
GIF_PATH = OUTPUT_DIR / "rust-ingest-architecture.gif"
POSTER_PATH = OUTPUT_DIR / "rust-ingest-architecture-poster.png"

# The source artwork is 11:6. Keeping the same ratio prevents responsive distortion.
EXPORT_SIZE = (1100, 600)
FRAME_COUNT = 40
FRAME_DURATION = 100

BLUE = (44, 99, 241)
MINT = (65, 193, 178)
CORAL = (235, 111, 91)

# Flow segments follow the arrows already drawn in the original architecture image.
FLOW_SEGMENTS = (
	((225, 117), (388, 117)),
	((560, 150), (560, 181)),
	((560, 278), (560, 303)),
	((560, 400), (560, 426)),
	((755, 520), (800, 520)),
)

TARGET_BOXES = (
	(395, 80, 750, 150),
	(395, 181, 750, 278),
	(395, 303, 827, 400),
	(395, 426, 755, 556),
	(800, 452, 1045, 532),
)


def ease_in_out(progress: float) -> float:
	return 0.5 - math.cos(progress * math.pi) / 2


def interpolate(
	start: tuple[int, int],
	end: tuple[int, int],
	progress: float,
) -> tuple[float, float]:
	progress = ease_in_out(max(0, min(1, progress)))
	return (
		start[0] + (end[0] - start[0]) * progress,
		start[1] + (end[1] - start[1]) * progress,
	)


def draw_node_highlight(
	overlay: Image.Image,
	box: tuple[int, int, int, int],
	strength: float,
) -> None:
	if strength <= 0:
		return

	glow = Image.new("RGBA", overlay.size, (0, 0, 0, 0))
	draw = ImageDraw.Draw(glow)
	x1, y1, x2, y2 = box
	draw.rounded_rectangle(
		(x1 - 3, y1 - 3, x2 + 3, y2 + 3),
		16,
		outline=(*BLUE, int(135 * strength)),
		width=5,
	)
	overlay.alpha_composite(glow.filter(ImageFilter.GaussianBlur(8)))

	crisp = ImageDraw.Draw(overlay)
	crisp.rounded_rectangle(
		(x1, y1, x2, y2),
		14,
		outline=(*BLUE, int(105 * strength)),
		width=2,
	)


def draw_event_packet(
	overlay: Image.Image,
	position: tuple[float, float],
	strength: float,
	color: tuple[int, int, int] = BLUE,
	scale: float = 1,
) -> None:
	x, y = position
	trail = Image.new("RGBA", overlay.size, (0, 0, 0, 0))
	draw = ImageDraw.Draw(trail)
	radius = 8 * scale
	draw.ellipse(
		(x - radius * 2.6, y - radius * 2.6, x + radius * 2.6, y + radius * 2.6),
		fill=(*color, int(70 * strength)),
	)
	overlay.alpha_composite(trail.filter(ImageFilter.GaussianBlur(7)))

	draw = ImageDraw.Draw(overlay)
	draw.ellipse(
		(x - radius, y - radius, x + radius, y + radius),
		fill=(255, 255, 255, int(245 * strength)),
		outline=(*color, int(255 * strength)),
		width=max(2, round(3 * scale)),
	)
	draw.ellipse(
		(x - radius * 0.34, y - radius * 0.34, x + radius * 0.34, y + radius * 0.34),
		fill=(*color, int(255 * strength)),
	)


def draw_queue_activity(overlay: Image.Image, strength: float) -> None:
	if strength <= 0:
		return

	for index, x in enumerate((646, 677, 708, 739, 770)):
		pulse = max(0, math.sin(strength * math.pi + index * 0.45))
		if pulse > 0:
			draw_event_packet(overlay, (x, 320), pulse * 0.7, MINT, 0.52)


def render_frame(base: Image.Image, frame_index: int) -> Image.Image:
	progress = frame_index / FRAME_COUNT
	stage_length = 1 / len(FLOW_SEGMENTS)
	stage = min(len(FLOW_SEGMENTS) - 1, int(progress / stage_length))
	stage_progress = (progress - stage * stage_length) / stage_length

	frame = base.copy()
	overlay = Image.new("RGBA", EXPORT_SIZE, (0, 0, 0, 0))

	# Briefly illuminate the service receiving the event.
	highlight_strength = math.sin(stage_progress * math.pi)
	draw_node_highlight(overlay, TARGET_BOXES[stage], highlight_strength)

	start, end = FLOW_SEGMENTS[stage]
	packet_position = interpolate(start, end, stage_progress)
	draw_event_packet(overlay, packet_position, 1)

	# A short trail clarifies direction while retaining the existing artwork.
	for delay, opacity, scale in ((0.1, 0.42, 0.62), (0.19, 0.22, 0.45)):
		trail_progress = max(0, stage_progress - delay)
		trail_position = interpolate(start, end, trail_progress)
		draw_event_packet(overlay, trail_position, opacity, BLUE, scale)

	if stage == 2:
		draw_queue_activity(overlay, highlight_strength)

	# Occasionally show one failed event following the DLQ branch already in the image.
	if stage == 3 and stage_progress > 0.45:
		failed_progress = (stage_progress - 0.45) / 0.55
		failed_position = interpolate((823, 329), (854, 367), failed_progress)
		draw_event_packet(overlay, failed_position, 0.78, CORAL, 0.68)

	frame.alpha_composite(overlay)
	return frame.convert("RGB")


def main() -> None:
	if not SOURCE_PATH.exists():
		raise FileNotFoundError(f"Missing source architecture image: {SOURCE_PATH}")

	base = Image.open(SOURCE_PATH).convert("RGBA").resize(EXPORT_SIZE, Image.Resampling.LANCZOS)
	base.convert("RGB").save(POSTER_PATH, optimize=True)
	frames = [render_frame(base, index) for index in range(FRAME_COUNT)]

	# A shared palette lets GIF optimization store mostly the changing overlay pixels.
	palette = base.convert("RGB").quantize(colors=256, method=Image.Quantize.MEDIANCUT)
	gif_frames = [
		frame.quantize(palette=palette, dither=Image.Dither.NONE)
		for frame in frames
	]
	gif_frames[0].save(
		GIF_PATH,
		save_all=True,
		append_images=gif_frames[1:],
		duration=FRAME_DURATION,
		loop=0,
		optimize=True,
		disposal=1,
	)
	print(f"Animated existing architecture image: {GIF_PATH}")


if __name__ == "__main__":
	main()
