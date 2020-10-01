const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false
});

require('events').EventEmitter.defaultMaxListeners = 20;

var pieCount;

var commonPies = [" pumpkin pie", " coconut cream pie", " banana cream pie", " strawberry rhubarb pie", " chocolate cream pie", " blueberry pie", " ice cream pie",
    " peach pie", " pear pie", " chicken pot pie", " cranberry pie", " pineapple pie", " turtle pie", " chocolate hazelnut pie", " mixed berry pie", " chestnut pie"
];

var uncommonPies = [" apple pie", " cherry pie", " key lime pie", " lemon meringue pie", " blackberry pie", " raspberry pie", " pecan pie",
    " strawberry pie", " french silk pie", " custard pie", " chocolate peanut butter pie", " butterscotch pie", " mississippi mud pie", " caramel apple pie", " pizza pie", " cookies and cream pie",
    " boysenberry pie", " shepherd's pie", " mincemeat pie"
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
    " some loaded potato skins", " some potato pancakes", " some potato gnocchi", " some potato salad", " some potato bread", " some pocket potatoes"];

//-----------------------------------------------------------------------------

var yesOrNoResponses = ["Yep.", "Yes, definitely.", "Without a doubt.", "I believe so.", "Mhm.",
    "I wouldn't count on it.", "I don't think so.", "No way.", "Nah.", "Doubting it."]

var middleResponses = ["Could you repeat that?", "I'm not sure...", "Idk", "Can't answer right now.", "One more time?", "🤔"]

var oddResponses = ["I'll let you know later.", /*"Why are you asking me?",*/ "You know the answer to that already.", "Go bother someone else."]



var adjectives = ["delicious", "tasty", "scrumptious", "heavenly", "delectable", "delightful", "yummy"]

