module.exports = {
    name: "Create Temporary Channel",
    author: ["DeepInMind#1864"],
    version: "0.0.1",
    changelog: "Nothing",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
        <style>
            #authormark { margin-top:5px; }
        </style>
        <div class="form-group">
            <select class="form-control" name="torv">
                <option value="text" selected>Text Channel</option>
                <option value="voice">Voice Channel</option>
            </select>
        </div>
        <div class="form-group">
            <textarea class="form-control needed-field" name="channelname" rows="1" placeholder="Channel Name"></textarea>
            <label id="authormark">|| by DeepInMind#1864 with credit to qizzle Schnitzel#9271</label>
        </div>
        `;
    },
    init: function() {
        console.log(">> Temporary Channel Mod loaded.");
    },
    mod: function(DBS, message, action, args, command, index) {
        var name = message.author.username;
        var guild = message.guild;

        /* const channel = guild.channels.cache.find((channel) => {
            return channel.name === '👋｜${name}';
        })
        if (channel) {
            return;
        } */

        var temp_channel = message.guild.create('👋｜${name}', {
            type: 'text',
            parent: '799211083676123147',
            permissionOverwrites: [
                {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL'],
                    allow: ['SEND_MESSAGES'],
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
            ],
        });

        DBS.setVar("temp", "temp_channel", temp_channel, guild);
        DBS.callNextAction(command, message, args, index + 1);

    }
};