module.exports = {
  name: "emojiler",
  code: `
$description[**$serverEmojis**]
$color[YELLOW]
$footer[Bilgilenen $username;$authoravatar]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}