exports.menu = (pushname, sender, prefix, publik, offline, ucapanWaktu, wib, wita, wit, premi, latensii, totalgrouppp, totalkontakkk, totalchattt, Xcode7) => {
return`${ucapanWaktu} ${pushname}

🔖 _Creator_ : @${Xcode7.split("@")[0]}
🔖 _Hit Today_ : ${hit_today.length} 𝑯𝒊𝒕
🔖 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
🔖 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
🔖 _Prefix_ : 「 𝑴𝒖𝒍𝒕𝒊𝑷𝒓𝒆𝒇𝒊𝒙 」
🔖 _Mode_ : ${publik ? '𝑺𝑬𝑳𝑭' : '𝑷𝑼𝑩𝑳𝑰𝑪'}
🔖 _Status_ : ${offline ? '𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '𝑶𝑵𝑳𝑰𝑵𝑬'}
🔖 _User_ : ${premi}
🔖 _Group Chats_ : ${totalgrouppp.length}
🔖 _Private Chats_ : ${totalkontakkk.length}
🔖 _Total Chats_ : ${totalchattt.length}
🔖 _Speed_ : ${latensii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔

*</INFO TIME>*
🔖 _${wib}_ 𝙒𝙄𝘽
🔖 _${wita}_ 𝙒𝙄𝙏𝘼
🔖 _${wit}_ 𝙒𝙄𝙏

┌───「 LIST MENU 」
│
├${prefix}mood
├${prefix}wibumenu
├${prefix}virusmenu
├${prefix}ownermenu
├${prefix}downloadmenu
├${prefix}makermenu
├${prefix}groupmenu
├${prefix}othermenu
│
└─「ᴹᴿ᭄ғᴀᴊᴀʀXcode7」
`
}