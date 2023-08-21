const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
    const newEmbed = new EmbedBuilder()
      .setTitle('AEGIS CORE')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png')
      .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n Welcome to **Aegis Core**! \n \n To begin your journey and gain access to the rest of our Discord server, you must complete the verification process with our bot, <@!438125419858886666>. \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **[STEP I] - ** *Make sure you're in [**Aegis Core**](https://www.roblox.com/groups/3243022/Aegis-Core#!/about).* \n \n **[STEP II] - ** *Use the `/verify` command. Follow the instructions given by Clan Labs.* \n \n **[STEP II (CONT)] - ** *Already verified with Clan Labs? Use `/getroles` instead!* \n \n")
      .setColor('ff5a00')
      .setImage('https://images-ext-1.discordapp.net/external/RcIGDbbcAK1JtqM8-uMrU0wyB5cKpKEG2zrHmp-FVc8/https/cdn-longterm.mee6.xyz/plugins/embeds/images/403010986858119178/5b34e71b1ec9ed2e7d687b8f1a16b9f1be8a968db4f06a7eca3ae457d8da085e.gif')
      .setFooter({ text: 'FOR THE CORE', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png' });
      client.channels.cache.get('711256473325404240').messages.fetch('1134550336384794676').then((msg) => msg.react('602974125614432256') && msg.edit({ embeds: [newEmbed] }));
  }
}