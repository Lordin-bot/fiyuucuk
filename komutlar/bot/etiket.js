module.exports = {
  name: "<@821653023293964298>",
  aliases: ["<@!821653023293964298>"],
  code: `
$author[Beni Mi Etiketlendin?;$useravatar[$clientid]]
$description[Selam <@$authorid>, Bu Sunucuda Prefixim **\`$get[p]\`** Toplam **$serverCount** Sunucuda Bulunup **$allMembersCount** Kullanıcıya Hizmet Veriyorum :)]
$footer[Bilgilenen $username;$authoravatar]
$color[BLUE]
$thumbnail[$useravatar[$clientid]]

$let[p;$getservervar[prefix]]
`,
  nonPrefixed: true
}