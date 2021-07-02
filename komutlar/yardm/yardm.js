module.exports = {
    name: "yardım",
    aliases: ["help"],
    code: `
$author[$username[$clientID] Yardım Menüsü;$userAvatar[$clientID]]
$description[**$username[$clientID]** Yardım Menüsüne Hoşgeldin 

$customEmoji[fiyu_botyardim] **| f!bot・Bot Yardım Menüsü**
$customEmoji[fiyu_moderasyonyardim] **| $get[p]moderasyon・Moderasyon Yardım Menüsü**
$customemoji[fiyu_kullaniciyardim] **| $get[p]kullanıcı・Kullanıcı Yardım Menüsü**
$customemoji[fiyu_yetkiliyardim] **| $get[p]yetkili・Yetkili Yardım Menüsü**
$customemoji[fiyu_eglenceyardim] **| $get[p]eğlence・Eğlence Yardım Menüsü**]
$color[YELLOW]
$footer[Bilgilenen $username;$authorAvatar]

$let[p;$getservervar[prefix]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
    }