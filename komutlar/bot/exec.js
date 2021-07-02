module.exports = {
    name: "exec",
    code: `
$exec[$message]

$onlyIf[$message!=;**Bir Şey Yaz.**]
$onlyForIDs[$botOwnerID;Sen yapamazsın]
`
    }