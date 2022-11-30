module.exports = { 
    name: 'ready',
    once: true,
    execute(client) {
        console.info(`${client.user.username} foi ligado com Sucesso!`)
    }
}