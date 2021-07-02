module.exports = {
    name: "eğlence",
    aliases: ["eğlenceyardım","eğlence-yardım"],
    code: `
$title[$customemoji[fiyu_eglenceyardim] Eğlence]
$description[**$get[p]token | \`Botun Tokenini Alırsınız\`
$get[p]aşk-ölçer | \`Etiketlediğiniz Kişiyle Aşkınızı Ölçersiniz\`**]
$footer[Bilgilenen $username;$authoravatar]
$color[ff0000]

$let[p;$getservervar[prefix]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}