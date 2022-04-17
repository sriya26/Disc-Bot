const{Client, Intents}=require('discord.js');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        "GUILD_MEMBERS"
    ] 
});

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
     );

const ChannelID1=''
const ChannelID2=''
const ChannelID3=''


client.on('ready',()=> {
    console.log(`${client.user.tag} has logged in`);
    
});

client.on('guildMemberAdd', async(member) =>{
    client.channels.cache.get(ChannelID1).setName(`🌏 Total: ${member.guild.memberCount}`)
    client.channels.cache.get(ChannelID2).setName(`👤 Members: ${member.guild.members.cache.filter(member=>!member.user.bot).size}`)
    client.channels.cache.get(ChannelID3).setName(`🤖 Bots: ${member.guild.members.cache.filter(member=>member.user.bot).size}`)
    
})

client.on('guildMemberRemove', async(member) =>{
    client.channels.cache.get(ChannelID1).setName(`🌏 Total: ${member.guild.memberCount}`)
    client.channels.cache.get(ChannelID2).setName(`👤 Members: ${member.guild.members.cache.filter(member=>!member.user.bot).size}`)
    client.channels.cache.get(ChannelID3).setName(`🤖 Bots: ${member.guild.members.cache.filter(member=>member.user.bot).size}`)
   
})

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
      const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
      if (CMD_NAME === 'kick') {
        if (!message.member.hasPermission('KICK_MEMBERS'))
          return message.reply('You do not have permissions to use that command');
        if (args.length === 0)
          return message.reply('Please provide an ID');
        const member = message.guild.members.cache.get(args[0]);
        if (member) {
          member
            .kick()
            .then((member) => message.channel.send(`${member} was kicked.`))
            .catch((err) => message.channel.send('Cannot kick the user :('));
        } else {
          message.channel.send('The member was not found');
        }
      } else if (CMD_NAME === 'ban') {
        if (!message.member.hasPermission('BAN_MEMBERS'))
          return message.reply("You do not have permissions to use that command");
        if (args.length === 0) return message.reply("Please provide an ID");
        try {
          const user = await message.guild.members.ban(args[0]);
          message.channel.send('User was banned successfully');
        } catch (err) {
          console.log(err);
          message.channel.send('An error occured');
        }
      } else if (CMD_NAME === 'announce') {
        console.log(args);
        const msg = args.join(' ');
        console.log(msg);
        webhookClient.send(msg);
      }
    }
  });


  client.on('messageReactionAdd', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '') {
      switch (name) {
        case '1️⃣':
          member.roles.add('');
          break;
        case '2️⃣':
          member.roles.add('');
          break;
        case '3️⃣':
          member.roles.add('');
          break;
       
      }
    }
  });
  
  client.on('messageReactionRemove', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '') {
      switch (name) {
        case '1️⃣':
          member.roles.remove('');
          break;
        case '2️⃣':
          member.roles.remove('');
          break;
        case '3️⃣':
          member.roles.remove('');
          break;
      }
    }
  });

client.login('process.env.DISCORD_BOT_TOKEN');


OTU2NjQ2MTgyNjI3NzI1MzUy.YjzQLw.t9x3_8pP5MYBeokdBGm3rkBM9jQ



