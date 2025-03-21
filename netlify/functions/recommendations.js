// Very minimal recommendations function with no dependencies
exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };
  
  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers
    };
  }
  
  // Return a simple response with mock data
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      choices: [
        {
          message: {
            content: `
              Here are three recommended alternatives:
              
              1. Better Value Alternative: Budget-Friendly Option
                 Price: $239.99
                 Why it's better: Similar features at a lower price point.
                 Key features: Good quality, reliable performance, cost-effective.
              
              2. Premium Option: High-End Alternative
                 Price: $449.99
                 Why it's better: Superior quality and additional premium features.
                 Key features: Extended warranty, premium materials, advanced functionality.
              
              3. Popular Choice: Customer Favorite
                 Price: $329.99
                 Why it's better: Highly rated by customers with proven reliability.
                 Key features: Well-reviewed, trusted brand, excellent support.
            `
          }
        }
      ]
    })
  };
};
