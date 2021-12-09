module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "EditPermissions",

    // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
    author: ["zCuzImJonas#1010", "Pokemonultra#2815"],

    // Place the version of the mod here.
    version: "0.1.0",

    // Whenever you make a change, please place the changelog here with your name.
    changelog: "nothing",

    // Set this to true if this will be an event.
    isEvent: false,

    isResponse: true,

    // Set this to true if this will be a response mod.
    isMod: true,

    // If you want to modify a core feature, set this to true.
    isAddon: false,

    // Here you can define where you want your mod to show up inside of Discord Bot Studio
    section: "Channel Action",

    // Place your html to show inside of Discord Bot Studio when they select your mod.
    html: function (data) {
        return `
            <div class="form-group">
            <label>Role ID or Name: *</label>
            <input class="form-control needed-field" name="roleidorname"></input>
            </div>
            <div class="form-group">
            <label>Channel ID or Name: *</label>
            <input class="form-control needed-field" name="channelidorname"></input>
            </div>
            <div class="form-group">
            <label>Channel Type: *</label>
             <select class="form-control" name="channeltype" id="cType">
             <option value="voice" selected>Voice</option>
             <option value="text" >Text</option>
             </select>
             </div>
             <label>Which permission should be changed? *</label>
    <div class="form-group" id="vcPerms" >
    <select class="form-control" name="editvcperms">
        <option value="VIEW_CHANNEL" selected>VIEW_CHANNEL</option>
        <option value="CREATE_INSTANT_INVITE">CREATE_INSTANT_INVITE</option>
        <option value="CONNECT">CONNECT</option>
        <option value="SPEAK">SPEAK</option>
        <option value="VIDEO">VIDEO</option>
        <option value="USE_VAD">USE_VOICE_ACTIVITY_DETECTION</option>
        <option value="PRIORITY_SPEAKER">PRIORITY_SPEAKER</option>
        <option value="MUTE_MEMBERS">MUTE_MEMBERS</option>
        <option value="DEAFEN_MEMBERS">DEAFEN_MEMBERS</option>
        <option value="MOVE_MEMBERS">MOVE_MEMBERS</option>
    </select>
</div>
    <div class="form-group" id="txtPerms" >
    <select class="form-control" name="edittxtperms">
        <option value="VIEW_CHANNEL">VIEW_CHANNEL</option>
        <option value="MANAGE_CHANNELS">MANAGE_CHANNELS</option>
        <option value="MANAGE_WEBHOOKS">MANAGE_WEBHOOKS</option>
        <option value="CREATE_INSTANT_INVITE">CREATE_INSTANT_INVITE</option>
        <option value="SEND_MESSAGES" selected>SEND_MESSAGES</option>
        <option value="EMBED_LINKS">EMBED_LINKS</option>
        <option value="ATTACH_FILES">ATTACH_FILES</option>
        <option value="ADD_REACTIONS">ADD_REACTIONS</option>
        <option value="USE_EXTERNAL_EMOJIS">USE_EXTERNAL_EMOJIS</option>
        <option value="MENTION_EVERYONE">MENTION_EVERYONE_HERE_ALL-ROLES</option>
        <option value="MANAGE_MESSAGES">MANAGE_MESSAGES</option>
        <option value="READ_MESSAGE_HISTORY">READ_MESSAGE_HISTORY</option>
        <option value="SEND_TTS_MESSAGES">SEND_TTS_MESSAGES</option>
        <option value="USE_SLASH_COMMANDS">USE_SLASH_COMMANDS</option>
    </select>
</div>
     <div class="form-group">
    <label>Set Permission to true/false? *</label>
    <select class="form-control" name="yesNo">
        <option value="settrue" selected>true</option>
        <option value="setfalse" >false</option>
    </select>
 </div>
        <script>
         $(function() {
                  
              
              $("#txtPerms").hide()


                    check()
                    $('#cType').change(() => {
                        check()
                    });
                })

                function check() {
                    if ($('#cType').val() == "voice") {
                        $("#vcPerms").show()
                        $("#txtPerms").hide()
                    } else {
                        $("#vcPerms").hide()
                        $("#txtPerms").show()
                    }
                }
        </script>
    `;
    },

    // When the bot is first started, this code will be ran.
    init: function () {
        console.log("Loaded EditPermissions - by zCuzImJonas#1010 & Pokemonultra#2815");
    },

    // Place your mod here.
    mod: function (DBS, message, action, args, command, index) {
        const channel = message.guild.channels.cache.find(c => c.id === action.channelidorname) || message.guild.channels.cache.find(c => c.name === action.channelidorname)
        const roles = message.guild.roles;
        const role = roles.cache.find(r => r.id === action.roleidorname) || roles.cache.find(r => r.name === action.roleidorname)
        const list = action.editvcperms || action.edittxtperms


        if (!channel || !role) {
            return message.channel.send("Invalid Channel or Role")
        }


        if (action.yesno === "settrue") {
            action.yesno = true
        } else {
            action.yesno = false
        }


        const bool = action.yesno


        switch (list) {
            case "CONNECT":
                channel.updateOverwrite(role, { 'CONNECT': bool });
                break;
            case "SPEAK":
                channel.updateOverwrite(role, { 'SPEAK': bool });
                break;
            case "MUTE_MEMBERS":
                channel.updateOverwrite(role, { 'MUTE_MEMBERS': bool });
                break;
            case "DEAFEN_MEMBERS":
                channel.updateOverwrite(role, { 'DEAFEN_MEMBERS': bool });
                break;
            case "MOVE_MEMBERS":
                channel.updateOverwrite(role, { 'MOVE_MEMBERS': bool });
                break;
            case "PRIORITY_SPEAKER":
                channel.updateOverwrite(role, { 'PRIORITY_SPEAKER': bool });
                break;
            case "USE_VAD":
                channel.updateOverwrite(role, { 'USE_VAD': bool });
                break;
            case "SEND_MESSAGES":
                channel.updateOverwrite(role, { 'SEND_MESSAGES': bool });
                break;
            case "SEND_TTS_MESSAGES":
                channel.updateOverwrite(role, { 'SEND_TTS_MESSAGES': bool });
                break;
            case "ATTACH_FILES":
                channel.updateOverwrite(role, { 'ATTACH_FILES': bool });
                break;
            case "READ_MESSAGE_HISTORY":
                channel.updateOverwrite(role, { 'READ_MESSAGE_HISTORY': bool });
                break;
            case "MANAGE_MESSAGES":
                channel.updateOverwrite(role, { 'MANAGE_MESSAGES': bool });
                break;
            case "MENTION_EVERYONE":
                channel.updateOverwrite(role, { 'MENTION_EVERYONE': bool });
                break;
            case "USE_EXTERNAL_EMOJIS":
                channel.updateOverwrite(role, { 'USE_EXTERNAL_EMOJIS': bool });
                break;
            case "USE_SLASH_COMMANDS":
                channel.updateOverwrite(role, { 'USE_SLASH_COMMANDS': bool });
                break;
            case "ADD_REACTIONS":
                channel.updateOverwrite(role, { 'ADD_REACTIONS': bool });
                break;
            case "VIEW_CHANNEL":
                channel.updateOverwrite(role, { 'VIEW_CHANNEL': bool });
                break;
            case "MANAGE_CHANNELS":
                channel.updateOverwrite(role, { 'MANAGE_CHANNELS': bool });
                break;
            case "MANAGE_WEBHOOKS":
                channel.updateOverwrite(role, { 'MANAGE_WEBHOOKS': bool });
                break;
            case "MANAGE_ROLES":
                channel.updateOverwrite(role, { 'MANAGE_ROLES': bool });
                break;
            case "CREATE_INSTANT_INVITE":
                channel.updateOverwrite(role, { 'CREATE_INSTANT_INVITE': bool });
                break;
            case "STREAM":
                channel.updateOverwrite(role, { 'STREAM': bool });
                break;
        }
        DBS.callNextAction(command, message, args, index + 1);
    }
};