const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const moment = require('moment-timezone')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.owner = (botname) =>{
	return`⚠︎Command Khusus Owner ${botname}⚠︎`
	}
exports.admin = (groupName) =>{
	return`⚠︎Command Khusus Admin ${groupName}⚠︎`
	}
exports.adminB = () =>{
	return`⚠︎Bot Bukan Admin⚠︎`
	}
exports.err = () =>{
	return`⚠︎Fitut Error Bangh⚠︎`
	}
exports.group = () =>{
	return`⚠︎Command Khusus Dalam Group⚠︎`
	}

exports.wait = () =>{
	return`➪Sedang Proses Bangh`
	}
exports.ok = () =>{
	return` Okh Done Bangh✈︎`
	}
exports.welcome = () =>{
	return`╭─⬣ Intro Bangh🗿
│  ֙Nama :
│   ֙Umur :
│   ֙Kelamin :
│   ֙Askot :
╰─⬣ _Patuhi Rules Bangh🗿`
      }
exports.leave = () =>{
	return`╭─⬣ Berkurang Beban🗿
│
╰─⬣ _Gausah Balik Pepeq🗿`
}
exports.status = (wa_version, mcc, mnc, os_version, device_manufacturer, device_model, runtime) =>{
return`╭─⬣ [ _MyDevice_ ]
│ *Whatsapp :* ${wa_version}
│ *RAM :* 4000MB
│ *MCC :* ${mcc}
│ *MNC :* ${mnc}
│ *Versi OS :* ${os_version}
│ *Merk HP :* ${device_manufacturer}
│ *Versi HP :* ${device_model}
╰─⬣  [ _SnapBotzz_ ]

⚠︎ *Runtime :* ${waktu(runtime)} ⚠︎ `
}
exports.menu = (prefix, salam,  pushname, readmore) =>{
	return`Hi Bangh ${pushname}, selamat ${salam}
${readmore}
╭─⬣ *About Bot and Owner*
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}status
│ • ${prefix}infobot
│ • ${prefix}scsnappy
│ • ${prefix}igsnappy
│
├ *Download*
│ • ${prefix}play [query] [Error]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url] [Error]
│ • ${prefix}ytmp4 [url] [Error]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│ • ${prefix}toimg [reply stiker]
│ • ${prefix}semoji 🗿  [Error]
│ • ${prefix}smeme [text] [Error]
│ • ${prefix}memegen [text|text2] [Error]
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│ 
├ *Education*
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│
├ *Info*
│ • ${prefix}owner
│
├ *Owner*
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│ • ${prefix}gift
│ • ${prefix}piltek
│ • ${prefix}runtime
│ • ${prefix}kickrakyat
│ • ${prefix}ping
│ • ${prefix}antilink
│ • ${prefix}shutdown
│ • >
│ • $
│ •  =>
│
├ *Group*
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}add +62xxxxx
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
│ • ${prefix}fitnah @tag|teks1|teks2
╰─⬣
`
	}