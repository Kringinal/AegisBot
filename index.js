const ENV = process.env
const fs = require('node:fs');
const cron = require('node-cron');
const axios = require('axios').default;
const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');
const express = require('express');
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent,  GatewayIntentBits.GuildMessages,] }); 
const IntroductionChannelFiles = fs.readdirSync('./Introduction').filter(file => file.endsWith('.js'));

function disc_login() {
  client.login(ENV['DIS_TOKEN']).then(function() {
    console.log("logged in to Discord");
  })
    .catch(function(error) {
      console.log("There was an error when attempting to log in to discord.. " + error)
    })
}

  client.on("messageCreate", (message) => {
    if (message.channel.id == 1143067131911622676) {
      var Content = message.content
      const AegisDevelopment = client.guilds.cache.get('403010986858119178').channels.cache.get('417393171333644298') || client.channels.cache.get('417393171333644298');
      return AegisDevelopment.send({ files: Array.from(message.attachments.values()), content: Content})
        .then(msg => {
          const Emoji = client.emojis.cache.find(emoji => emoji.name === "aegis");
          msg.react(Emoji)
        })
    } else if (message.channel.id == 1143067106791927808) {
      var Content = message.content
      const ReapersDevelopment = client.guilds.cache.get('1132521425023017080').channels.cache.get('1132521426147086356') || client.channels.cache.get('1132521426147086356');
      return ReapersDevelopment.send({ files: Array.from(message.attachments.values()), content: Content})
        .then(msg => {
          const Emoji = client.emojis.cache.find(emoji => emoji.name === "reapers");
          msg.react(Emoji)
        })
    } else if (message.channel.id == 1143067076584546335) {
      var Content = message.content
      const AegisDevelopment = client.guilds.cache.get('403010986858119178').channels.cache.get('417393171333644298') || client.channels.cache.get('417393171333644298');
      const ReapersDevelopment = client.guilds.cache.get('1132521425023017080').channels.cache.get('1132521426147086356') || client.channels.cache.get('1132521426147086356');
      AegisDevelopment.send({ files: Array.from(message.attachments.values()), content: Content})
        .then(msg => {
          const Emoji = client.emojis.cache.find(emoji => emoji.name === "aegis");
          msg.react(Emoji)
        })
       return ReapersDevelopment.send({ files: Array.from(message.attachments.values()), content: Content})
        .then(msg => {
          const Emoji = client.emojis.cache.find(emoji => emoji.name === "reapers");
          msg.react(Emoji)
        })
    }
  }),

disc_login();

cron.schedule('*/2 * * * *', async () => {
  await axios
  .get(
    `https://aegis-core-3a66fcf46556.herokuapp.com/`
  )
})

client.on('ready', () => { 
  //const logChannel = client.channels.cache.get('711256473325404240') || client.channels.fetch('711256473325404240');
  //logChannel.send({ embeds: [newEmbed] })
  for (const file of IntroductionChannelFiles) {
      const command = require(`./Introduction/${file}`);
      command.execute(client)
      console.log(`\n // Updated ${file}. //`)
  }
})

let index = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

app.listen(process.env.PORT || 5000, () => {
  console.log('listening');
});

module.exports = app;