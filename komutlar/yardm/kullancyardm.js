module.exports = {
    name: "kullanıcı",
    aliases: ["kullanıcıyardım","kullanıcı-yardım"],
    code: `
$title[$customemoji[fiyu_kullaniciyardim] Kullanıcı]
$description[**$get[p]kullanıcı-bilgi | \`Kullanıcının Bilgilerini Gösterir\`
$get[p]avatar | \`Kullanıcının Avatarını Gösterir\`**]
$footer[Bilgilenen $username;$authoravatar]
$color[GREEN]

$let[p;$getservervar[prefix]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}