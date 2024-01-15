import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

await client.login("BOT_TOKEN");

client.once("ready", (client) => {
  console.log(client.user.username);
});
