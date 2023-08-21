const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
    const newEmbed = new EmbedBuilder()
      .setTitle('DISCORD RULES')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png')
      .setDescription("In Aegis Core, there's a set of aligned rules that apply in the Discord Server and in-game. \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **[1] - **Do not post anything offensive, explicit, or harmful. This includes NSFW, phishing links, and malicious links. \n **[2] - **Spamming of any sort is not allowed. \n **[3] - **Advertising unaffiliated Discords and Roblox groups is prohibited. \n **[4] - **Breaking any of [Roblox's Terms of Service](https://www.roblox.com/info/terms?locale=en_us) will result in your immediate removal from Aegis Core. \n **[5] - **The Aegis Core uniform is optional. However, it is highly encouraged. \n **[6] - **Breaking any of [Discord's Terms of Service](https://discordapp.com/terms) will result in your immediate removal from Aegis Core \n **[7] - ** THE FOLLOWING ARE NOT ALLOWED TO RAID/DEFEND AGAINST AEGIS CORE (INCLUDING ALTERNATIVE ACCOUNTS)\n \n- Officer \n- Warlord \n- Justicar \n- Marshal \n- Admiral \n- VPOTC \n- POTAC \n- Aegis Blackhawk \n- Aegis Safeguard \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **Failure to comply with Aegis Core's rules will result in a mute, temporary ban, or blacklist**")
      .setColor('ff5a00')
      .setFooter({ text: 'FOR THE CORE', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png' });
    client.channels.cache.get('417390559678824458').messages.fetch('1134377928122191953').then((msg) => msg.edit({ embeds: [newEmbed] }));
  }
}