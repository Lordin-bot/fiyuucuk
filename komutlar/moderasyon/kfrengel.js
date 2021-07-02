module.exports = [{
  name: "küfürengel",
  aliases: ["küfür-engel","küfür-engel","küfürengel"],
  code: `
$if[$nomentionmessage==aç]
$customEmoji[onay_gif] **Küfür Engel Sistemi Aktif Edildi.**


$setservervar[küfürengel;açık]
$onlyif[$getservervar[küfürengel]!=açık;$customemoji[red_gif] **Küfür Engel Sistemi Zaten Açık. Kapatmak İçin \`f!küfürengel kapat\` Yazabilirsin** {delete:5s}]
$elseIf[$nomentionmessage==kapat]
$customemoji[onay_gif] **Küfür Engel Sistemi Kapatıldı.**


$setservervar[küfürengel;kapalı]
$onlyif[$getservervar[küfürengel]!=kapalı;$customemoji[red_gif] **Küfür Engel Sistemi Zaten Kapalı. Kapatmak İçin \`f!küfürengel kapat\` Yazabilirsin** {delete:5s}]
$endelseif
$endif

$onlyif[$checkcontains[$nomentionmessage;aç;kapat]!=false;$customemoji[red_gif] **\`f!küfürengel aç\` Veya \`f!küfürengel kapat\` Yazmalısın.** {delete:10s}]
$onlyPerms[admin;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın {delete:5s}]
$onlyif[$getglobaluservar[blk]==h;**$getglobaluservar[blk]** Sebebinden **Kara Liste**desin]
$onlyif[$getservervar[bls]==h;Bu Sunucu **$getservervar[bls]** Sebebinden **Kara Liste**de]
`
},{
  name: "$alwaysExecute",
  code: `$customemoji[red_gif] **<@$authorID>, $randomText[Burada Küfür Edemezsin!;Ayıp Be Kardeşim Niye Küfür Ediyorsun.]**
$deletecommand
$deleteIn[10s]
$onlyif[$checkcontains[$toLowercase[$replaceText[$message; ;]];amk;aq;yarrak;yarak;yaraq;yarraq;göt;orospu;orosbu;sikim;sikem;mal ;piç;puşt;pezevenk;siktir;sg;amcık;normie;salak;sikerim;sikeyim;siktim;porn;sex;seks;sikiş;sikis; oç;sik ]!=false;]
$onlyif[$hasanyperm[$authorid;ban;kick;manageserver;admin;manageroles;managechannels]!=true;]
$onlyif[$getservervar[küfürengel]==açık;]`
}]