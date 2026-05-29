/**
 * Netlify Function to handle contact form submissions
 * Stores orders in memory and serves them via GET (for admin dashboard)
 */

// In-memory storage
let ordersStorage = [];

export default async (event, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS (preflight) requests
  if (event.httpMethod === "OPTIONS") {
    return new Response("OK", { status: 200, headers });
  }

  // Handle GET requests - return stored orders
  if (event.httpMethod === "GET") {
    return new Response(
      JSON.stringify({
        success: true,
        orders: ordersStorage,
        count: ordersStorage.length,
      }),
      { status: 200, headers }
    );
  }

  // Handle POST requests - create new order
  if (event.httpMethod !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers }
    );
  }

  try {
    let body;
    try {
      body = event.body ? JSON.parse(event.body) : {};
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        { status: 400, headers }
      );
    }

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

    // Validate required fields
    if (!name || !phone || !orderType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, phone, orderType" }),
        { status: 400, headers }
      );
    }

    // Create order object
    const order = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: "pending",
      name,
      email: email || null,
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
    ordersStorage.unshift(order);
    
    // Keep only last 50 orders
    if (ordersStorage.length > 50) {
      ordersStorage = ordersStorage.slice(0, 50);
    }

    console.log("✅ ORDER #" + order.id + " from " + name);

    return new Response(
      JSON.stringify({
        success: true,
        orderId: order.id,
        message: "Thank you! Your order has been received. We'll contact you within 24 hours.",
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("❌ Function error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error: " + (error instanceof Error ? error.message : "Unknown") 
      }),
      { status: 500, headers }
    );
  }
};
