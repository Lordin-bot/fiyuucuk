module.exports = {
  name: "yenilikler",
  aliases: ["changelog","güncellemeler","güncelleme"],
  code: `
$if[$message[1]==v1.0]
$title[Fiyu v1.0 (Yeni Sürüm v1.1);https://dc.fiyu.tk]
$description[**\`f!hgbb\` Eklendi**]
$addfield[Örnek;**f!hgbb <#$randomchannelid>**]
$addfield[Kullanım;**f!hgbb <#kanal>**]
$color[BLUE]
$footer[Bilgilenen $username;$authoravatar]
$thumbnail[$client[avatar]]

$elseif[$message[1]==v1.1]
$title[Fiyu v1.1;https://dc.fiyu.tk]
$description[**- \`f!sayaç\` Eklendi \n- \`f!nuke\` Eklendi**]
$addfield[Örnek;**f!sayaç $random[$memberscount;$sum[$memberscount;50]] <#$randomchannelid>**]
$addfield[Kullanım;**f!sayaç <hedef> <#kanal> \nf!sayaç kapat**]
$color[BLUE]
$footer[Bilgilenen $username;$authoravatar]
$thumbnail[$client[avatar]]
$endelseif
$endif

$onlyif[$checkcontains[$message[1];v1.0;v1.1]!=false;$customemoji[red_gif] **Bir Sürüm Girmelisin! Örnek. \`f!yenilikler $randomtext[v1.0;v1.1]\`**{delete:10s}]
`
}