module.exports = {
  name: "nuke",
  code: `
$channelsendmessage[$splittext[1];$customemoji[fiyu_nuke] Kanal Nukelendi]
$setchanneltopic[$splittext[1];$getservervar[nuke]]
$deletechannels[$channelid]
$setservervar[nuke;$channeltopic]
$textsplit[$clonechannel[$channelid;yes]; ]
$onlyperms[managechannels;Bu komutu kullanabilmek için **Kanalları Yönet** yetkisine sahip olmalısın {delete:5s}]
`
}