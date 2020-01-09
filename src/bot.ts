import { Client, Message } from "discord.js";
import Axios, { AxiosResponse } from "axios";
import * as path from "path";
import * as YAML from "yamljs";
import { EmbedMessage } from "./models/EmbedMessage";

export class DiscordTS {
    private client: Client;
    private config: any;
    private embedMessage: EmbedMessage;

    constructor() {
        this.client = new Client();
        this.config = YAML.load(path.resolve(__dirname, "settings.yml"));  
        this.embedMessage = new EmbedMessage();     
    }

    public start(): void {

        this.client.on("message", (message: Message) => {
            if (message.content === this.config.settings.prefix + "almanax") {
                this.getAlmanaxOfToday()
                    .then((reponse: AxiosResponse) => {
                        message.channel.send(this.embedMessage.createEmbedMessage(reponse.data[0]))
                
                    }, (error: any) => {
                        console.log(error);
                    });
               
            }
        });

        this.client.login(this.config.settings.token);
    }

    private getAlmanaxOfToday(): any {
        return Axios({
            method: 'get',
            url: this.config.almanax.url
        });
    }
}