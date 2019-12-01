const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false
});

require('events').EventEmitter.defaultMaxListeners = 20;

var pieCount;

var sendText = "Kim wants you to have a slice of her ";

var commonPies = [" pumpkin pie", " coconut cream pie", " banana cream pie", " strawberry rhubarb pie", " chocolate cream pie", " blueberry pie", " ice cream pie",
    " peach pie", " pear pie", " chicken pot pie", " cranberry pie", " pineapple pie", " turtle pie", " chocolate hazelnut pie", " mixed berry pie", " chestnut pie"
];

var uncommonPies = [" apple pie", " cherry pie", " key lime pie", " lemon meringue pie", " blackberry pie", " raspberry pie", " pecan pie",
    " strawberry pie", " french silk pie", " custard pie", " chocolate peanut butter pie", " butterscotch pie", " mississippi mud pie", " caramel apple pie", " pizza pie", " cookies and cream pie",
    " boysenberry pie"
];

var rarePies = [" cheesecake", " prickly pear pie", " peach pie à la mode", " apple pie à la mode", " blackberry pie à la mode", " cherry pie à la mode",
    " raspberry pie à la mode", " blueberry pie à la mode", " boysenberry pie à la mode", " mixed berry pie à la mode"
];

var legendaryPies = [" creampie", " cow pie", " cutie pie"];

//-----------------------------------------------------------------------------

var commonMuffins = [" banana nut muffin", " blueberry muffin", " lemon poppy seed muffin", " coconut muffin", " oatmeal muffin", " raspberry muffin"
];

var uncommonMuffins = [" chocolate chip muffin", " cornbread muffin", " pumpkin muffin", " coffee cake muffin", " zucchini muffin", " maple walnut muffin", " pecan muffin"
];

var rareMuffins = [" chocolate chunk muffin", " apple cinnamon muffin", " snickerdoodle muffin"
];

var legendaryMuffins = [" Kecatas' 'special' muffin"];

//-----------------------------------------------------------------------------

var potatoes = [" some mashed potatoes", " some french fries", " a baked potato", " some hash browns", " some tater tots", " some potato chips",
    " some loaded potato skins", " some potato pancakes", " some potato gnocci", " some potato salad", " some potato bread", " some pocket potatoes"];

//-----------------------------------------------------------------------------

var yesOrNoResponses = ["Yep.", "Yes, definitely.", "Without a doubt.", "I believe so.", "Mhm.",
    "I wouldn't count on it.", "I don't think so.", "No way.", "Nah.", "Doubting it."]

var middleResponses = ["Could you repeat that?", "I'm not sure...", "Idk", "Can't answer right now.", "One more time?", "🤔"]

var oddResponses = ["I'll let you know later.", /*"Why are you asking me?",*/ "You know the answer to that already.", "Go bother someone else."]



var adjectives = ["delicious", "tasty", "scrumptious", "heavenly", "delectable", "delightful", "yummy"]

bot.on('ready', function () {
    console.log("Ready!");
    bot.channels.get("650446608256729130").fetchMessages({ limit: 1 }).then(messages => {
        var lastPieCount = messages.first();
        pieCount = lastPieCount.content;
    });
});

var commonRarity = 55
var uncommonRarity = 95

