var botbuilder = require("botbuilder");
var restify = require("restify");

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log("%s listening.....", server.name);
});

var connector = new botbuilder.ChatConnector({
  appId: "",
  appPassword: ""
});

var bot = new botbuilder.UniversalBot(connector);
server.post("/api/messages", connector.listen());

bot.dialog("/", [
  function(session) {
    botbuilder.Prompts.text(
      session,
      "Hello! welcome to our MTC Unilag Order Bot"
    );
  }
]);
