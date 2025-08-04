// File: functions/telegram.js
const axios = require("axios");
const TELEGRAM_TOKEN = functions.config().telegram.token;
const CHAT_ID = functions.config().telegram.chat_id;

module.exports = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });
  } catch (err) {
    console.error("Gagal kirim notif Telegram:", err.message);
  }
};
