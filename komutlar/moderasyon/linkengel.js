module.exports = [{
  name: "linkengel",
  aliases: ["reklam-engel","link-engel","reklamengel"],
  code: `
$if[$nomentionmessage==aç]
$customEmoji[onay_gif] **Link Engel Sistemi Aktif Edildi.**


$setservervar[linkengel;açık]
$onlyif[$getservervar[linkengel]!=açık;$customemoji[red_gif] **Link Engel Sistemi Zaten Açık. Kapatmak İçin \`f!linkengel kapat\` Yazabilirsin** {delete:5s}]
$elseIf[$nomentionmessage==kapat]
$customemoji[onay_gif] **Link Engel Sistemi Kapatıldı.**


$setservervar[linkengel;kapalı]
$onlyif[$getservervar[linkengel]!=kapalı;$customemoji[red_gif] **Link Engel Sistemi Zaten Kapalı. Kapatmak İçin \`f!linkengel kapat\` Yazabilirsin** {delete:5s}]
$endelseif
$endif

$onlyif[$checkcontains[$nomentionmessage;aç;kapat]!=false;$customemoji[red_gif] **\`f!linkengel aç\` Veya \`f!linkengel kapat\` Yazmalısın.** {delete:10s}]
$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
},{
  name: "$alwaysExecute",
  code: `$customEmoji[red_gif] **<@$authorID>, Burada Link Atamazsın!**
$deletecommand
$deleteIn[10s]
$onlyIf[$checkContains[$toLowercase[$replaceText[$message; ;];.gg;.com;.net;.org;.ml;.ga;.cf;.tk;https;http]]==true;]
$onlyIf[$hasAnyPerm[$authorID;ban;manageserver;admin;manageroles;managechannels]!=true;]
$onlyIf[$getservervar[linkengel]==açık;]`
}]