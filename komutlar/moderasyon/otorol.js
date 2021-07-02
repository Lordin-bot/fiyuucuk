module.exports = {
name: "otorol",
aliases: ["otorol-sistemi"],
code: `
$if[$nomentionmessage[1]==]
$author[Otorol Ayarlandı;$serverIcon]
$addfield[Otorol Log;<#$mentionedChannels[1]>]
$addfield[Otorol;<@&$mentionedRoles[1]>]
$footer[$userTag;$authorAvatar]
$addTimestamp
$color[GREEN]

$setServerVar[otorol;$mentionedRoles[1]]
$setServerVar[otorollog;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1]!=;$customemoji[red_gif] **Otorol Log Ayarlamak İstediğin Kanalı Etiketle** {delete:5s}]
$onlyIf[$mentionedRoles[1]!=;$customemoji[red_gif] **Otorol Ayarlamak İstediğin Rolü Etiketle** {delete:5s}]
$onlyif[$getservervar[otorol]==;$customemoji[red_gif] **Otorol Zaten Açık. Kapatmak İçin \`f!otorol kapat\` Yazabilirsin** {delete:5s}]

$elseIf[$nomentionmessage[1]==kapat]
$customemoji[onay_gif] **Otorol Başarıyla Kapatıldı**
$setServerVar[otorol;]
$setServerVar[otorollog;]

$onlyif[$getservervar[otorol]!=;$customemoji[red_gif] **Bu Sunucuda Otorol Sistemi Zaten Kapalı** {delete:5s}]
$endElseIf
$endIf

$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın {delete:5s}]
$onlyIf[$hasPerms[$clientID;manageroles]!=false;Bu sunucuda **Rolleri Yönet** yetkim bulunmamakta {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
} 
