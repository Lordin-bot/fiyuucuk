module.exports = {
  name: "avatar",
  aliases: ["pp"],
  code: `$if[$message!=sunucu]
$title[$username[$finduser[$message[1]]] Kişisinin Avatarı]
$description[**[png]($replaceText[$userAvatar[$finduser[$message[1]]];webp;png;-1]) | [jpg]($replaceText[$userAvatar[$finduser[$message[1]]];webp;jpg;-1]) | [webp]($userAvatar[$finduser[$message[1]]])**]
$image[$useravatar[$finduser[$message[1]]]
$footer[$usertag;$authoravatar]
$color[RANDOM]
$elseIf[$nomentionmessage==sunucu]
$title[$servername Sunucusunun İkonu]
$description[**[png]($replaceText[$servericon;webp;png;-1]?size=2048) | [jpg]($replaceText[$servericon;webp;jpg;-1]?size=2048) | [webp]($servericon?size=2048)**]
$image[$servericon?size=2048]
$footer[$usertag;$authoravatar]
$color[RANDOM]
$onlyif[$servericon!=null;$customemoji[red_gif] **Bu Sunucunun İkonu Yok**]
$endelseif
$endif
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]`
}