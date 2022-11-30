const { SlashCommandBuilder } = require ('discord.js');

module.exports = { 
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping'),
    execute(interaction) {
        interaction.reply({ content: 'Pong!'});
    }
}