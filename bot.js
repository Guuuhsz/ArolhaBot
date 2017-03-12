const Discord = require("discord.js");
const bot = new Discord.Client();
const settings = require("./arolha.json");
const prefix = "?";

bot.on('ready', () => {
  console.log(`Logado como ${bot.user.username} e pronto para funcionar!`);
});

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  if(message.content.startsWith(prefix + "ping")) {
    message.reply("pong!");
    }
});

bot.login(settings.token);
