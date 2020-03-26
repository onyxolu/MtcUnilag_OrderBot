const botbuilder = require("botbuilder");
const restify = require("restify");

const server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log("%s listening.....", server.name);
});

const connector = new botbuilder.ChatConnector({
  appId: "",
  appPassword: ""
});

const bot = new botbuilder.UniversalBot(connector);
server.post("/api/messages", connector.listen());


bot.dialog("/", [
  function(session) {
    botBuilder.Prompts.text(
      session,
      "Hello! welcome to our MTC Unilag Order Bot"
    );
  }
]);
