/**
 * Netlify Function to handle contact form submissions
 * Stores orders and sends email notifications
 */

// Simple in-memory storage (for demonstration)
// In production, use Supabase or Firebase
const orders = [];

export default async (event, context) => {
  // Only accept POST requests
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
      status: "pending", // pending, quoted, completed
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
    };

    // Store in memory (replace with Supabase in production)
    orders.push(order);

    // Log for Netlify dashboard
    console.log("📋 New Order #" + order.id, {
      name,
      orderType,
      phone,
      timestamp: order.timestamp,
    });

    // Send notification email (to be configured with Resend/SendGrid)
    const businessEmail = process.env.BUSINESS_EMAIL || "gdurga18@gmail.com";

    // Email template
    const emailContent = `
📋 NEW ORDER SUBMISSION

Customer: ${name}
Phone: ${phone}
Email: ${email}
Order Type: ${orderType}

Details:
- Recliner Type: ${reclinerType || "N/A"}
- Quantity: ${quantity}
- Dimensions: ${dimensions || "Not specified"}
- Fabric: ${fabric || "Not specified"}
- Delivery: ${delivery || "Not specified"}
- Message: ${message || "None"}

Time: ${new Date(order.timestamp).toLocaleString()}

🔗 View in admin: ${process.env.SITE_URL || "https://your-site.netlify.app"}/admin

Action: Review requirements and contact within 24 hours
    `;

    try {
      // Optional: Send via email service (configure API key in Netlify env)
      if (process.env.RESEND_API_KEY) {
        // Will implement Resend in next version
        console.log("Email service configured");
      }
      // Fallback: Just log for now
      console.log("📧 Would send email to:", businessEmail);
    } catch (emailError) {
      console.warn("Email sending failed:", emailError.message);
      // Don't fail the order if email fails
    }

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
    console.error("Error processing form:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process submission" }),
    };
  }
};

// For testing - return stored orders
export const getOrders = () => orders;
