module.exports = {
  name: "blk",
  code: `
$if[$nomentionmessage[1]==çıkar]
$setglobaluservar[blk;h;$finduser[$message[2]]]
**$username[$finduser[$message[2]]]** Kullanıcısı Karalisteden Çıkarıldı

$elseif[$nomentionmessage[1]==ekle]
$setglobaluservar[blk;$replaceText[$message;$message[1] $message[2];;];$finduser[$message[2]]]
$channelsendmessage[847969360042786886;**$username[$finduser[$message[2]]]** Kullanıcı**$replaceText[$message;$message[1] $message[2];;]** Sebebinden Kara Listeye Eklendi]
$endelseif
$endif

$onlyforids[$botownerid;Sen redent deilsin lan]
`
}