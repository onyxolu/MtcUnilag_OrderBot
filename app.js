const botbuilder =  require('botbuilder');
const restify = require('restify');

const server = restify.createServer();

server.listen(process.env.PORT || 8080, ()=>console.log("listening...",server.name, server.url));

const connector =new botbuilder.ChatConnector({
    appId : '',
    appPassword : ''
});


//create the chat bot
const inMemoryStorage = new botbuilder.MemoryBotStorage();

const bot = new botbuilder.UniversalBot(connector,session=>{
    session.beginDialog("/welcome");
}).set("storage",inMemoryStorage);

server.post("/api/messages",connector.listen());

//bot dialogs
bot.dialog("/welcome",[
    session => {
        botbuilder.Prompts.text(
            session,
            "Hello! this is Emmanuel's order bot"
        );
    }
]);