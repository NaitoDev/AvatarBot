const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express app!');
});

app.listen(3000, () => {
	console.log('server started');
});

let gif = [
	'https://cdn.discordapp.com/attachments/820653482536730704/830119694161018920/Zenard_48.gif',
	'https://cdn.discordapp.com/attachments/811878872949587988/830135072652918804/tenor_1.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830120054774562898/zodiaco_anime___v__-_Los_ojos_de_los_signos__gif_.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830120029340434462/IMAGINES_ANIMES_1.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830120006746505327/6dd63622691774f5.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119977532784650/anime-blushing.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119964899409950/anime-laugh.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119943558529044/anime-girl.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119913972301894/e03f72939f5689edb9681aaf043036e5.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119887086944266/anime.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119854232043530/Dreaam_18.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119774636736512/Dreaam_92.gif',
	'https://cdn.discordapp.com/attachments/828193415807369216/830140299498094663/girl_7.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830120029340434462/IMAGINES_ANIMES_1.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119977532784650/anime-blushing.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119913972301894/e03f72939f5689edb9681aaf043036e5.gif',
	'https://cdn.discordapp.com/attachments/820653482536730704/830119716135632926/tenor-1.gif'
];

let girl = [
	'https://cdn.discordapp.com/attachments/829754136396431451/830141213428285500/girl_1.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830143384650907658/girl_3.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141167457796116/girl_59.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141189486673991/girl_61.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141104769728551/girl_52.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141134868971560/girl_55.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141084142796890/girl_48.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141038520958977/girl_45.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141019768750121/girl_42.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830141000054865981/girl_40.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140977246109736/girl_38.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140975103737936/girl_37.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140924172173382/girl_32.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140919869079612/girl_31.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140915284705311/girl_30.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140909643235358/girl_29.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140876591988746/girl_23.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140852021231756/girl_22.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140849748836402/girl_21.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140834480521316/girl_20.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140830500388894/girl_19.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140830576279612/girl_18.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140826696155156/girl_10.gif',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140816717512725/girl_17.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140809412083722/girl_16.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140804403691560/girl_14.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140798669422592/girl_8.gif',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140780701417552/girl_15.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140763350368276/girl_12.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140760523276388/girl_11.jpg',
	'https://cdn.discordapp.com/attachments/829754136396431451/830140715614601226/girl_9.jpg'
];
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(client.user.username + ' ready to go');
});
const prefix = '@';

client.on('message', message => {
	if (message.content.startsWith(prefix + 'gif')) {
		message.channel.send(gif[Math.floor(Math.random() * gif.length)]);
	}
});
client.on('message', message => {
	if (message.content.startsWith(prefix + 'girl')) {
		message.channel.send(girl[Math.floor(Math.random() * girl.length)]);
	}
});
client.on("message", message => {
  if (message.content === prefix + 'help') {
    const embed = new Discord.MessageEmbed()
    .setTitle("Help Menu")
    .addFields({name: "Photos", value: `${prefix}girl\n${prefix}gif`})
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.channel.send(embed)
  }
})

client.login(process.env.naito);
