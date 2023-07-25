import Client from "msgroom";

const client = new Client("[!] TempoBot", [ "!" ]);
console.log("Adding commands To the Bot...")
client.commands.ping = () => "pong";
client.commands.version = () => "TempoBot 1.0.0"
client.commands.owners = () => "The Owner of TempoBot: Kris47\nThe Co-Owner: Nightlight326"
client.commands.discordusernames = () => "Kris47 Discord username: @kris46\n Nightlight326's Discord Username: @nightlight327#0566"
client.commands.unhost = () => client.disconenct();
client.commands.test = () => "This is a test command, No Test Avalible for now"
client.commands.changelog = () => "Changelog:\nNothing"
console.log("Done!)")

await client.connect();
console.log("Connected to MsgRoom.")
client.sendMessage("Hello, i'm TempoBot, i'm a bot made by Kris47 and Nightlight326!");
client.sendMessage("Changelog:\nNothing.")
