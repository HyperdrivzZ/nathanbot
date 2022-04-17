const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    username: "Nathan",
    host: "play.rockgaming.de",
  });
  bot.on("login", () => {
    var password = "12345678";
    setTimeout(() => {
      bot.chat(`/register ${password} ${password}`);
      bot.chat(`/login ${password}`);
    }, 500);
  });
  bot.on("message", (username, message) => {
    if (username === bot.username) return;
    console.log(username.getText());
    if (
      username.getText() ===
      `[earth] Trusted | AyanZ__ : ${bot.username} tpa me`
    ) {
      bot.chat("/tpa AyanZ__");
    } else if (
      username.getText() ===
      `[earth] Trusted | AyanZ__ : ${bot.username} tpahere me`
    ) {
      bot.chat("/tpahere AyanZ__");
    }
  });
}
createBot();
