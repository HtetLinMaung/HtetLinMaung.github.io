from __future__ import annotations

import argparse
import subprocess
import tempfile
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
RESUME_ROOT = PROJECT_ROOT / "resume-design"
HTML = RESUME_ROOT / "html/index.html"
CHROME = Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")


def export(output: Path, theme: str | None = None) -> None:
	if not CHROME.exists():
		raise FileNotFoundError(f"Google Chrome was not found at {CHROME}")

	url = HTML.resolve().as_uri()
	if theme:
		url = f"{url}?theme={theme}"

	output.unlink(missing_ok=True)
	with tempfile.TemporaryDirectory(prefix="resume-pdf-") as profile:
		try:
			subprocess.run(
				[
					str(CHROME),
					"--headless=new",
					"--disable-gpu",
					"--disable-background-networking",
					"--disable-component-update",
					"--disable-default-apps",
					"--disable-sync",
					"--no-first-run",
					"--no-pdf-header-footer",
					f"--user-data-dir={profile}",
					f"--print-to-pdf={output}",
					url,
				],
				check=True,
				stdout=subprocess.DEVNULL,
				stderr=subprocess.DEVNULL,
				timeout=10,
			)
		except subprocess.TimeoutExpired:
			# Some Chrome versions write the PDF but keep the headless process alive.
			if not output.exists() or output.stat().st_size < 10_000:
				raise


def main() -> None:
	parser = argparse.ArgumentParser(description="Export the final resume PDFs from the HTML source.")
	parser.add_argument("--theme", choices=("warm", "white", "all"), default="all")
	args = parser.parse_args()

	if args.theme in ("warm", "all"):
		export(RESUME_ROOT / "htet-lin-maung-resume.pdf")
	if args.theme in ("white", "all"):
		export(RESUME_ROOT / "htet-lin-maung-resume-white.pdf", "white")

	print(f"Exported {args.theme} resume PDF output.")


if __name__ == "__main__":
	main()
