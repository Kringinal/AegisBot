const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
  const newEmbed = new EmbedBuilder()
      .setTitle('AFFILIATES')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134544809789497474/reaper_trans.png')
      .setDescription("The links listed are directly involved with Aegis Reapers. \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **__AEGIS CORE__** <:aegis:602974125614432256> \n [*Group*](https://www.roblox.com/groups/3243022/Aegis-Core) \n [*Discord*](https://discord.gg/gZaAusGgKm) \n \n **__AEGIS REAPERS__** <:reaper:1134382516179046470>\n [*Group*](https://www.roblox.com/groups/5748590/Aegis-Reapers#!/about) \n [*Discord*](https://discord.gg/rHYaUBCsvK)")
      .setColor('E200FF')
      .setFooter({ text: 'REAPERS REPRESENT', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134544809789497474/reaper_trans.png' });
    client.channels.cache.get('1132521425882849376').messages.fetch('1134546024078266448').then((msg) => msg.edit({ embeds: [newEmbed] }));
  }
}