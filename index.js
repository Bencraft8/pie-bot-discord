const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false
});
 
require('events').EventEmitter.defaultMaxListeners = 20;
 
var sendText = "Kim wants you to have a slice of her delicious ";
 
var pieCount = 1400;
 
var commonPies = ["pumpkin pie", "coconut cream pie", "banana cream pie", "strawberry rhubarb pie", "chocolate cream pie", "blueberry pie", "ice cream pie",
    "peach pie", "pear pie", "chicken pot pie", "cranberry pie", "pineapple pie", "turtle pie"
];
 
var uncommonPies = ["apple pie", "cherry pie", "key lime pie", "lemon meringue pie", "blackberry pie", "raspberry pie", "pecan pie",
    "strawberry pie", "french silk pie", "custard pie", "chocolate peanut butter pie", "butterscotch pie", "mississippi mud pie", "caramel apple pie"
];
 
var rarePies = ["cheesecake", "prickly pear pie", "peach pie à la mode", "apple pie à la mode", "blackberry pie à la mode", "cherry pie à la mode",
    "raspberry pie à la mode", "blueberry pie à la mode"
];
 
var legendaryPies = ["creampie", "cow pie", "cutie pie"];
 
bot.on('message', function(message) {
 
    var sentMessage = message.content.split(" ", 2);
 
    var piePerson = sentMessage[1] ? sentMessage[1] : message.author
 
    if (sentMessage[0].toLowerCase() == "!pie") {
 
        var randomNum = Math.floor(Math.random() * 101);
 
        switch (true) {
          case (randomNum < 70):
            newPie = commonPies[Math.floor(Math.random() * commonPies.length)];
            break;
          case (randomNum < 97):
            newPie = commonPies[Math.floor(Math.random() * uncommonPies.length)];
            break;
          case (randomNum < 100):
            newPie = commonPies[Math.floor(Math.random() * rarePies.length)];
            break;
          case (randomNum = 100):
            newPie = commonPies[Math.floor(Math.random() * legendaryPies.length)];
            break;
          default:
            newPie = commonPies[Math.floor(Math.random() * commonPies.length)];
        }
 
        pieCount++

        message.channel.sendMessage("Here, " + piePerson + "! " + sendText + newPie + "! Kim has given out " + pieCount + " pies on Discord.").then(function (botSentMessage){
                            if(newPie == "prickly pear pie") {
                                botSentMessage.react("🌵");
                            }
                            else if (pieCount.toString().includes("69")) {
                                botSentMessage.react("😏");
                            }
                            else if ((newPie == "pecan pie" && message.author.id.toString() == "307350352594862080") || (newPie == "pecan pie" && (piePerson.toLowerCase() == "kecatas" ||
                            piePerson.toLowerCase() == "kec" || piePerson.toLowerCase() == "cactus" || piePerson.toLowerCase() == "kacatas"))) {
                                botSentMessage.react("😂");
                  }
              });
        }
    });
 
bot.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    message.channel.sendMessage(err);
    bot.exit(1); //mandatory (as per the Node docs)
    });
 
bot.on('ready', function() {
    console.log("Ready!");
});
 
bot.login(process.env.BOT_TOKEN);
