module.exports = {
    name: "bot",
    aliases: ["botyardım","bot-yardım"],
    code: `
$title[$customemoji[fiyu_botyardim] Bot Yardım]
$description[**$get[p]istatistik | \`Bot İstatistiklerini Gösterir\`
$get[p]ping | \`Bot Pingini Söyler\`
$get[p]davet | \`Botun Davet Linkini Alırsınız\`
$get[p]eval | \`Kod Denersiniz\`
$get[p]exec | \`Konsola Kod Yazarsınız\`
$get[p]token | \`Botun Tokenini Alabilirsiniz\`
$get[p]reboot | \`Botu Yeniden Başlatırsınız\`
$get[p]yenilikler | \`Fiyu'ya Yapılan Güncellemeler\`**]
$color[BLUE]
$footer[Bilgilenen $username;$authorAvatar]

$let[p;$getservervar[prefix]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
    }