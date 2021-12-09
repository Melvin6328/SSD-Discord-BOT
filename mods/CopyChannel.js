module.exports = {
    name: "CopyChannel",
    author: ["aoe#4851"],
    version: "0.0.1",
    changelog: "Added the Ability to Copy a Channel ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
         <b>Click Save or this wont work! </b>
        `;
    },
    init: function() {
        console.log("Loaded CopyChannel Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
    message.channel.clone()
    DBS.callNextAction(command, message, args, index + 1);
    }
};