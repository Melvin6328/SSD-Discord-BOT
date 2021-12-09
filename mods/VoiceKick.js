module.exports = {
    name: "VoiceKick",
    author: ["aoe#4851"],
    version: "0.0.1",
    changelog: "Added the Ability to Voice Kick a Member ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "User Action",
    html: function(data) {
        return `
        <div class="form-group">
            <label>The Success Message on Voice Kick *</label>
            <textarea class="form-control needed-field" name="msg" rows="1" ></textarea>
        </div>
        `;
    },
    init: function() {
        console.log("Loaded VoiceKick Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
    message.mentions.members.first().voice.kick();
    message.channel.send(action.msg)
    DBS.callNextAction(command, message, args, index + 1);
    }
};
