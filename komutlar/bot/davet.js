module.exports = {
  name: "davet",
  aliases: ["invite","davet"],
  code: `
$author[Fiyu;$client[avatar]]
$addfield[Destek Sunucusu;[Tıkla](https://dc.fiyu.tk)]
$addfield[Davet Linki;[Tıkla](https://invite.fiyu.tk)]
$footer[Bilgilenen $username;$authoravatar]
$color[BLUE]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}