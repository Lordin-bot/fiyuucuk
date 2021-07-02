module.exports = {
    name: "ping",
    code: `
$author[$username[$clientID] Ping;$useravatar[$clientid]]
$description[$customemoji[fiyu_ping] Bot Pingi **$botPingms**
馃棬锔� Mesaj Pingi **$pingms**
$customemoji[fiyu_database] Database Pingi **$dbPingms**]
$color[RANDOM]
$footer[Bilgilenen $username;$authoravatar]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
    }