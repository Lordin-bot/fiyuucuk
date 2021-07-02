module.exports = {
  name: "temizle",
  aliases: ["sil"],
  code: `
<@$authorID>**, \`$nomentionmessage[1]\` Mesaj Sildi**
$deletecommand
$deletein[3s]
$clear[$nomentionmessage[1]]
$suppressErrors[$customemoji[red_gif] **Hata.**]
$onlyif[$nomentionmessage<=400;$customemoji[red_gif] **En Fazla 400 Mesaj Silebilirsin**{delete:5s}]
$onlyif[$isnumber[$nomentionmessage[1]]!=false;$customemoji[red_gif] **Bir Sayı Girmelisin**{delete:5s}]
$onlyif[$nomentionmessage[1]!=;$customemoji[red_gif] **Bir Sayı Girmelisin**{delete:5s}]
$onlybotperms[managemessages;Bu sunucuda **Mesajları Yönet** yetkim bulunmamakta {delete:5s}]
$onlyperms[managemessages;Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}