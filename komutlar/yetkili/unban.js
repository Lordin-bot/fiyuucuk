module.exports = {
  name: "unban",
  aliases: ["yasak-kaldır","yasakkaldır"],
  code: `
**$usertag[$finduser[$message[1]]]** Kullanıcısının Yasağı Kaldırıldı
$unban[$finduser[$message[1]]]

$onlyif[$isBanned[$finduser[$message[1]]]!=false;$customEmoji[red_gif] **Bu Kullanıcı Zaten Yasaklı Değil**{delete:5s}]
$onlyif[$finduser[$message[1]]!=$authorid;$customemoji[red_gif] **Bu Sensin**{delete:5s}]
$onlyif[$finduser[$message[1];no]!=undefined;$customemoji[red_gif] **Yasaklanan Bir Kişinin ID'sini Girmelisin**{delete:5s}]
$onlyperms[ban;Bu komutu kullanabilmek için **Üyeleri Yasakla** yetkisine sahip olmalısın]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}