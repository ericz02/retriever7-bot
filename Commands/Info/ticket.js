const {
Client,
SlashCommandBuilder,
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle,
PermissionFlagsBits,
} = require("discord.js")

// const {openticket} = require("../../config.json")
const {openticket} = require("dotenv").config()

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Create a ticket message.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

    async execute(interaction) {
        const {guild} = interaction;

        const embed = new EmbedBuilder()
            .setDescription("Open a ticket in the discord server.")

        const button = new ActionRowBuilder().setComponents(
            new ButtonBuilder().setCustomId('member').setLabel('Report member').setStyle(ButtonStyle.Danger).setEmoji('⚙️'),
            new ButtonBuilder().setCustomId('bug').setLabel('Report bug').setStyle(ButtonStyle.Danger).setEmoji('🐞'),
            new ButtonBuilder().setCustomId('coding').setLabel('Code support').setStyle(ButtonStyle.Danger).setEmoji('👨‍💻'),
            new ButtonBuilder().setCustomId('other').setLabel('Other support').setStyle(ButtonStyle.Danger).setEmoji('🔍'),
        );

        await guild.channels.cache.get(openticket).send({
            embeds: ([embed]),
            components: [
                button
            ]
        })

        interaction.reply({content: "Ticket message has been sent.", ephemeral: true});
    }
}