const { Client, EmbedBuilder, GatewayIntentBits  } = require('discord.js');

module.exports = {
   async execute(client) {
    const newEmbed = new EmbedBuilder()
      .setTitle('VALOR PROGRESSION')
      .setThumbnail('https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png')
      .setDescription("The list of Valor and Rank requirements for each rank in Aegis Core. \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **E | Cadet** - *0 Valor* \n **E | Tier 1** - *1 Valor* \n **E | Tier 2** - *10 Valor* \n **[A] Scout** - *25 Valor* \n **[A] Trooper** - *45 Valor* \n **[A] Predator** - *80 Valor* \n **[A] Paladin** - *125 Valor* \n **[A] Sentinel** - *190 Valor* \n **[A] Vanguard** - *200 Valor* \n **[A] Champion** - *425 Valor* \n **[NCO] Dreadnaught** - *Marshal+ approval and pass OIT* \n **[O] Officer** - *Promoted based on activity* \n **[O] Justicar** - *Promoted based on activity* \n **[M] Marshal** - *Chosen by Admiral+* \n **[X] Admiral** - *Head of Department/Division* \n **[X] VPOTAC** - *Second in Command* \n **[X] POTAC** - *Leader of Aegis Core*")
      .setColor('C39DFF')
      .setFooter({ text: 'FOR THE CORE', iconURL: 'https://cdn.discordapp.com/attachments/724140894609080381/1134372043786293258/transparent.png' });
    client.channels.cache.get('417390559678824458').messages.fetch('1134385240358526996').then((msg) => msg.edit({ embeds: [newEmbed] }));
  }
}