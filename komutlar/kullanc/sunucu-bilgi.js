module.exports = {
  name: "sunucu-bilgi",
  aliases: ["sunucubilgi"],
  code: `
$author[Sunucu Bilgi;$serverIcon]
$addfield[Sunucu Oluşturulma Tarihi;$get[sw] **($creationdate[$guildid])**]
$addfield[Sunucuya Katılma Tarihin;$get[skatıl] Önce **($memberJoinedDate[$authorid;date])**]
$addfield[Emoji Sayısı;$emojiCount **(f!emojiler)**]
$addfield[Rol Sayısı;$roleCount **(f!roller)**]
$addfield[Üye Sayısı [$membersCount];$get[üye]]
$addfield[Kanal Sayısı [$channelCount];$get[kanal]]
$addfield[Sunucu Sahibi;$usertag[$ownerid] | <@$ownerid> | $ownerid]
$addfield[Sunucu;$serverName | $guildID]
$color[RANDOM]
$thumbnail[$servericon]
$footer[Bilgilenen $username;$authoravatar]

$let[üye;$customemoji[fiyu_online] $membersCount[$guildID;online;yes]
$customemoji[fiyu_idle] $membersCount[$guildID;idle;yes]
$customemoji[fiyu_dnd] $membersCount[$guildID;dnd;yes]
$customemoji[fiyu_offline] $membersCount[$guildID;offline;yes]]

$let[kanal;$customemoji[fiyu_kategori] $channelcount[category]
$customemoji[fiyu_yazi] $channelcount[text]
$customemoji[fiyu_ses] $channelcount[voice]
$replaceText[Diğer $channelcount[news];Diğer 0;]]

$let[sw;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildid;time];year;Yıl;-1];month;Ay;-1];week;Hafta;-1];day;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye;-1];s;;-1]]

$let[skatıl;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$authorid;time];year;Yıl;-1];month;Ay;-1];week;Hafta;-1];day;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye;-1];s;;-1]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]

`
}