var cow = "689289906966757406";
var nurd = "689289950109106220";
var q = "689289981235167245";
var bacon = "689290003473367041";

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

    if (sentMessage[0].toLowerCase() == "!pie" || sentMessage[0].toLowerCase() == "!pierate" && message.author.id != "222411213961691137") {

        var sendText = "Kim wants you to have a slice of her ";
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
        
        //newPie = " birthday pie";

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
            var greeting = (sentMessage[0].toLowerCase() == "!pierate") ? "Arrrgh, " : "Here, " 
            var kim = (sentMessage[0].toLowerCase() == "!pierate") ? "! Kim wants ye to have a slice of 'er " : "! Kim wants you to have a slice of her " 
            var be = (sentMessage[0].toLowerCase() == "!pierate") ? "! There 'ave been " : "! There have been " 
            var discord = (sentMessage[0].toLowerCase() == "!pierate") ? " desserts given out on the Discord." : " desserts given out on Discord." 
            message.channel.send(greeting + piePerson + kim + pieAdj + newPie + be + pieCount + discord).then(function (botSentMessage) {

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
    //////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    /////////////////////////////////////////////////
    else if (sentMessage[0].toLowerCase() == "tts") {
        
        var newString = "";

        for (i = 1; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }

        //message.channel.send("Sent '" + newString + "' to channel: " + bot.channels.get(sendChannel).name);
        
        message.channel.send(newString, { tts: true });
    }
    // channels
    // cow = "689289906966757406";
    // nurd = "689289950109106220";
    // q = "689289981235167245";
    // bacon = "689290003473367041";
    else if (message.channel.id == cow && message.author.id != "549418373130223630") { //in COWs channel
        
        var newString = "";

        for (i = 0; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }
        
        if(message.attachments.size > 0) {
         
            let urlArray = []
            message.attachments.forEach(file => {
                urlArray.push(file.url)
            })
            
            bot.channels.get(nurd).send(newString, {
                files: urlArray,
                tts: true 
            });
            bot.channels.get(q).send(newString, { 
                files: urlArray,
                tts: true 
            });
            bot.channels.get(bacon).send(newString, { 
                files: urlArray,
                tts: true 
            });
            
        } else {

            bot.channels.get(nurd).send(newString, { tts: true });
            bot.channels.get(q).send(newString, { tts: true });
            bot.channels.get(bacon).send(newString, { tts: true });
            
        }
    }
    else if (message.channel.id == nurd && message.author.id != "549418373130223630") {//in NURDs channel
        var newString = "";

        for (i = 0; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }
        
        if(message.attachments.size > 0) {
         
            let urlArray = []
            message.attachments.forEach(file => {
                urlArray.push(file.url)
            })
            
            bot.channels.get(cow).send(newString, {
                files: urlArray,
                tts: true 
            });
            bot.channels.get(q).send(newString, { 
                files: urlArray,
                tts: true 
            });
            bot.channels.get(bacon).send(newString, { 
                files: urlArray,
                tts: true 
            });
            
        } else {
        
            bot.channels.get(cow).send(newString, { tts: true });
            bot.channels.get(q).send(newString, { tts: true });
            bot.channels.get(bacon).send(newString, { tts: true });
            
        }
    }
    else if (message.channel.id == q && message.author.id != "549418373130223630") {//in Qs channel
        var newString = "";

        for (i = 0; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }
        
        if(message.attachments.size > 0) {
         
            let urlArray = []
            message.attachments.forEach(file => {
                urlArray.push(file.url)
            })
            
            bot.channels.get(cow).send(newString, {
                files: urlArray,
                tts: true 
            });
            bot.channels.get(nurd).send(newString, { 
                files: urlArray,
                tts: true 
            });
            bot.channels.get(bacon).send(newString, { 
                files: urlArray,
                tts: true 
            });
            
        } else {
        
            bot.channels.get(cow).send(newString, { tts: true });
            bot.channels.get(nurd).send(newString, { tts: true });
            bot.channels.get(bacon).send(newString, { tts: true });
            
        }
    }else if (message.channel.id == bacon && message.author.id != "549418373130223630") {//in BACONs channel
        var newString = "";

        for (i = 0; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }
        
        if(message.attachments.size > 0) {
         
            let urlArray = []
            message.attachments.forEach(file => {
                urlArray.push(file.url)
            })
            
            Console.Log(urlArray);
            
            bot.channels.get(cow).send(newString, {
                files: urlArray,
                tts: true 
            });
            bot.channels.get(nurd).send(newString, { 
                files: urlArray,
                tts: true 
            });
            bot.channels.get(q).send(newString, { 
                files: urlArray,
                tts: true 
            });
            
        } else {

            bot.channels.get(cow).send(newString, { tts: true });
            bot.channels.get(nurd).send(newString, { tts: true });
            bot.channels.get(q).send(newString, { tts: true });
            
        }
    }
    else if (message.channel.id == "687896463652683777" && message.author.id != "549418373130223630") { //in d channel.. TESTING
        
        var newString = "";

        for (i = 0; i < message.content.split(" ").length; i++) {
            newString += " " + message.content.split(" ")[i];
        }
        
        if(message.attachments.size > 0) {
         
            let urlArray = []
            message.attachments.forEach(file => {
                urlArray.push(file.url)
            })
            
            bot.channels.get("687896463652683777").send(newString, { 
                files: urlArray,
                tts: true 
            });
            
        } else {

            bot.channels.get("687896463652683777").send(newString, { tts: true });
            
        }
    }
    
    else if (sentMessage[0].toLowerCase() == "!muffin" && message.author.id != "222411213961691137") {

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
        //
        // newMuffin= " special birthday muffin";
        //
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
        message.channel.send("Here, " + piePerson + "! Nurd wants you to have" + potato + ", straight from Idaho! 🥔");
    }
    else if (sentMessage[0].toLowerCase() == "!menu") {
        if (message.channel.id == "459566179615506442" || message.channel.id == "369001523453231105" || message.channel.id == "592904409500090378" || message.channel.id == "562136578265317388" || message.channel.id == "687904591525838850") {

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
    else if (sentMessage[0].toLowerCase() == "!pi") {
        message.channel.send("3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586327886593615338182796823030195203530185296899577362259941389124972177528347913151557485724245415069595082953311686172785588907509838175463746493931925506040092770167113900984882401285836160356370766010471018194295559619894676783744944825537977472684710404753464620804668425906949129331367702898915210475216205696602405803815019351125338243003558764024749647326391419927260426992279678235478163600934172164121992458631503028618297455570674983850549458858692699569092721079750930295532116534498720275596023648066549911988183479775356636980742654252786255181841757467289097777279380008164706001614524919217321721477235014144197356854816136115735255213347574184946843852332390739414333454776241686251898356948556209921922218427255025425688767179049460165346680498862723279178608578438382796797668145410095388378636095068006422512520511739298489608412848862694560424196528502221066118630674427862203919494504712371378696095636437191728746776465757396241389086583264599581339047802759")
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
    else if (sentMessage[0].toLowerCase() == "!coinflip" || sentMessage[0].toLowerCase() == "!coin" || sentMessage[0].toLowerCase() == "!cf") {
        var coin = (Math.floor(Math.random() * 2) == 1) ? "Heads" : "Tails"
        message.channel.send("The coin lands on... " + coin + "!")
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
            "!scale (max) (question)" + "\n" +
            "!coinflip" + "\n" +
            "tts (msg for text-to-speech; for mobile users)"
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
    else if ((sentMessage[0].toLowerCase() == "ok" || sentMessage[0] == "<:traumzOk:651455356622602246>" || sentMessage[0] == "traumzOk") && !sentMessage[1] && !sentMessage[2] && message.author.id != "549418373130223630") {
        
        var random = Math.floor(Math.random() * (17 - 4)) + 4;
        
        message.channel.fetchMessages({ limit: random }).then(messagesss => {
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
    else if (sentMessage[0].toLowerCase() == "give" && sentMessage[1].toLowerCase() == "birth" && message.author.id != "549418373130223630") {
        
        message.react("😐")

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
