module.exports = {
  name: "istatistikler",
  aliases: ["istatistik","botbilgi","bot-bilgi","bot-istatistik","i"],
  code: `
  $author[$username[$clientID] İstatistikler;$userAvatar[$clientID]]
  $addfield[$customemoji[fiyu_ping] Ping;Bot Pingi **$botPingms** \nMesaj Pingi **$pingms** \nDatabase Pingi **$dbPingms**]
  $addfield[$customemoji[fiyu_hosting] Hosting;RAM Kullanımı **$ramMB** \nCPU Kullanımı **$cpu%** \nUptime **$get[son]**]
  $addfield[$customemoji[fiyu_surum] Sürüm;Node.JS Sürümü **$nodeVersion** \nAoi.JS Sürümü **v$packageVersion** \nFiyu Sürümü **v1.1**]
  $addfield[$customemoji[developer_png] Bilgi;Yapımcı **$userTag[$botOwnerID]** \nSunucu Sayısı **$serverCount** \nKullanıcı Sayısı **$allMembersCount** \nKanal Sayısı **$allChannelsCount** \nKomut Sayısı **$commandsCount** \nBot Oluşturulma **17/03/2021**]
  $color[$randomtext[00ff00;ff0000;ffff00;0000ff;000001]]
$footer[Bilgilenen $username;$authoravatar]
  $thumbnail[$useravatar[$clientid]]
  $let[son;$replaceText[$replaceText[$replaceText[$replaceText[$uptime;d; Gün;-1];h; Saat;-1];m; Dakika;-1];s; Saniye;-1]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
  `
}