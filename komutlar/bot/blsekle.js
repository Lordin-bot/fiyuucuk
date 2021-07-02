module.exports = {
  name: "bls",
  code: `
$if[$nomentionmessage[1]==çıkar]
$setservervar[bls;h;$message[2]]
**$servername[$message[2]]** Sunucusu Karalisteden Çıkarıldı

$elseif[$nomentionmessage[1]==ekle]
$setservervar[bls;$replaceText[$message;$message[1] $message[2];;];$message[2]]
$channelsendmessage[847969360042786886;**$servername[$message[2]]** Sunucusu**$replaceText[$message;$message[1] $message[2];;]** Sebebinden Kara Listeye Eklendi]
$endelseif
$endif

$onlyforids[$botownerid;Sen redent deilsin lan]
`
}