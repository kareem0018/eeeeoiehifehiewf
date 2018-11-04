const Discord = require('discord.js');
const bot1 = new Discord.Client();


bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

 bot1.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});


 bot1.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@474573718967025665>')
}
});

var prefix = "+";

bot1.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`${prefix}say <words>`);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});



bot1.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('kareem is my dad')
          .then(m => {
            count++;
          })

        }
      }
});
bot1.login("NTA4MzQ4OTk0ODcxODg1ODM1.DsBuLw.Ue_GvPSuIySeSr98vMSHDLii6ts")



///////////////////////////////////////////////////////////////////////////////////




const bot2 = new Discord.Client();
 bot2.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});


 bot2.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@474573718967025665>')
}
});


bot2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`${prefix}say <words>`);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});



bot2.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('kef 7alk ya spam??')
          .then(m => {
            count++;
          })

        }
      }
});

bot2.login("NTA4MzQ5OTEzMzE1MTQ3Nzc2.DsBuTA.qfobUoJlJDBwWQi8Kv9xl8YvjyI")

/////////////////////////////////////////////////////////////////////////////////////////


const bot3 = new Discord.Client();
 bot3.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot3.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@474573718967025665>')
}
});

bot3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`${prefix}say <words>`);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});



bot3.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('i love credits')
          .then(m => {
            count++;
          })

        }
      }
});


bot3.login("NTA4MzQ4MzI2MDAxOTAxNTc4.DsBt_A.CkQK6mMLOpVcCwaNCo_X74HWsP4")

////////////////////////////////////////////////////////////////////////////////
