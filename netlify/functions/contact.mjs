import { handler } from "@netlify/functions";

/**
 * Netlify Function to handle contact form submissions
 * This receives form data and can be viewed in Netlify Forms dashboard
 */
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

    const { name, email, phone, orderType, reclinerType, quantity, dimensions, fabric, delivery, message } = body;

    // Log submission for debugging
    console.log("📋 New Order Submission:", {
      name,
      email,
      phone,
      orderType,
      timestamp: new Date().toISOString(),
    });

    // Here you could:
    // - Send an email notification
    // - Store in a database
    // - Send to a webhook

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
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
