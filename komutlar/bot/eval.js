module.exports = {
    name: "eval",
    code: `
$eval[$message]

$onlyIf[$message!=;**Bir Şey Yaz.**]
$onlyForIDs[$botOwnerID;Sen kimsin ya]
`
    }