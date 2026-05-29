// In-memory storage
let ordersStorage = [];

export const handler = async (event, context) => {
  try {
    // Parse the body
    let body = {};
    if (event.body) {
      body = JSON.parse(event.body);
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
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ 
          error: "Missing required fields",
          received: { name, phone, orderType }
        }),
      };
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
    console.error("❌ Function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ 
        error: "Server error: " + (error instanceof Error ? error.message : "Unknown") 
      }),
    };
  }
};

// Also export as default for compatibility
export default handler;
