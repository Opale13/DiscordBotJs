"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var EmbedMessage = /** @class */ (function () {
    function EmbedMessage() {
        this.today = new Date();
        this.embedMessage = new discord_js_1.RichEmbed();
        this.embedMessage.setTitle("Almanax of " +
            this.today.getDate() + "/" +
            (this.today.getMonth() + 1) + "/" +
            this.today.getFullYear());
        this.embedMessage.setColor("#00FFFF");
    }
    EmbedMessage.prototype.createEmbedMessage = function (almanax) {
        this.embedMessage.addField("Bonus", almanax.bonus.replace(/<\/?[^>]+(>|$)/g, ""), false);
        this.embedMessage.addField("Offering", almanax.qty + "x " + almanax.itemName, false);
        this.embedMessage.addField("Reward", almanax.reward + "K", false);
        return this.embedMessage;
    };
    return EmbedMessage;
}());
exports.EmbedMessage = EmbedMessage;
