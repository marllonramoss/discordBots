function loadCommands(client) {
    const ascii = require('ascii-table');
    const fs = require('fs');
    const table = new ascii().setHeading('Comandos', 'Estado');
    const commandsFolder = fs.readdirSync('./Commands');
    let commandsArray = [];
    for (const folder of commandsFolder) {
        const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith('.js'));
        for (const file of commandFiles) {
            const commandFile = require(`../Commands/${folder}/${file}`);
            const properties = { folder, ...commandFile };
            client.commands.set(commandFile.data.name, properties);
            commandsArray.push(commandFile.data.toJSON());
            table.addRow(file, 'Carregado');
            continue;
        }
    }
    client.application.commands.set(commandsArray);
    return console.info(table.toString() + '\nComandos Carregados!\n');
}

module.exports = { loadCommands };