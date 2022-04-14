const{Client, Intents}=require('discord.js');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        "GUILD_MEMBERS"
    ] 
});


const ChannelID1='863460258743320630'
const ChannelID2='956646800062836786'
const ChannelID3='956646838965006356'


client.on('ready',()=> {
    console.log(`${client.user.tag} has logged in`);
    
});

client.on('guildMemberAdd', async(member) =>{
    await client.channels.cache.get(ChannelID1).setName(`Total: ${member.guild.memberCount.size}`)
    await client.channels.cache.get(ChannelID2).setName(`Members: ${member.guild.members.cache.filter(member=>!member.user.bot).size}`)
    await client.channels.cache.get(ChannelID3).setName(`Bots: ${member.guild.members.cache.filter(member=>member.user.bot).size}`)
    
})

client.on('guildMemberRemove', async(member) =>{
    await client.channels.cache.get(ChannelID1).setName(` Total: ${member.guild.memberCount.size}`)
    await client.channels.cache.get(ChannelID2).setName(`Members: ${member.guild.members.cache.filter(member=>!member.user.bot).size}`)
    await client.channels.cache.get(ChannelID3).setName(`Bots: ${member.guild.members.cache.filter(member=>member.user.bot).size}`)
   
})


client.login('OTU2NjQ2MTgyNjI3NzI1MzUy.YjzQLw.t9x3_8pP5MYBeokdBGm3rkBM9jQ');
