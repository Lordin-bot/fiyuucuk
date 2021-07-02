module.exports = {
    name: "reboot",
    code: `
$reboot
$wait[1s]
$setvar[reboot;$channelid]
$sendmessage[$customemoji[fiyu_online] **Bot Yeniden Başlatılıyor..**;no]

$onlyForIDs[$botOwnerID;**Geliştiricim Değilsin.**]
`
    }