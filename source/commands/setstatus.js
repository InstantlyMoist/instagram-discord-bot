exports.run = (client, message, args) => {
    let status = message.content.split(' ');

    // Return if command has more parameters than 1
    if(status.length >= 3) return; 

    status = status[1].toUpperCase();

    client.channels.get('678338508838141965').setName(`Status | ${status}`);
    message.channel.send(`Server status was set to: ${status}`).catch(console.error);
}