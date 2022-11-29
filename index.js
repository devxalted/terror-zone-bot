const { Client, GatewayIntentBits } = require('discord.js')
const fetch = require('node-fetch')
const {getTerrorZone} = require('./getTerrorZone')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

// OAUTH login
client.login(process.env.DISCORD_TOKEN).then( async (res, err) => {
    if (err) console.error(err)
})

client.on('ready', async () => {

    await getTerrorZone(client, fetch)

    // Ready
    console.log('Bot is ready.')

    // Check time
    let time = new Date;
    const timeNow = Date.now()
    time.setTime(timeNow)
    time = time.getMinutes()

    // Determine time until next :05
    let waitTime
    if (time !== 5) {
        console.log(60- time + 5, 'minutes until the next zone is announced.')
        waitTime = (60 - time + 5) * 60000
    }

    // At :05 ping API
    setTimeout(async () => {
        await getTerrorZone(client, fetch)
        // Set Interval for 1 Hour to ping API and post to channel
        setInterval(async () => {
            await getTerrorZone(client, fetch)
        }, 3600000)
    }, waitTime)

})


// Slash commands
// client.on('messageCreate', (message) => {
//     if (message.content === 'fml') {
//         message.reply('Fuck your life')
//     }
// })
