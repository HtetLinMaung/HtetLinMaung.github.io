const baseUrl = import.meta.env.BASE_URL;

export const withBase = (path) => {
	if (!path || /^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(path)) {
		return path;
	}

	return `${baseUrl}${path.replace(/^\/+/, "")}`;
};
