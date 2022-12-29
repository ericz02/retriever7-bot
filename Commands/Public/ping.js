const {SlashCommandBuilder, CommandInterction, PermissionFlagsBits} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pong")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    execute(interaction) {
        interaction.reply({content: "Pong", ephermal: true})
    }
}