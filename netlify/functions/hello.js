// Minimal test function with no dependencies
exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  // Return a simple response
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: 'Hello from Netlify function!',
      timestamp: new Date().toISOString(),
      event: {
        path: event.path,
        httpMethod: event.httpMethod
      }
    })
  };
};
