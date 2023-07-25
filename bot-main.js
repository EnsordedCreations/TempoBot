const Client = (await import("https://cdn.jsdelivr.net/npm/msgroom@1/+esm")).default
const client  = new Client("[!] TempoBot, "!", "wss://msgroom.windows96.net");
client.connect();
console.log("Partially Connected to MsgRoom servers.");
client.sendMessage("Hi! My prefix is ! and use !help")
client.sendMessage("Changelog:\n Nothing.");
client.commands.ping = () => "pong";
client.commands.repeatafterme = (reply, ...args) => {
     return args.join(" ");
};
client.commands.about = () => client.sendMessage("Hi! I'm made by Nightlight326");
client.commands.devtools = () => client.sendMessage("I'm Running from DevTools");
client.commands.goodbot = () => client.sendMessage"(I'm a good bot");
client.commands.createdate = () => clien.sendMessage("Bot was created in 2023 (22 June)");
client.commands.msgroompackage = () => client.sendMessage("i use [msgroom](https://www.npmjs.com/package/msgroom)");
client.commands.unhost = () => client.disconnect();
client.commands.version = () => "TempoBot 1.0.0";








console.log("Fully Connected to MsgRoom servers.");