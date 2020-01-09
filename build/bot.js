"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var path = require("path");
var YAML = require("yamljs");
var DiscordTS = /** @class */ (function () {
    function DiscordTS() {
        this.client = new discord_js_1.Client();
        this.config = YAML.load(path.resolve(__dirname, "settings.yml"));
    }
    DiscordTS.prototype.start = function () {
        var _this = this;
        this.client.on("ready", function () {
            console.log("I'm ready!");
            _this.client.user.setActivity(_this.config.settings.activity);
        });
        this.client.on("message", function (message) {
            if (message.content === _this.config.settings.prefix + "ping")
                message.channel.send("Pong!");
        });
        this.client.login(this.config.settings.token);
    };
    return DiscordTS;
}());
exports.DiscordTS = DiscordTS;
