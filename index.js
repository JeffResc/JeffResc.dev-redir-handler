export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Remove trailing slash for consistent matching
    const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

    let redirectUrl;

    // Handle specific redirect rules
    if (normalizedPath === '/mentions') {
      redirectUrl = 'https://jeffrescignano.io/media-mentions';
    } else if (normalizedPath === '/blog') {
      redirectUrl = 'https://jeffrescignano.io/blog';
    } else if (normalizedPath === '/blog/creating-a-smart-led-dimmer') {
      redirectUrl = 'https://jeffrescignano.io/blog/creating-a-smart-led-dimmer/';
    } else if (normalizedPath === '/blog/sonoff-d1-dimmer-running-esphome' || normalizedPath === '/blog/2020-10-10') {
      redirectUrl = 'https://jeffrescignano.io/blog/creating-a-smart-led-dimmer/';
    } else {
      // Default redirect for all other requests
      redirectUrl = 'https://jeffrescignano.io';
    }

    return Response.redirect(redirectUrl, 301);
  }
};