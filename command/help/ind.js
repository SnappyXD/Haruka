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
	return`Jangan Lupa Intro Bangh🗿~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Bangh🗿`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Kusantet Bangh🗿`
}
exports.menu = (prefix, salam,  pushname, oy) =>{
	return`Hi Bangh ${pushname}, selamat ${salam}
╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}haruka
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│
├ *Info*
│ • ${prefix}owner
│
├ *Owner*
│ • ${prefix}broadcast [text]
│ • ${prefix}leave
│ • >
│ • $
│ •  => 
│
├ *Group*
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
`
	}