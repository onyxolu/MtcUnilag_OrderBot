var botbuilder = require("botbuilder");
var restify = require("restify");

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, () => {
console.log("%s listening.....", server.name);
});


//Creating Chat bot
var connector = new botbuilder.ChatConnector({
    appId: '',
    appPassword: ''
});


var inMemoryStorage = new botbuilder.MemoryBotStorage();
var bot = new botbuilder.UniversalBot(connector, session => {
session.beginDialog("/welcome");
}).set("storage", inMemoryStorage);
server.post("/api/messages", connector.listen());

bot.dialog("/welcome", [
    session => {
      botbuilder.Prompts.text(
        session,
        "Hello! welcome to our MTC Unilag Order Bot"
      );
    }
]);