bot.on('message', function (message) {

    var sentMessage = message.content.split(" ");

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

        if (randomNum2 > 95) {

            message.channel.send("Sorry, " + piePerson + ", but I couldn't resist. I ate your " + pieAdj + newPie + ". There have been " + pieCount + " desserts given out on Discord.").then(function (botSentMessage) {

                switch (true) {
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

            message.channel.send("Here, " + piePerson + "! " + sendText + pieAdj + newPie + "! There have been " + pieCount + " desserts given out on Discord.").then(function (botSentMessage) {

                switch (true) {
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

        bot.channels.get("650446608256729130").send(pieCount);

    }
    else if (sentMessage[0].toLowerCase() == "!muffin") {

        var randomNum = Math.floor(Math.random() * 101);
        var randomNumAdj = Math.floor(Math.random() * 7) + 1;

        switch (true) {
            case (randomNum < commonRarity):
                newMuffin = commonMuffins[Math.floor(Math.random() * commonMuffins.length)];
                break;
            case (randomNum < uncommonRarity):
                newMuffin = uncommonMuffins[Math.floor(Math.random() * uncommonMuffins.length)];
                break;
            case (randomNum < 100):
                newMuffin = rareMuffins[Math.floor(Math.random() * rareMuffins.length)];
                break;
            case (randomNum == 100):
                newMuffin = legendaryMuffins[Math.floor(Math.random() * legendaryMuffins.length)];
                break;
            default:
                newMuffin = commonMuffins[Math.floor(Math.random() * commonMuffins.length)];
        }

        pieCount++

        pieAdj = adjectives[Math.floor(Math.random() * adjectives.length)];

        var randomNum2 = Math.floor(Math.random() * 101);

        if (randomNum2 > 95) {

            message.channel.send("Sorry, " + piePerson + ", but I couldn't resist. I ate your " + pieAdj + newMuffin + ". There have been " + pieCount + " desserts given out on Discord.").then(function (botSentMessage) {

                switch (true) {
                    case (pieCount.toString().includes("69")):
                        botSentMessage.react("😏");
                        break;
                }

            });

        }

        else {

            message.channel.send("Here, " + piePerson + "! " + "Kecatas wants you to have a " + pieAdj + newMuffin + "! There have been " + pieCount + " desserts given out on Discord.").then(function (botSentMessage) {

                switch (true) {
                    case (pieCount.toString().includes("69")):
                        botSentMessage.react("😏");
                        break;
                }

            });

        }

        bot.channels.get("650446608256729130").send(pieCount);

    }
    else if (sentMessage[0].toLowerCase() == "!potato") {
        var piePerson = sentMessage[1] ? sentMessage[1] : message.author;
        potato = potatoes[Math.floor(Math.random() * potatoes.length)];
        message.channel.send("Here, " + piePerson + "! Nurd wants you to have " + potato + ", straight from Idaho! 🥔");
    }
    else if (sentMessage[0].toLowerCase() == "!menu") {
        if (message.channel.id == "459566179615506442" || message.channel.id == "369001523453231105" || message.channel.id == "592904409500090378" || message.channel.id == "562136578265317388") {

            message.channel.send(
                "**Pies**" + "\n" + "\n" +
                "**Common Pies (" + commonRarity + "%):**" + "\n" +
                " - " + commonPies + "\n" +

                "**Uncommon Pies (" + (uncommonRarity - commonRarity) + "%):**" + "\n" +
                " - " + uncommonPies + "\n" +

                "**Rare Pies (" + (99 - uncommonRarity) + "%):**" + "\n" +
                " - " + rarePies + "\n" +

                "**Legendary Pies (1%):**" + "\n" +
                " - " + legendaryPies + "\n" +

                "**Total Pie Count:**" + "\n" +
                " - " + (commonPies.length + uncommonPies.length + rarePies.length + legendaryPies.length) + " pies" + "\n" + "\n" +

                //------------------------------------------

                "**Muffins**" + "\n" + "\n" +
                "**Common Muffins (" + commonRarity + "%):**" + "\n" +
                " - " + commonMuffins + "\n" +

                "**Uncommon Muffins (" + (uncommonRarity - commonRarity) + "%):**" + "\n" +
                " - " + uncommonMuffins + "\n" +

                "**Rare Muffins (" + (99 - uncommonRarity) + "%):**" + "\n" +
                " - " + rareMuffins + "\n" +

                "**Legendary Muffins (1%):**" + "\n" +
                " - " + legendaryMuffins + "\n" +

                "**Total Muffin Count:**" + "\n" +
                " - " + (commonMuffins.length + uncommonMuffins.length + rareMuffins.length + legendaryMuffins.length) + " muffins" + "\n" + "\n" +

                //--------------

                "**Potatoes**" + "\n" + "\n" +
                " - " + potatoes + "\n" + "\n" +
                "**Total Potato Count:**" + "\n" +
                " - " + potatoes.length
            );


        } else {
            message.channel.send("Sorry, I can only show the menu in #pies_of_exile or #cactus_muffin_gaming to prevent spam.")
        }
    }
    else if (sentMessage[0].toLowerCase() == "!piebot" && message.author.id != "549418373130223630") {

        var newString = message.content.split(" ")[1];

        for (i = 2; i < message.content.split(" ").length; i++) {
            newString += "+" + message.content.split(" ")[i];
        }

        message.channel.send("Here you go " + message.author + ": " + "http://lmgtfy.com/?q=" + newString);
    }
    else if (sentMessage[0].toLowerCase() == "!ask") {
        if (sentMessage[1]) {
            var randomNum = Math.floor(Math.random() * 101);

            switch (true) {
                case (randomNum < 70):
                    response = yesOrNoResponses[Math.floor(Math.random() * yesOrNoResponses.length)];
                    break;
                case (randomNum < 90):
                    response = middleResponses[Math.floor(Math.random() * middleResponses.length)];
                    break;
                case (randomNum <= 100):
                    response = oddResponses[Math.floor(Math.random() * oddResponses.length)];
                    break;
                default:
                    response = yesOrNoResponses[Math.floor(Math.random() * yesOrNoResponses.length)];
            }

            message.channel.send(response);
        } else {
            message.channel.send("What?");
        }
    }
    else if (sentMessage[0].toLowerCase() == "!help" || sentMessage[0].toLowerCase() == "!commands") {

        message.channel.send(
            "**Commands**" + "\n" + "\n" +

            "!help / !commands" + "\n" +
            "!pie" + "\n" +
            "!muffin" + "\n" +
            "!potato" + "\n" +
            "!menu" + "\n" +
            "!ask" + "\n" +
            "!scale (max) (question)"
        );
    }
    else if (sentMessage[0].toLowerCase() == "!senddm" && message.author.id == "189510396569190401" && sentMessage[1]) {

        var newString = "";

        for (i = 2; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }

        message.channel.send("Sent '" + newString + "' to user: " + bot.users.get(sentMessage[1]).tag);
        bot.users.get(sentMessage[1]).send(newString);

    }
    else if (sentMessage[0].toLowerCase() == "!sendmsg" && message.author.id == "189510396569190401" && sentMessage[1]) {

        var sendChannel = sentMessage[1];

        var newString = "";

        for (i = 2; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }

        message.channel.send("Sent '" + newString + "' to channel: " + bot.channels.get(sendChannel).name);
        bot.channels.get(sendChannel).send(newString);

    }
    else if (sentMessage[0].toLowerCase() == "!reactmsg" && message.author.id == "189510396569190401" && sentMessage[1]) {

        bot.channels.get(sentMessage[1]).fetchMessage(sentMessage[2]).then(function (msg) {
            msg.react(sentMessage[3]);
            message.channel.send("Reacted " + sentMessage[3] + " to the following message: \n" +
                msg.author.tag + ": " + msg.content);
        });

    }
    else if (sentMessage[0].toLowerCase() == "!admintools" && message.author.id == "189510396569190401") {

        message.channel.send(
            "**Admin Commands**" + "\n" + "\n" +

            "!senddm (userID) (message to send)" + "\n" +
            "!sendmsg (channelID) (message to send)" + "\n" +
            "!reactmsg (channelID) (messageID) (emoji)" + "\n" +
            "!admintools"
        );

    }
    else if (sentMessage[0].toLowerCase() == "ok" && !sentMessage[1] && !sentMessage[2] && message.author.id != "549418373130223630") {
        message.channel.fetchMessages({ limit: 5 }).then(messagesss => {
            var authorIDs = ["test"];

            for (i = 0; i < messagesss.array().length; i++) {
                authorIDs.push(messagesss.array()[i].author.id);
            }

            var botID = authorIDs.find(function (element) {
                return element == "549418373130223630"
            });

            if (!botID) {
                message.channel.send("ok");
            }

        });

    }
    else if (sentMessage[0].toLowerCase() == "!scale" && sentMessage[1] && sentMessage[2]) {
        message.channel.fetchMessages({ limit: 5 }).then(messagesss => {
            if (Number.isInteger(parseInt(sentMessage[1], 10))) {
                if (sentMessage[2]) {
                    var scale = sentMessage[1];

                    var num = Math.floor(Math.random() * scale);

                    message.channel.send("On a scale of 1 to " + scale + "... I'd say " + num + ".");
                } else {
                    message.channel.send("What am I scaling?");
                }
            }
            else if (!Number.isInteger(sentMessage[1])) {
                message.channel.send("Please follow !scale with a whole number.")
            }

        });

    }

});

bot.login(process.env.BOT_TOKEN);
