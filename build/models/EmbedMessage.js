"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var EmbedMessage = /** @class */ (function () {
    function EmbedMessage() {
    }
    EmbedMessage.prototype.createEmbedMessage = function (almanax) {
        if (this.today == undefined || this.today.getDate() != new Date().getDate()) {
            this.today = new Date();
            this.embedMessage = new discord_js_1.RichEmbed();
            this.defineTitle();
            this.embedMessage.setColor("#00FFFF");
            this.embedMessage.addField("Bonus", almanax.bonus.replace(/<\/?[^>]+(>|$)/g, ""), false);
            this.embedMessage.addField("Offering", almanax.qty + "x " + almanax.itemName, false);
            this.embedMessage.addField("Reward", almanax.reward + "K", false);
        }
        return this.embedMessage;
    };
    EmbedMessage.prototype.defineTitle = function () {
        this.embedMessage.setTitle("Local Almanax of " +
            this.today.getDate() + "/" +
            (this.today.getMonth() + 1) + "/" +
            this.today.getFullYear());
    };
    return EmbedMessage;
}());
exports.EmbedMessage = EmbedMessage;
