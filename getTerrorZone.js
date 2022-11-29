const getTerrorZone = async ( client ) => {

    const config = {
        method: 'GET',
    }
    let res = await fetch(`https://d2runewizard.com/api/terror-zone?token=${process.env.TRACKER_TOKEN}`, config)
    res = await res.json()

    // console.log(res.terrorZone.zone)
    // console.log(res.terrorZone.act)

    // Filter for desired zones:
    const zones = [
        'Dry Hills and Halls of the Dead',
        'Chaos Sanctuary',
        'Tal Rasha\'s Tombs and Tal Rasha\'s Chamber',
        'Ancient\'s Way and Icy Cellar',
        'Worldstone Keep, Throne of Destruction, and Worldstone Chamber',
    ]

    if (zones.indexOf(res.terrorZone.zone) !== -1) {
        //Report back to channel the terror zone
        client.channels.cache.get('1038170492999319622').send(`TERROR ZONE ALERT: ${res.terrorZone.zone} IS ON NOW! @here`) // <-- This works to send a message to a channel.
    } else {
        // Report back to channel the terror zone
        client.channels.cache.get('1038170492999319622').send(`TERROR ZONE ALERT: ${res.terrorZone.zone} in ${res.terrorZone.act}`) // <-- This works to send a message to a channel.
    }

}

module.exports = {
    getTerrorZone
}
