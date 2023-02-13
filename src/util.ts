export const ensureTrailingSlash = (url: string) =>
    url.replace(/\/$/, '') + '/';
