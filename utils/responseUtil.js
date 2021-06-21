exports.generateHTTPResponse = (http) => {
    return {
        statusCode: http.statusCode,
        body: JSON.stringify(http.body),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,DELETE"
            // "Access-Control-Allow-Methods": "POST,GET,OPTIONS,PUT"
        }
    }
}