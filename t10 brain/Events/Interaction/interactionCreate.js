const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    once: false,
    execute(interaction, client) {
        const command = client.commands.get(interaction.commandName);
        if (!interaction.isChatInputCommand()) return;
        if (!command) {
            interaction.reply({ content: 'Este Comando Está Desatualizado Ou Não Existe!' });
        }
        command.execute(interaction, client);
    }
}

