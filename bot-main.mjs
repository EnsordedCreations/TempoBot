import Client from "msgroom";

const client = new Client("[!] TempoBot", [ "!" ]);
client.commands.ping = () => "pong";
await client.connect();
