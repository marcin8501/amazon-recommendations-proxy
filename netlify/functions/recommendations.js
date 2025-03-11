// Simple recommendations function
exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  // Return a simple response with mock data
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      choices: [
