module.exports = {
    name: "token",
    code: `
$clientToken
$dm[$authorID]
$sendMessage[**Tokeni DM'den Yolladım Abi.**;no]
$onlyForIDs[$botOwnerID;https://tenor.com/view/elraenn-nah-el-haraketi-sg-streamer-gif-17077586]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
    }