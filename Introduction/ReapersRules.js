const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
   const newEmbed = new EmbedBuilder()
      .setTitle('DISCORD RULES')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134544809789497474/reaper_trans.png')
      .setDescription("The following rules apply to the Discord and in-game. \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **[1] - **Do not post anything offensive, explicit, or harmful. This includes NSFW, phishing links, and malicious links. \n **[2] - **Spamming of any sort is not allowed. \n **[3] - **Advertising unaffiliated Discords and Roblox groups is prohibited. \n **[4] - **Breaking any of [Roblox's Terms of Service](https://www.roblox.com/info/terms?locale=en_us) will result in your immediate removal from Aegis Core and Aegis Reapers. \n **[5] - **The Aegis  Reapers uniform is optional. However, it is highly encouraged. You may wear any Aegis Core or Reaper uniform. \n **[6] - **Breaking any of [Discord's Terms of Service](https://discordapp.com/terms) will result in your immediate removal from Aegis Core and Aegis Reapers \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **Failure to comply with Aegis Reapers's rules will result in a mute, temporary ban, or blacklist**")
      .setColor('ff5a00')
      .setFooter({ text: 'REAPERS REPRESENT', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134544809789497474/reaper_trans.png' });
    client.channels.cache.get('1132521425882849376').messages.fetch('1134545431527960656').then((msg) => msg.edit({ embeds: [newEmbed] }));
  }
}