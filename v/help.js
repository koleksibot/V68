exports.menu = (pushname, sender, prefix, publik, offline, ucapanWaktu, wib, wita, wit, premi, latensii, totalgrouppp, totalkontakkk, totalchattt, Xcode7) => {
return`${ucapanWaktu} ${pushname}

๐ _Creator_ : @${Xcode7.split("@")[0]}
๐ _Hit Today_ : ${hit_today.length} ๐ฏ๐๐
๐ _Lib_ : ๐ฉ๐๐๐๐๐๐
๐ _Type_ : ๐ต๐๐๐๐ฑ๐
๐ _Prefix_ : ใ ๐ด๐๐๐๐๐ท๐๐๐๐๐ ใ
๐ _Mode_ : ${publik ? '๐บ๐ฌ๐ณ๐ญ' : '๐ท๐ผ๐ฉ๐ณ๐ฐ๐ช'}
๐ _Status_ : ${offline ? '๐ถ๐ญ๐ญ๐ณ๐ฐ๐ต๐ฌ' : '๐ถ๐ต๐ณ๐ฐ๐ต๐ฌ'}
๐ _User_ : ${premi}
๐ _Group Chats_ : ${totalgrouppp.length}
๐ _Private Chats_ : ${totalkontakkk.length}
๐ _Total Chats_ : ${totalchattt.length}
๐ _Speed_ : ${latensii.toFixed(4)} ๐บ๐๐๐๐๐๐

*</INFO TIME>*
๐ _${wib}_ ๐๐๐ฝ
๐ _${wita}_ ๐๐๐๐ผ
๐ _${wit}_ ๐๐๐

โโโโใ LIST MENU ใ
โ
โ${prefix}mood
โ${prefix}wibumenu
โ${prefix}virusmenu
โ${prefix}ownermenu
โ${prefix}downloadmenu
โ${prefix}makermenu
โ${prefix}groupmenu
โ${prefix}othermenu
โ
โโใแดนแดฟแญาแดแดแดสXcode7ใ
`
}