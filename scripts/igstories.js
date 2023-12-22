function rejectInstagramStories(request) {
    let url = request.url;
    if (url.includes("https://www.instagram.com/api/v1/injected_story_units/")) {
        return {
            response: {
                status: 403,
                body: '',  // 返回的响应体可以为空
                headers: {
                    'Content-Type': 'text/plain',
                }
            }
        };
    }
    // 如果 URL 不匹配，就正常放行该请求
    return {
        response: {
            status: request.status,
            body: request.body,
            headers: request.headers
        }
    };
}

module.exports = {
    onRequest: rejectInstagramStories
};