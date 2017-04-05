var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
	console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
	appId: 'e8b5da0a-a82f-411d-bfb1-6a33c118312b',
	appPassword: 'Pyh99KwKY9DdSfYENMcO6aX'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function() {})

bot.dialog('/subscribeToGitlab', [
	function (session) {
		console.log('session', session)
		session.send("Hello World!!!");
		
		setInterval(function() {
			var reply = new builder.Message()
				.address(session.message.address)
				.text("session.message.address");
			bot.send(reply);
		}, 3000)
	}
]);


