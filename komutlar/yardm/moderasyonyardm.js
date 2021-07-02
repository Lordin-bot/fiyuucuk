module.exports = {
    name: "moderasyon",
    aliases: ["moderasyonyardım","moderasyon-yardım"],
    code: `
$title[$customemoji[fiyu_moderasyonyardim] Moderasyon]
$description[**$get[p]otorol | \`Yeni Gelenlere Otomatik Verilecek Rolü Ayarlarsınız\`
$get[p]hgbb | \`Giriş Çıkış Kanalını Ayarlarsınız\`
$get[p]linkengel | \`Link Engel Sistemini Ayarlarsınız\`
$get[p]küfürengel | \`Küfür Engel Sistemini Ayarlarsınız\`
$get[p]sayaç | \`Sayaç Sistemini Ayarlarsınız\`
$get[p]prefix | \`Sunucuya Özel Prefix Ayarlarsınız\`**]
$footer[Bilgilenen $username;$authoravatar]
$color[BLACK]

$let[p;$getservervar[prefix]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}