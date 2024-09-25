const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    message.reply({
        content: "Hi from Bot!"
    });

    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1].trim();
        message.reply({
            content: `Generating Short ID for ${url}`,
        });
    }
});

client.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;

    interaction.reply("Pong!").catch(console.error);
});

client.login('bot token'); // Ensure you replace 'YOUR_BOT_TOKEN' with your actual bot token

