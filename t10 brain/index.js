const { Client, GatewayIntentBit, Partials, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config.json');
const { Guilds, GuildMembers, DirectMessages } = GatewayIntentBits;
const { Channel, GuildMember, Message, User, Reaction } = Partials;
const client = new Client({ intents: [Guilds, GuildMembers, DirectMessages], Partials: [Channel, GuildMember, Message, User, Reaction] });
const { loadEvents } = require('./Handlers/eventHandler')
const { loadCommands } = require('./Handlers/commandHandler')

client.commands = new Collection();


client.login(config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
});