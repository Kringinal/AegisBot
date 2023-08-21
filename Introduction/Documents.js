const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
    const newEmbed = new EmbedBuilder()
      .setTitle('AEGIS CORE DOCUMENTS')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png')
      .setDescription("Aegis Core official documents. \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n [**OFFICER APPLICATION**](https://forms.gle/Rkgumpbmy3bLXT3a6) \n \n [**PUBLIC BLACKLIST**](https://docs.google.com/spreadsheets/d/1VITRJSQCyeo_F2BdDHSvlBdXWqDqZ1WPVtrxZOs2ThQ/edit)")
      .setColor('89CFF0')
      .setFooter({ text: 'FOR THE CORE', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png' });
    client.channels.cache.get('417390559678824458').messages.fetch('1134379896320303114').then((msg) => msg.edit({ embeds: [newEmbed] }));
  }
}