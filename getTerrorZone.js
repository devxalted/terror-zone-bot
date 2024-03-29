const axios = require('axios')
const getTerrorZone = async ( client) => {

    const config = {
        url: `https://d2runewizard.com/api/terror-zone?token=${process.env.TRACKER_TOKEN}`,
        method: 'GET',
        headers: {
            'D2R-Contact': 'jake@exalted.dev',
            'D2R-Platform': 'Discord',
            'D2R-Repo': 'https://github.com/jlaflash95/terror-zone-bot'
        }
    }
    let res = await axios(config)
    res = await res.data

    // console.log(res.terrorZone.zone)
    // console.log(res.terrorZone.act)

    // Filter for desired zones:
    const NvDzones = [
        'Chaos Sanctuary',
        'Tal Rasha\'s Tombs and Tal Rasha\'s Chamber',
        'Worldstone Keep, Throne of Destruction, and Worldstone Chamber',
    ]

    const PvPzones = [
        'Chaos Sanctuary',
        'Tal Rasha\'s Tombs and Tal Rasha\'s Chamber',
        'Worldstone Keep, Throne of Destruction, and Worldstone Chamber'
    ]

    //Secret NVD Club
    if (NvDzones.indexOf(res.terrorZone.zone) !== -1) {
        //Report back to channel the terror zone
        client.channels.cache.get('1038170492999319622').send(`TERROR ZONE ALERT: ${res.terrorZone.zone} IS ON NOW! @here`) // <-- This works to send a message to a channel.
        console.log(res.terrorZone.zone)
    } else {
        // Report back to channel the terror zone
        client.channels.cache.get('1038170492999319622').send(`TERROR ZONE ALERT: ${res.terrorZone.zone} in ${res.terrorZone.act}`) // <-- This works to send a message to a channel.
        console.log(res.terrorZone.zone)
    }

    // D2R PVP League
    if (PvPzones.indexOf(res.terrorZone.zone) !== -1) {
        //Report back to channel the terror zone
        client.channels.cache.get('1051976164270415912').send(`TERROR ZONE ALERT: ${res.terrorZone.zone} IS ON NOW! @here`) // <-- This works to send a message to a channel.
    } else {
        // Report back to channel the terror zone
        client.channels.cache.get('1051976164270415912').send(`TERROR ZONE ALERT: ${res.terrorZone.zone} in ${res.terrorZone.act}`) // <-- This works to send a message to a channel.
    }

}

module.exports = {
    getTerrorZone
}
