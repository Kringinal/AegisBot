const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
   const newEmbed = new EmbedBuilder()
      .setTitle('VALOR PROGRESSION')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134544809789497474/reaper_trans.png')
      .setDescription("Aegis Reapers uses an XP based system called Valor. Any information reguarding requirements can be found below.  \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n [AEGIS REAPERS | Progression](https://docs.google.com/document/d/1bDTMhySsEFi2EzpCVQhqMGCo7NNUm81uX6dFU8xe5VM/edit?usp=sharing)")
      .setColor('C39DFF')
      .setFooter({ text: 'REAPERS REPRESENT', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134544809789497474/reaper_trans.png' });
    client.channels.cache.get('1132521425882849376').messages.fetch('1134547803008409630').then((msg) => msg.edit({ embeds: [newEmbed] }));
  }
}