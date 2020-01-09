import { Client, Message } from "discord.js";
import * as path from "path";
import * as YAML from "yamljs";

export class DiscordTS {
    private client: Client;
    private config: any;

    constructor() {
        this.client = new Client();
        this.config = YAML.load(path.resolve(__dirname, "settings.yml"));
    }

    public start(): void {
        this.client.on("ready", () => {
            console.log("I'm ready!");
            this.client.user.setActivity(this.config.settings.activity);
        });

        this.client.on("message", (message: Message) => {
            if (message.content === this.config.settings.prefix + "ping") message.channel.send("Pong!");
        });

        this.client.login(this.config.settings.token);
    }
}