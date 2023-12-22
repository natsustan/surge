/**
 * Surge's HTTP Request Handler
 * @param {Object} request - The HTTP request object
 * @returns {Object} response - The response object with modified status
 */
function onRequest(request) {
    const url = request.url;
    const pattern = /https:\/\/www\.facebook\.com\/ads\//;
    
    if (pattern.test(url)) {
        // If the pattern matches, reject the request by sending a 403 Forbidden response
        return {
            response: {
                status: 403,
                body: '',
                headers: { 'Content-Type': 'text/plain' },
            },
        };
    }

    // If the URL does not match, let it pass through
    return {
        response: request,
    };
}

module.exports = { onRequest };
