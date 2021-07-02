module.exports = {
  name: "kullanıcı-bilgi",
  aliases: ["profil","kullanıcıbilgi"],
  code: `
$author[Kullanıcı Bilgi;$useravatar[$finduser[$message[1]]]

$addfield[Discorda Katılma Tarihi;$get[dkatıl] Önce **($creationDate[$finduser[$message[1]];date])**]

$addfield[DM Açık Mı;$get[dm]]
$addfield[Oynuyor;$replaceText[$replaceText[$activity[$finduser[$message[1]]];Custom Status,;];none;Yok]]
$addfield[Durum;$get[durum]]
$addfield[Kullanıcı;$usertag[$finduser[$message[1]]] | <@$finduser[$message[1]]> | $finduser[$message[1]]]
$footer[Bilgilenen $username;$authoravatar]
$thumbnail[$useravatar[$finduser[$message[1]]]]
$color[RED]

$let[durum;$replacetext[$getcustomstatus[$finduser[$message[1]]];none;Yok]]
$let[dm;$replacetext[$replacetext[$isuserdmenabled[$finduser[$message[1]]];true;Açık];false;Kapalı]]

$let[dkatıl;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$finduser[$message[1]];time];year;Yıl;-1];month;Ay;-1];week;Hafta;-1];day;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye;-1];s;;-1]]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
}