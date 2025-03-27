# Node-Cron POC: Scheduled Task Automation in Node.js

## Overview
This repository showcases a Proof of Concept (POC) for scheduling automated tasks in a Node.js application using `node-cron`. The implementation includes:
- **Automated patient messages** based on time of day.
- **Care team notifications** during business hours.
- **CRON jobs** to run scheduled tasks at specific intervals.

## Features
- 📩 **Express API** to receive patient messages and send automated responses.
- ⏳ **Time-aware messaging** using `moment-timezone` to ensure accuracy in EST (Eastern Standard Time).
- 🔔 **Care team notifications** triggered between 9 AM - 8 PM EST.
- ⏰ **CRON job scheduling** to automate tasks every minute during business hours.

## Technologies Used
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast and lightweight web framework
- **node-cron** - Task scheduling library for Node.js
- **moment-timezone** - Timezone handling for scheduling accuracy
- **Nodemon** - Auto-restart server for smoother development

## Installation & Setup
Follow these steps to run the project locally:

### 1️⃣ Clone the repository:
```sh
 git clone https://github.com/your-username/node-cron-poc.git
```

### 2️⃣ Navigate to the project directory:
```sh
 cd node-cron-poc
```

### 3️⃣ Install dependencies:
```sh
 npm install
```

### 4️⃣ Start the server:
```sh
 npm start
```

## Usage
### Sending an Automated Message
Send a **POST** request to the following endpoint:
```http
 POST /send-message
```
#### Example Request Body:
```json
{
  "patientName": "John Doe"
}
```
#### Example Using `curl`:
```sh
curl -X POST http://localhost:3000/send-message \
     -H "Content-Type: application/json" \
     -d '{"patientName": "John Doe"}'
```

## CRON Job Scheduling
The system executes a CRON job **every minute** to check the current time:
- **Between 9 AM - 8 PM EST** → Notifies the care team about new messages.
- **Outside business hours** → No notifications are sent.

## License
This project is licensed under the **ISC License**.

## Author
👤 **Vishal Kumar Nigam**

