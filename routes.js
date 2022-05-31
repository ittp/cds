

let bot = {
  controllers: {},
  
 services: 
{
  connect: {
  
  cid: "number",
  token: "string",
  
  },
  command: {},
  message: {},
  reply: {},
  webhook: {},
  updates:{}
}

}

let connect = (request) => { method: "post", handler: bot.services.connect, params: [ "cid", "token" ] }
let command = (ctx) => { method: "post", handler: bot.services.command, params: [ "command" ] }
let message = (ctx) => { method: "post", handler: bot.services.message, params: ["chat_id", "data"] }
let reply = (ctx) => { method: "post", handler: bot.services.reply, params: ["chat_id", "text", "buttons"] }


const routes = {
  connect,
  command,
  message,
  reply
}
