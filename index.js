const express = require("express");
const cron = require("node-cron");
const moment = require("moment-timezone");
const app = express();
app.use(express.json());

const EST_TIMEZONE = "America/New_York";

// Automated Messages
const getAutomatedMessage = (patientName) => {
  const currentTime = moment().tz(EST_TIMEZONE);
  const currentHour = currentTime.hour();
  console.log(currentHour);
  if (currentHour >= 9 && currentHour < 20) {
    return `Hi ${patientName}, thanks for reaching out. We’ve received your message and will review it along with your chart. Your care manager will follow up within the next two hours, if not sooner. In the meantime, feel free to continue messaging us, and we’ll review everything.\n\nIf this is a medical emergency, please call 911.`;
  } else {
    return `Hi ${patientName}, thanks for reaching out. We’ve received your message and will review it along with your chart. Your care manager will follow up by the next business day. In the meantime, feel free to continue messaging us, and we’ll review everything.\n\nIf this is a medical emergency, please call 911.`;
  }
};

// Endpoint to Handle Patient Messages
app.post("/send-message", (req, res) => {
  const { patientName } = req.body;

  if (!patientName) {
    return res.status(400).json({ error: "Patient name is required" });
  }

  const message = getAutomatedMessage(patientName);
  console.log(`Message sent to ${patientName}:`, message);

  res.json({ success: true, message });
});

// Care Team Notification
const notifyCareTeam = () => {
  console.log("🔔 Notification: You have a new patient message. Please review it at your earliest convenience.");
};

// CRON Job to Run Every Minute (Between 9 AM - 8 PM EST)
cron.schedule("* * * * *", () => {
  const currentTime = moment().tz(EST_TIMEZONE);
  const currentHour = currentTime.hour();

  if (currentHour >= 9 && currentHour < 20) {
    notifyCareTeam();
  }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});