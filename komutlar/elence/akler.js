module.exports = {
  name: "aşk-ölçer",
  aliases: ["aşk-ölç","aşkölçer","aşkölç"],
  code: `
$title[$username ❤️ $username[$mentioned[1]]]
$description[$randomText[❤️💔💔💔💔💔💔💔💔💔;❤️❤️💔💔💔💔💔💔💔💔;❤️❤️❤️💔💔💔💔💔💔💔;❤️❤️❤️❤️💔💔💔💔💔💔;❤️❤️❤️❤️❤️💔💔💔💔💔;❤️❤️❤️❤️❤️❤️💔💔💔💔;❤️❤️❤️❤️❤️❤️❤️💔💔💔;❤️❤️❤️❤️❤️❤️❤️❤️💔💔;❤️❤️❤️❤️❤️❤️❤️❤️❤️💔;❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️;💔💔💔💔💔💔💔💔💔💔] 
**%$get[yüzde]**]
$color[ff0000]
$footer[$usertag;$authoravatar]
$thumbnail[$useravatar[$mentioned[1]]]

$let[yüzde;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$randomText[❤️💔💔💔💔💔💔💔💔💔;❤️❤️💔💔💔💔💔💔💔💔;❤️❤️❤️💔💔💔💔💔💔💔;❤️❤️❤️❤️💔💔💔💔💔💔;❤️❤️❤️❤️❤️💔💔💔💔💔;❤️❤️❤️❤️❤️❤️💔💔💔💔;❤️❤️❤️❤️❤️❤️❤️💔💔💔;❤️❤️❤️❤️❤️❤️❤️❤️💔💔;❤️❤️❤️❤️❤️❤️❤️❤️❤️💔;❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️;💔💔💔💔💔💔💔💔💔💔];❤️💔💔💔💔💔💔💔💔💔;$random[1;10]];❤️❤️💔💔💔💔💔💔💔💔;$random[11;20]];❤️❤️❤️💔💔💔💔💔💔💔;$random[21;30]];❤️❤️❤️❤️💔💔💔💔💔💔;$random[31;40]];❤️❤️❤️❤️❤️💔💔💔💔💔;$random[41;50]];❤️❤️❤️❤️❤️❤️💔💔💔💔;$random[51;60]];❤️❤️❤️❤️❤️❤️❤️💔💔💔;$random[61;70]];❤️❤️❤️❤️❤️❤️❤️❤️💔💔;$random[71;80]];❤️❤️❤️❤️❤️❤️❤️❤️❤️💔;$random[81;90]];❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️;$random[91;100]];💔💔💔💔💔💔💔💔💔💔;0]]

$onlyif[$isBot[$mentioned[1]]!=true;Bu Bir Bot $customemoji[PepeYak]]
$onlyif[$mentioned[1]!=$authorid;Aga Bee $customemoji[PepeYak]]
$onlyif[$mentioned[1]!=$clientid;Bana Mı Aşıksın :D? $customemoji[muck]]
$onlyif[$mentioned[1]!=;**Sevdiğin Kişiyi Etiketle.**{delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}