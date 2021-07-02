const fiyu = require(`aoi.js`)

const bot = new fiyu.Bot({
    sharding: false,
    shardAmount: 2,
    token: " ", 
    prefix: ["$getservervar[prefix]","f!"]
})
bot.onMessage()
bot.loadCommands(`./komutlar/`)

bot.variables({
    otorol: "",
    otorollog: "",
    hgbb: "",
    linkengel: "kapalı",
    küfürengel: "kapalı",
    reboot: "",
    prefix: "f!",
    hedef: "",
    sayaç: "kapalı",
    blk: "h",
    bls: "h",
    nuke: "none",
    dticketl: "0"
})

bot.status({
    text: "🎉 f!yardım - Yardım Menüsü [$serverCount/50]",
    type: "PLAYING",
    time: 1
})

bot.command({
  name: "$alwaysExecute",
  code: `
$deletecommand
$onlyforchannels[847968726620045392;]
`
})
bot.command({
  name: "istek",
  aliases: ["suggest"],
  code: `
$title[$usertag;https://dc.fiyu.tk]
$addfield[Tarih;$parseDate[$datestamp]]
$addfield[İstek;$message]
$timezone[Turkey]
$color[YELLOW]
$usechannel[849735772504588288]
$senddm[$authorid;$customemoji[onay_gif] İstek Başarıyla Gönderildi]
$onlyif[$message!=;]
$onlyforchannels[847968726620045392;<#847968726620045392> {delete:5s}]
$onlyforservers[847786956951388161;]
`
})

bot.joinCommand({
    channel: "$getServerVar[otorollog]",
    code: `
$customEmoji[fiyusiyahtik] **$username** Adlı Kullanıcıya Başarıyla **$roleName[$getservervar[otorol]]** Rolü Verildi.
$giveRoles[$authorID;$getServerVar[otorol]]
`
})
bot.onJoined()

bot.joinCommand({
    channel: "$getServerVar[hgbb]",
    code: `$customemoji[fiyu_giris] <@$authorID> Sunucumuza Hoşgeldin! Artık Seninle Birlikte **$membersCount** Kişiyiz`
    })
bot.leaveCommand({
    channel: "$getServerVar[hgbb]",
    code: `$customemoji[fiyu_cikis] **$usertag** Sunucumuzdan Ayrıldı! Artık **$memberscount** Kişiyiz`
    })
bot.onLeave()

bot.readyCommand({
  channel: "$getVar[reboot]",
  code: `
$setvar[reboot;]
$wait[1s]
$sendmessage[$customemoji[onay_gif] **Bot Yeniden Başlatıldı**;no]
$suppressErrors[]
`
})
bot.readyCommand({
  channel: "847969284017750066",
  code: `
$customemoji[fiyu_online] $randomtext[Tekrardan Aktifim 😜;redent Sonunda beni aktif etti ☺️]
`
})
bot.botJoinCommand({
channel: "847968891836694529",
code: `
$title[$servername;https://invite.fiyu.tk]
$description[Sunucu: **$servername | $guildid** \nKurucu: **$usertag[$ownerid] | $ownerid** \n\nÜye Sayısı: **$membersCount** \n\nToplam Sunucum: **$serverCount** \nToplam Kullanıcım: **$allmemberscount**]
$footer[Sunucuya Eklendim]
$thumbnail[$servericon]
$color[00ff00] 
`
})
bot.onGuildJoin()

bot.botLeaveCommand({
channel: "847968891836694529",
code: `
$title[$servername;https://invite.fiyu.tk]
$description[Sunucu: **$servername | $guildid** \nKurucu: **$usertag[$ownerid] | $ownerid** \n\nÜye Sayısı: **$membersCount** \n\nToplam Sunucum: **$serverCount** \nToplam Kullanıcım: **$allmemberscount**]
$footer[Sunucudan Atıldım]
$thumbnail[$servericon]
$color[ff0000]
`
})
bot.onGuildLeave()

bot.joinCommand({
    channel: "$getServerVar[sayaç]",
    code: `$customemoji[fiyu_giris] <@$authorID> Sunucumuza Katıldı! **$getservervar[hedef]** Kişiye Son **$sub[$getservervar[hedef];$membersCount]** Kişi Kaldı

$onlyif[$membersCount<=$getservervar[hedef];$customemoji[fiyu_giris] <@$authorID> Sunucumuza Katıldı! **$getservervar[hedef]** Kişi Hedefi Tamamlanmış]`
    })
bot.leaveCommand({
    channel: "$getServerVar[sayaç]",
    code: `$customemoji[fiyu_cikis] **$usertag** Sunucumuzdan Ayrıldı! **$getservervar[hedef]** Kişiye Son **$sub[$getservervar[hedef];$membersCount]** Kişi Kaldı

$onlyif[$membersCount<=$getservervar[hedef];$customemoji[fiyu_cikis] **$usertag** Sunucumuzdan Ayrıldı! **$getservervar[hedef]** Kişi Hedefi Tamamlanmış`
    })

bot.command({
  name: "dticket-kapat",
  code: `
$closeTicket[]
$setuservar[dticketl;0]
`
})
bot.awaitedCommand({
  name: "dticketl",
  code: `
$senddm[$authorid;Zaten bir ticket açmışsın]
`
})
bot.awaitedCommand({
  name: "dticketa",
  code: `
$newticket[ticket-$findchars[$username];<@$authorid> <@&847787595953602581> {title:Lütfen Herhangi Bir Yetkiliyi Bekle}{description:Ticketi Kapatmak İçin **f!dticket-kapat** Yazabilirsiniz}{color:RANDOM};849430093264453642;no;]
$setuservar[dticketl;1]

$onlyif[$getuservar[dticketl]==0;{execute:dticketl}]
`
})
bot.command({
  name: "destek-ticket",
  code: `
$reactionCollector[$splittext[1];everyone;3w;📩;dticketa;yes]

$textsplit[$sendmessage[{title:$servername}{description:Ticket Açmak İçin 📩 Tepkisine Basabilirsin}{color:BLUE};yes]; ]
$onlyforids[574645568320700494;]
`
})