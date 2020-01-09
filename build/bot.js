"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var axios_1 = require("axios");
var path = require("path");
var YAML = require("yamljs");
var EmbedMessage_1 = require("./models/EmbedMessage");
var DiscordTS = /** @class */ (function () {
    function DiscordTS() {
        this.client = new discord_js_1.Client();
        this.config = YAML.load(path.resolve(__dirname, "settings.yml"));
        this.embedMessage = new EmbedMessage_1.EmbedMessage();
    }
    DiscordTS.prototype.start = function () {
        var _this = this;
        this.client.on("message", function (message) {
            if (message.content === _this.config.settings.prefix + "almanax") {
                _this.getAlmanaxOfToday()
                    .then(function (reponse) {
                    message.channel.send(_this.embedMessage.createEmbedMessage(reponse.data[0]));
                }, function (error) {
                    console.log(error);
                });
            }
        });
        this.client.login(this.config.settings.token);
    };
    DiscordTS.prototype.getAlmanaxOfToday = function () {
        return axios_1.default({
            method: 'get',
            url: this.config.almanax.url
        });
    };
    return DiscordTS;
}());
exports.DiscordTS = DiscordTS;
