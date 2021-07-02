module.exports = {
name: "sayaç",
aliases: ["sayaç-sistemi"],
code: `
$if[$message[1]==kapat]
$customemoji[onay_gif] **Sayaç Başarıyla Kapatıldı**
$setServerVar[hedef;]
$setServerVar[sayaç;kapalı]

$onlyif[$getservervar[sayaç]!=kapalı;$customemoji[red_gif] **Bu Sunucuda Sayaç Sistemi Zaten Kapalı** {delete:5s}]

$elseIf[$nomentionmessage==]
$customemoji[red_gif] **\`f!sayaç <hedef> #kanal\` Veya \`f!sayaç kapat\` Yazmalısın.**
$deleteIn[5s]
$endelseif
$elseif[$message[1]!=kapat]
$author[Sayaç Ayarlandı;$serverIcon]
$addfield[Sayaç Kanalı;<#$mentionedChannels[1]>]
$addfield[Hedef;$nomentionmessage[1]]
$footer[$userTag;$authorAvatar]
$addTimestamp
$color[GREEN]

$setServerVar[hedef;$nomentionmessage[1]]
$setServerVar[sayaç;$mentionedChannels[1]]

$onlyif[$isnumber[$nomentionmessage[1]]!=false;$customemoji[red_gif] **Bir Sayı Girmelisin**{delete:5s}]
$onlyIf[$nomentionmessage[1]!=;$customemoji[red_gif] **Sayaç Hedefini Yazmalısın** {delete:5s}]
$onlyIf[$mentionedChannels[1]!=;$customemoji[red_gif] **Sayaç Ayarlamak İstediğin Kanalı Etiketle** {delete:5s}]
$onlyif[$getservervar[sayaç]==kapalı;$customemoji[red_gif] **Sayaç Zaten Açık. Kapatmak İçin \`f!sayaç kapat\` Yazabilirsin** {delete:5s}]
$endelseif
$endIf

$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
} 
