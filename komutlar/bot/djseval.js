module.exports = {
    name: "djseval",
    code: `
$djsEval[$message]

$onlyIf[$message!=;**Bir Şey Yaz.**]
$onlyForIDs[$botOwnerID;Sen kimsin? Bu komut sadece geliştiricime özeldir]
`
    }