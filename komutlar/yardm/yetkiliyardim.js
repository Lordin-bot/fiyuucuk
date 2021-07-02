module.exports = {
    name: "yetkili",
    aliases: ["yetkiliyardım","yetkili-yardım"],
    code: `
$title[$customemoji[fiyu_yetkiliyardim] Yetkili]
$description[**$get[p]ban | \`Belirtilen Kullanıcıyı Sunucudan Yasaklarsınız\`
$get[p]unban | \`Belirtilen Kişinin Sunucudan Yasağını Kaldırırsınız\`
$get[p]temizle | \`Sohbeti Temizlersiniz\`
$get[p]yavaşmod | \`Kanalın Yavaşmodunu Ayarlarsınız\`
$get[p]nuke | \`Kanalı Nukelersiniz\`**]
$footer[Bilgilenen $username;$authoravatar]
$color[ORANGE]

$let[p;$getservervar[prefix]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}