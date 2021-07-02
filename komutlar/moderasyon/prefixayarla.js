module.exports = {
  name: "prefix",
  aliases: ["prefix-değiştir","prefixdeğiştir"],
  code: `
$if[$message==sıfırla]
$customemoji[onay_gif] **Prefix Sıfırlandı**
$setservervar[prefix;f!]

$else
$author[Prefix Değiştirildi;$servericon]
$description[Bu Sunucuda Prefixim **\`$message[1]\`** Olarak Ayarlandı]
$color[RANDOM]
$footer[$usertag;$authoravatar]

$setservervar[prefix;$message[1]]

$onlyif[$charcount[$message[1]]<=5;$customemoji[red_gif] **En Fazla 5 Karakter Girebilirsin**{delete:5s}]
$onlyif[$message[1]!=;$customEmoji[red_gif] **Bir Prefix Girmelisin**{delete:5s}]
$onlyif[$message[2]==;$customemoji[red_gif] **Girdiğin Prefixte Çok Fazla Kelime Var**{delete:5s}]

$endif
$onlyperms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}