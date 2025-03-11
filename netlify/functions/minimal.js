// Absolutely minimal function
exports.handler = async function() {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "This is a minimal test function" })
  };
}; 