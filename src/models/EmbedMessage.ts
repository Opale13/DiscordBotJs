import { RichEmbed } from "discord.js"
import { Almanax } from "./Almanax";

export class EmbedMessage {
    private today: Date;
    private embedMessage: RichEmbed;

    constructor() {}

    public createEmbedMessage(almanax: Almanax): RichEmbed {
        if (this.today == undefined || this.today.getDate() != new Date().getDate()) {
            this.today = new Date();

            this.embedMessage = new RichEmbed();
            
            this.defineTitle();
            this.embedMessage.setColor("#00FFFF");
            this.embedMessage.addField("Bonus", almanax.bonus.replace(/<\/?[^>]+(>|$)/g, ""), false);
            this.embedMessage.addField("Offering", almanax.qty + "x " + almanax.itemName, false);
            this.embedMessage.addField("Reward", almanax.reward + "K", false);        
        }   

        return this.embedMessage;
    }

    private defineTitle(): void {
        this.embedMessage.setTitle("Almanax of " + 
            this.today.getDate() + "/" +
            (this.today.getMonth()+1) + "/" +
            this.today.getFullYear());
    }
}