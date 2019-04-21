const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false
});
 
require('events').EventEmitter.defaultMaxListeners = 20;
 
var pieCount;

var sendText = "Kim wants you to have a slice of her ";
 
var commonPies = [" pumpkin pie", " coconut cream pie", " banana cream pie", " strawberry rhubarb pie", " chocolate cream pie", " blueberry pie", " ice cream pie",
    " peach pie", " pear pie", " chicken pot pie", " cranberry pie", " pineapple pie", " turtle pie", " chocolate hazelnut pie", " mixed berry pie", " chestnut pie",
                  " easter egg pie", " easter egg pie", " easter egg pie", " easter egg pie"
];
 
var uncommonPies = [" apple pie", " cherry pie", " key lime pie", " lemon meringue pie", " blackberry pie", " raspberry pie", " pecan pie",
    " strawberry pie", " french silk pie", " custard pie", " chocolate peanut butter pie", " butterscotch pie", " mississippi mud pie", " caramel apple pie", " pizza pie", " cookies and cream pie",
    " boysenberry pie"
];
 
var rarePies = [" cheesecake", " prickly pear pie", " peach pie à la mode", " apple pie à la mode", " blackberry pie à la mode", " cherry pie à la mode",
    " raspberry pie à la mode", " blueberry pie à la mode", " boysenberry pie à la mode", " mixed berry pie à la mode"
];

var legendaryPies = [" creampie", " cow pie", " cutie pie"];

var adjectives = ["delicious", "tasty", "scrumptious", "heavenly", "delectable", "delightful", "yummy"]
 
bot.on('ready', function() {
    console.log("Ready!");
    bot.channels.get("560345281577877514").fetchMessages({ limit: 1 }).then(messages => {
        var lastPieCount = messages.first();
        pieCount = lastPieCount.content;
    });
});

var commonRarity = 55
var uncommonRarity = 95

bot.on('message', function(message) {
 
    var sentMessage = message.content.split(" ", 2);
 
    var piePerson = sentMessage[1] ? sentMessage[1] : message.author;
 
    if (sentMessage[0].toLowerCase() == "!pie") {
 
        var randomNum = Math.floor(Math.random() * 101);
        var randomNumAdj = Math.floor(Math.random() * 7) + 1;
 
        switch (true) { 
          case (randomNum < commonRarity):
            newPie = commonPies[Math.floor(Math.random() * commonPies.length)];
            break;
          case (randomNum < uncommonRarity):
            newPie = uncommonPies[Math.floor(Math.random() * uncommonPies.length)];
            break;
          case (randomNum < 100):
            newPie = rarePies[Math.floor(Math.random() * rarePies.length)];
            break;
          case (randomNum == 100):
            newPie = legendaryPies[Math.floor(Math.random() * legendaryPies.length)];
            break;
          default:
            newPie = commonPies[Math.floor(Math.random() * commonPies.length)];
        }
 
            pieCount++

            pieAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
 
            var randomNum2 = Math.floor(Math.random() * 101);

            if(randomNum2 > 95) {

                message.channel.send("Sorry, " + piePerson + ", but I couldn't resist. I ate your " + pieAdj + newPie + ". Kim has given out " + pieCount + " pies on Discord.").then(function (botSentMessage){
                    
                    switch(true) {
                        case (pieCount.toString().includes("69")):
                            botSentMessage.react("😏");
                            break;
                        case (newPie == " prickly pear pie"):
                            botSentMessage.react("🌵");
                            break;
                        case (newPie == " pecan pie" && message.author.id.toString() == "307350352594862080"):
                            botSentMessage.react("😂");
                            break;
                        case (newPie == " pecan pie" && (piePerson.toLowerCase() == "kecatas" || piePerson.toLowerCase() == "kec" || piePerson.toLowerCase() == "cactus")):
                            botSentMessage.react("😂");
                    }
                    
                });

            }

            else {

                message.channel.send("Here, " + piePerson + "! " + sendText + pieAdj + newPie + "! Kim has given out " + pieCount + " pies on Discord.").then(function (botSentMessage){

                    switch(true) {
                        case (pieCount.toString().includes("69")):
                            botSentMessage.react("😏");
                            break;
                        case (newPie == " prickly pear pie"):
                            botSentMessage.react("🌵");
                            break;
                        case (newPie == " pecan pie" && message.author.id.toString() == "307350352594862080"):
                            botSentMessage.react("😂");
                            break;
                        case (newPie == " pecan pie" && (piePerson.toLowerCase() == "kecatas" || piePerson.toLowerCase() == "kec" || piePerson.toLowerCase() == "cactus")):
                            botSentMessage.react("😂");
                    }

                });

            }

        bot.channels.get("560345281577877514").send(pieCount);

    } 
    else if (sentMessage[0].toLowerCase() == "!menu") {
        if(message.channel.id == "459566179615506442" || message.channel.id == "369001523453231105") {
            
            message.channel.send(
                "**Common Pies (" + commonRarity + "%):**" + "\n" +
                " - " + commonPies + "\n" +
    
                "**Uncommon Pies (" + (uncommonRarity - commonRarity) + "%):**" + "\n" +
                " - " + uncommonPies + "\n" +
    
                "**Rare Pies (" + (99 - uncommonRarity) + "%):**" + "\n" +
                " - " + rarePies + "\n" +
    
                "**Legendary Pies (1%):**" + "\n" +
                " - " + legendaryPies + "\n" +
    
                "**Total:**" + "\n" +
                " - " + (commonPies.length + uncommonPies.length + rarePies.length + legendaryPies.length) + " pies"
            );


        } else {
            message.channel.send("Sorry, I can only show the menu in #pies_of_exile to prevent spam.")
        }
    }
    else if (sentMessage[0].toLowerCase() == "!cake") {
        message.channel.send("No.");
    }
    else if (sentMessage[0].toLowerCase() == "!piebot" && message.author.id != "549418373130223630") {

        var newString = message.content.split(" ")[1];

        for(i = 2; i < message.content.split(" ").length; i++ ) {
            newString += "+" + message.content.split(" ")[i];
        }

        message.channel.send("Here you go " + message.author + ": " + "http://lmgtfy.com/?q=" + newString);
    }
});

bot.login(process.env.BOT_TOKEN);
