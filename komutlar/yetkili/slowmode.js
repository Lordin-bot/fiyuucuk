module.exports = {
  name: "yavaşmod",
  aliases: ["slowmode","slow-mode","yavaş-mod"],
  code: `
$customemoji[onay_gif] **Yavaşmod \`$message[1]\` Olarak Ayarlandı**

$slowmode[$channelID;$message[1]s]

$onlyif[$message[1]!=$getchannelslowmode;$customemoji[red_gif] **Yavaşmod Zaten \`$message[1]\` Saniye**{delete:5s}]
$onlyif[$message[1]<=21600;$customemoji[red_gif] **En Fazla \`21600\` Saniye Yapabilirsin**{delete:5s}]
$onlyif[$isnumber[$message[1]]!=false;$customEmoji[red_gif] **Bir Sayı Girmelisin**{delete:5s}]
$onlyperms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olmalısın {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}