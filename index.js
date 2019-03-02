const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false
});
var sendText = "Kim wants you to have a slice of her delicious ";

var pieCount = 0;

var commonPies = ["pumpkin pie", "coconut cream pie", "banana cream pie", "strawberry rhubarb pie", "chocolate cream pie", "blueberry pie", "ice cream pie", 
        "peach pie", "pear pie", "chicken pot pie", "cranberry pie", "pineapple pie", "turtle pie"];

var uncommonPies = ["apple pie", "cherry pie", "key lime pie", "lemon meringue pie", "blackberry pie", "raspberry pie", "pecan pie", 
        "strawberry pie", "french silk pie", "custard pie", "chocolate peanut butter pie", "butterscotch pie", "mississippi mud pie", "caramel apple pie"];

var rarePies = ["cheesecake", "prickly pear pie", "peach pie à la mode", "apple pie à la mode", "blackberry pie à la mode", "cherry pie à la mode",
        "raspberry pie à la mode", "blueberry pie à la mode"];

var legendaryPies = ["creampie", "cow pie"];

bot.on('message', function(message) {
    if(message.content == "!pie") {
        
        var randomNum = Math.floor(Math.random() * 101);

        if (randomNum >= 0 && randomNum <= 69) {
			pieCount++;

			message.channel.sendMessage(  "Here " + message.author  + ", " + sendText + commonPies[Math.floor(Math.random()*commonPies.length)] + "! Kim has given out " + pieCount + " pies on Discord."       );

        }
        else if (randomNum >= 70 && randomNum <= 96) {
			pieCount++;

            message.channel.sendMessage("Here " + message.author  + ", " + sendText + uncommonPies[Math.floor(Math.random()*uncommonPies.length)] + "! Kim has given out " + pieCount + " pies on Discord."       );
		
		}
        else if (randomNum >= 97 && randomNum <= 99) {
			pieCount++;

            message.channel.sendMessage("Here " + message.author  + ", " + sendText + rarePies[Math.floor(Math.random()*rarePies.length)] + "! Kim has given out " + pieCount + " pies on Discord.");
	
		}
        else if (randomNum == 100) {
			pieCount++;

            message.channel.sendMessage("Here " + message.author  + ", " + sendText + legendaryPies[Math.floor(Math.random()*legendaryPies.length)] + "! Kim has given out " + pieCount + " pies on Discord.");
		}
    }
});

bot.on('ready', function() {
    console.log("Ready!");
});

bot.login(process.env.BOT_TOKEN);
