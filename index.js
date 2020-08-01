const TelegramBot = require('node-telegram-bot-api');
const token = '1217247175:AAEBYvoMHkFzP9iYc84z5WDLawcv5jIwnLw';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    
    //bot.sendMessage(msg.chat.id, "Welcome");
    
    bot.sendPhoto(msg.chat.id,"https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNDU4MjcxNi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTU5NDU0ODIyM30.XBu74Fjptoa3pF4sBNASPGhnSM6YBnqqFQ16IcFdG8M/img.jpg?width=980",{caption : "Welcome! "} );
    bot.sendMessage(msg.chat.id, "Please choose an option", {
        "reply_markup": {
            "inline_keyboard": [
                [{text: "On my way", callback_data:"OMW"}, {text: "I'll be late", callback_data:"LATE"}],
                [{text: "Work from home", callback_data:"WFH"}, {text: "Can't make it", callback_data:"CMI"}]
            ]
            
            },
            
        });
    
        
    });

bot.on("callback_query", (callbackQuery) => {
    const msg = callbackQuery.message;
    bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "You have chosen!"));
});

        
    

bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
  
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    //bot.sendMessage(chatId, 'Received your message');
  });

bot.on('message', (msg) => {

    var Hey = "hey";
if (msg.text.toString().toLowerCase().indexOf(Hey) === 0) {
    bot.sendMessage(msg.chat.id, "Hello  " + msg.from.first_name);
}
        
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name); 
}

    var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot, " + msg.from.first_name + " !");
}
    
    });