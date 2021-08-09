const Discord = require("discord.js");
const mapping = {
       "0": "<a:say_0:872807630861647872>",
        "1": "<a:say_1:872807657268985957>",
        "2": "<a:say_2:872807681340108840>",
        "3": "<a:say_3:872807698603835452>",
        "4": "<a:say_4:872807708749856799>",
        "5": "<a:say_5:872807736763641916>",
        "6": "<a:say_6:872807761480671232>",
        "7": "<a:say_7:872807780682186752>",
        "8": "<a:say_8:872807794837975060>",
        "9": "<a:say_9:872807808612065281>",
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {

  
  let toplam = message.guild.memberCount;
  let sunucu = 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let online =
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let tag = message.guild.members.cache.filter(m => m.user.username.includes("✮")).size;
  let tagdakiler = 
      `${tag}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let ses =
      `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let boost = message.guild.premiumSubscriptionCount
  let boostcuk = `${boost}`.split("").map(a => mapping[a] || '0')
  .join("")
  const say = new Discord.MessageEmbed()
  .setDescription(`\`˃\` Sunucuda toplam **${sunucu}** üye bulunmakta
  \`˃\` Sunucuda **${online}** aktif üye bulunmakta
  \`˃\` Sunucuda toplam tagımızı alan **${tagdakiler}**
  \`˃\` Sunucuda **${boostcuk}** adet boost bulunmakta
  \`˃\` Sunucuda sesli sohbetlerde toplam **${ses}** üye bulunmakta`).setFooter("Arcenio 💖 Alves");
  message.channel.send(say)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};//say.#1687 