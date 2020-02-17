exports.run = (client, message, args) => {
    let posts = message.content.split(' ');

    // Return if command has more parameters than 1
    if(posts.length >= 3) return; 

    posts = posts[1];

    client.channels.get('678338573317046272').setName(`Posts | ${posts}`);
    message.channel.send(`Instagram posts were set to: ${posts}`).catch(console.error);
}