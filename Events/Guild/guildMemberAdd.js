const {EmbedBuilder, EmbedAssertions} = require("@discordjs/builders");
const {GuildMember, Embed} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get('1059676249712250951') //welcome channel id
        const welcomeMessage = `Welcome <@${member.id}> to the guild!`;
        const memberRole = '1058243068513493082'

        const welcomeEmbed = new EmbedBuilder()
        .setTitle("**New member!**")
        .setDescription(welcomeMessage)
        .setColor(0x037821)
        .addFields({name: 'Total members', value: `${guild.memberCount}`})
        .setTimestamp();

        welcomeChannel.send({embeds: [welcomeEmbed]})
        member.roles.add(memberRole);

    }
}