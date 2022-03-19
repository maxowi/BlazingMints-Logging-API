const express = require('express')
const axios = require('axios')
const requestIp = require('request-ip');
const app = express();
let cors = require('cors');
var bodyParser = require('body-parser')
const { Webhook, MessageBuilder } =require('discord-webhook-node')
const fs = require("fs");
const colors = require("colors");
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

var start_ip_webhook = "https://webhooks.aycd.io/webhooks/api/v1/send/15544/b2df9c79-f7c9-4010-8754-57dc8ebdc54e"
var stranger_key = "https://webhooks.aycd.io/webhooks/api/v1/send/15546/8d35112b-0ef5-4c05-98ed-f7af59a7e5b7"
var started_bot_without_blazing = "https://webhooks.aycd.io/webhooks/api/v1/send/15545/27a8cc43-8966-4e16-9d06-107d9fec389e"

process.on('uncaughtException', err => {
    console.log(`Uknown Error:`,err.message)
})

app.get('/sendip/:ipaddress', (req, res) => {
    const clientIp = req.ip
    var webhookText = start_ip_webhook
    const hook = new Webhook(webhookText);
    const embed = new MessageBuilder()
        .setTitle('Stranger Opened Bot')
        .addField('IP-Address:', `${clientIp}`, true)
        .setColor('#ff4747')
        .setThumbnail('https://media.discordapp.net/attachments/840649597604724747/916762396020862976/unknown_4.png')
        .setFooter(`BlazingMints`, 'https://media.discordapp.net/attachments/840649597604724747/916762396020862976/unknown_4.png')
        .setTimestamp();
    hook.send(embed);
    res.send(req.params)
})

app.get('/sendkey/:key', (req, res) => {
    var key_from_jaja = req.params.key
    const hook = new Webhook(stranger_key);

    if (key_from_jaja.includes("BLAZING")){
        var sadads = "asddsa"
    }
    else {
        const hookk = new Webhook(started_bot_without_blazing);
        const embed = new MessageBuilder()
            .setTitle('Stranger Opened Bot without "BLAZING" in it')
            .addField('Key:', `${req.params.key}`)
            .addField('IP-Address:', `${req.ip}`)
            .setColor('#ff4747')
            .setThumbnail('https://media.discordapp.net/attachments/840649597604724747/916762396020862976/unknown_4.png')
            .setFooter(`BlazingMints`, 'https://media.discordapp.net/attachments/840649597604724747/916762396020862976/unknown_4.png')
            .setTimestamp();
        hookk.send(embed);
    }

    const embed = new MessageBuilder()
        .setTitle('Stranger Opened Bot')
        .addField('Key:', `${req.params.key}`)
        .addField('IP-Address:', `${req.ip}`)
        .setColor('#ff4747')
        .setThumbnail('https://media.discordapp.net/attachments/840649597604724747/916762396020862976/unknown_4.png')
        .setFooter(`BlazingMints`, 'https://media.discordapp.net/attachments/840649597604724747/916762396020862976/unknown_4.png')
        .setTimestamp();
    hook.send(embed);
    res.send(req.params)
})

app.listen(port, () => {
  console.log(`[BLAZINGMINTS LOGGING API LISTENING ON PORT: ${port}]`)
})
