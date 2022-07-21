//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is Devi Bot🔥
My Creator is Samith dilshan😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+94742265843'] //Owner number in aive msg
global.premium = ['+94742265843'] //Owner Number info
global.ownernomer = '+94742265843' //Owner Number <<<

global.ownername = 'Samith Dilshan' //Owner Name
global.botname = ' Devil Bot' //Bot Name

global.button = '☰ Youtube ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://youtube.com/channel/UCDc_vYQFGHznliwSypY_5CA' //Change Your Button's URL

global.region = 'Sri Lanka' //Country Region

global.packname = 'Devil Bot' //Bot Pacage Name
global.author = 'Samith Dilshan' //Author Name
global.prefa = ['','!','.','🤣','🥰','🎀'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🎀 ' // Menu emoji
global.footer = '©_samith.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://youtube.com/channel/UCDc_vYQFGHznliwSypY_5CA' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'හරි ✅',
    admin: 'පරිපාලකවරු සදහා පමණි!😉',
    botAdmin: 'මම පරිපාලක නොවේ😥',
    owner: 'හිමිකරුට පමනි😉',
    group: 'මෙම විශේෂාංගය ගෲප් සදහා පමණි',
    private: 'මෙම විශේෂාංගය පෞද්ගලික චැට් සදහා පමණි',
    bot: 'මෙම විශේෂාංගය බොට් සදහා පමණි😝',
    wait: '👉👈රැදී සිටින්න...',
    error: 'දෝශයක්!! සමහර විට api එක කල් පැනල ඇති🤔!',
    endLimit: 'ඔබ දෛනික ප්‍රමාණය ඉක්මවා ගොස් ඇත.නැවත පැය 12කින් උතසහ කරන්න',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
