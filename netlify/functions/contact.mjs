/**
 * Netlify Function to handle contact form submissions
 * Stores orders in memory and serves them via GET (for admin dashboard)
 */

// In-memory storage (persists during function warm time)
let ordersStorage = [];

export default async (event, context) => {
  // Handle GET requests - return stored orders (for admin dashboard)
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
        orders: ordersStorage,
        count: ordersStorage.length,
      }),
    };
  }

  // Handle POST requests - create new order
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : event.queryStringParameters;

    const {
      name,
      email,
      phone,
      orderType,
      reclinerType,
      quantity,
      dimensions,
      fabric,
      delivery,
      message,
    } = body;

    // Create order object
    const order = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: "pending",
      name,
      email,
      phone,
      orderType,
      reclinerType: reclinerType || null,
      quantity: quantity || "1",
      dimensions: dimensions || null,
      fabric: fabric || null,
      delivery: delivery || null,
      message: message || null,
    };

    // Store in memory
    ordersStorage.unshift(order); // Add to beginning
    
    // Keep only last 50 orders in memory
    if (ordersStorage.length > 50) {
      ordersStorage = ordersStorage.slice(0, 50);
    }

    // Log to Netlify dashboard
    console.log("✅ NEW ORDER #" + order.id);
    console.log(`📋 ${order.name} | ${order.orderType}`);
    console.log(`📞 ${phone} | 📧 ${email}`);
    console.log(`⏰ ${order.timestamp}`);
    console.log("---");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
        orderId: order.id,
        message: "Thank you! Your order has been received. We'll contact you within 24 hours.",
      }),
    };
  } catch (error) {
    console.error("❌ Error processing form:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process submission" }),
    };
  }
};
