module.exports = {
name: "hgbb",
aliases: ["hgbb-sistemi","giriş-çıkış","gelen-giden"],
code: `
$if[$nomentionmessage[1]==]
$author[Giriş Çıkış Ayarlandı;$serverIcon]
$description[Artık Yeni Gelen Kişiler <#$mentionedChannels[1]> Kanalında Gösterilecektir]
$footer[$userTag;$authorAvatar]
$addTimestamp
$color[GREEN]


$setServerVar[hgbb;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1]!=;$customemoji[red_gif] **Giriş Çıkış Ayarlamak İstediğin Kanalı Etiketle** {delete:5s}]
$onlyif[$getservervar[hgbb]==;$customemoji[red_gif] **Giriş Çıkış Zaten Açık. Kapatmak İçin \`f!hgbb kapat\` Yazabilirsin** {delete:5s}]

$elseIf[$nomentionmessage[1]==kapat]
$customemoji[onay_gif] **Giriş Çıkış Başarıyla Kapatıldı**
$setServerVar[hgbb;]

$onlyif[$getservervar[otorol]!=;$customemoji[red_gif] **Bu Sunucuda Giriş Çıkış Sistemi Zaten Kapalı** {delete:5s}]
$endElseIf
$endIf

$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}