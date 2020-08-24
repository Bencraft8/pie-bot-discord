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
    " some loaded potato skins", " some potato pancakes", " some potato gnocci", " some potato salad", " some potato bread", " some pocket potatoes"];

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
    else if (sentMessage[0].toLowerCase() == "!pi") {
        message.channel.send("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
  82148086513282306647093844609550582231725359408128
  48111745028410270193852110555964462294895493038196
  44288109756659334461284756482337867831652712019091
  45648566923460348610454326648213393607260249141273
  72458700660631558817488152092096282925409171536436
  78925903600113305305488204665213841469519415116094
  33057270365759591953092186117381932611793105118548
  07446237996274956735188575272489122793818301194912
  98336733624406566430860213949463952247371907021798
  60943702770539217176293176752384674818467669405132
  00056812714526356082778577134275778960917363717872
  14684409012249534301465495853710507922796892589235
  42019956112129021960864034418159813629774771309960
  51870721134999999837297804995105973173281609631859
  50244594553469083026425223082533446850352619311881
  71010003137838752886587533208381420617177669147303
  59825349042875546873115956286388235378759375195778
  18577805321712268066130019278766111959092164201989
  38095257201065485863278865936153381827968230301952
  03530185296899577362259941389124972177528347913151
  55748572424541506959508295331168617278558890750983
  81754637464939319255060400927701671139009848824012
  85836160356370766010471018194295559619894676783744
  94482553797747268471040475346462080466842590694912
  93313677028989152104752162056966024058038150193511
  25338243003558764024749647326391419927260426992279
  67823547816360093417216412199245863150302861829745
  55706749838505494588586926995690927210797509302955
  32116534498720275596023648066549911988183479775356
  63698074265425278625518184175746728909777727938000
  81647060016145249192173217214772350141441973568548
  16136115735255213347574184946843852332390739414333
  45477624168625189835694855620992192221842725502542
  56887671790494601653466804988627232791786085784383
  82796797668145410095388378636095068006422512520511
  73929848960841284886269456042419652850222106611863
  06744278622039194945047123713786960956364371917287
  46776465757396241389086583264599581339047802759010")
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
            "!scale (max) (question)" + "\n" +
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
