module.exports = {
  name: "roller",
  code: `
$description[**$guildRoles[mention]**]
$color[BLUE]
$footer[Bilgilenen $username;$authoravatar]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}