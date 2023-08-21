const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
    const newEmbed = new EmbedBuilder()
      .setTitle('AFFILIATES')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png')
      .setDescription("This is where Aegis Core's allies and public discords are listed. \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **__AEGIS CORE__** <:aegis:602974125614432256> \n [*Group*](https://www.roblox.com/groups/3243022/Aegis-Core) \n [*Discord*](https://discord.gg/gZaAusGgKm) \n \n **__AEGIS REAPERS__** <:reaper:1134382516179046470>\n [*Group*](https://www.roblox.com/groups/5748590/Aegis-Reapers#!/about) \n [*Discord*](https://discord.gg/rHYaUBCsvK)")
      .setColor('E200FF')
      .setFooter({ text: 'FOR THE CORE', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png' });
    client.channels.cache.get('417390559678824458').messages.fetch('1134382609502310500').then((msg) => msg.edit({ embeds: [newEmbed] }));
  }
}