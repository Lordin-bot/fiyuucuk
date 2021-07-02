module.exports = {
  name: "ban",
  aliases: ["yasakla"],
  code: `
**$usertag[$finduser[$message[1]]]** Sunucudan Yasaklandı
$ban[$finduser[$message[1]];$replaceText[$message;$message[1];];7]

$onlyif[$roleposition[$highestrole[$authorid]]<$roleposition[$highestrole[$finduser[$message[1]]]];$customemoji[red_gif] **Bu Kullanıcıyı Yasaklayamazsın**{delete:5s}]
$onlyif[$roleposition[$highestrole[$clientid]]<$rolePosition[$highestrole[$finduser[$message[1]]]];$customemoji[red_gif] **Bu Kullanıcıyı Yasaklayamam**{delete:5s}] 

$onlyif[$isBanned[$finduser[$message[1]]]!=true;$customEmoji[red_gif] **Bu Kullanıcı Zaten Daha Önceden Yasaklanmış**{delete:5s}]
$onlyif[$finduser[$message[1]]!=$authorid;$customemoji[red_gif] **Kendini Yasaklayamazsın**{delete:5s}]
$onlyif[$finduser[$message[1];no]!=undefined;$customemoji[red_gif] **Kullanıcı Bulunamadı**{delete:5s}]
$onlyif[$message[1]!=;$customEmoji[red_gif] **Bir Kullanıcı Etiketlemelisin**{delete:5s}]
$onlyperms[ban;Bu komutu kullanabilmek için **Üyeleri Yasakla** yetkisine sahip olmalısın {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}