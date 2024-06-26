const hiragana = [
	["あ", "a" ],["い", "i"  ],["う", "u"  ],["え", "e" ],["お", "o" ],
/*k*/["か", "ka"],["き", "ki" ],["く", "ku" ],["け", "ke"],["こ", "ko"],
/*s*/["さ", "sa"],["し", "shi"],["す", "su" ],["せ", "se"],["そ", "so"],
/*t*/["た", "ta"],["ち", "chi"],["つ", "tsu"],["て", "te"],["と", "to"],
/*n*/["な", "na"],["に", "ni" ],["ぬ", "nu" ],["ね", "ne"],["の", "no"],
/*h*/["は", "ha"],["ひ", "hi" ],["ふ", "fu" ],["へ", "he"],["ほ", "ho"],
/*m*/["ま", "ma"],["み", "mi" ],["む", "mu" ],["め", "me"],["も", "mo"],
/*y*/["や", "ya"],/*あ*/        ["ゆ", "yu" ],/*あ*/       ["よ", "yo"],
/*r*/["ら", "ra"],["り", "ri" ],["る", "ru" ],["れ", "re"],["ろ", "ro"],
/*w*/["わ", "wa"],["ゐ", "i", ],/*あ*/        ["ゑ", "e" ],["を", "o" ]]

const katakana = [
	["ア", "a" ],["イ", "i"  ],["ウ", "u"  ],["エ", "e" ],["オ", "o" ],
/*k*/["カ", "ka"],["キ", "ki" ],["ク", "ku" ],["ケ", "ke"],["コ", "ko"],
/*s*/["サ", "sa"],["シ", "shi"],["ス", "su" ],["セ", "se"],["ソ", "so"],
/*t*/["タ", "ta"],["チ", "chi"],["ツ", "tsu"],["テ", "te"],["ト", "to"],
/*n*/["ナ", "na"],["ニ", "ni" ],["ヌ", "nu" ],["ネ", "ne"],["ノ", "no"],
/*h*/["ハ", "ha"],["ヒ", "hi" ],["フ", "fu" ],["ヘ", "he"],["ホ", "ho"],
/*m*/["マ", "ma"],["ミ", "mi" ],["ム", "mu" ],["メ", "me"],["モ", "mo"],
/*y*/["ヤ", "ya"],/*ア*/        ["ユ", "yu" ],/*ア*/       ["ヨ", "yo"],
/*r*/["ラ", "ra"],["リ", "ri" ],["ル", "ru" ],["レ", "re"],["ロ", "ro"],
/*w*/["ワ", "wa"],["ヰ", "i"  ],/*ア*/        ["ヱ", "e" ],["ヲ", "o" ]]

const xokiinrimana = [
	["ᐯ","po"],["ᐰ","poo"],["ᐱ","pi"],["ᐲ","pii"],["ᐳ","pu"],["ᐴ","puu"],["ᐸ","pa"],["ᐹ","paa"],["ᑉ","p"],["‘ᑉ","ph","p'"],
	["ᑌ","to"],["ᑍ","too"],["ᑎ","ti"],["ᑏ","tii"],["ᑐ","tu"],["ᑑ","tuu"],["ᑕ","ta"],["ᑖ","taa"],["ᑦ","t"],["‘ᑦ","th","t'"],
	["ᓓ","do"],["ᓔ","doo"],["ᓕ","di"],["ᓖ","dii"],["ᓗ","du"],["ᓘ","duu"],["ᓚ","da"],["ᓛ","daa"],["ᓪ","d"],
	["ᑫ","ko"],["ᑬ","koo"],["ᑭ","ki"],["ᑮ","kii"],["ᑯ","ku"],["ᑰ","kuu"],["ᑲ","ka"],["ᑳ","kaa"],["ᒃ","k"],["‘ᒃ","kh","k'"],
	["ᒉ","go"],["ᒊ","goo"],["ᒋ","gi"],["ᒌ","gii"],["ᒍ","gu"],["ᒎ","guu"],["ᒐ","ga"],["ᒑ","gaa"],["ᒡ","g"],
	["ᖁ","qo"],["ᕾ","qoo"],["ᕿ","qi"],["ᖀ","qii"],["ᖁ","qu"],["ᖂ","quu"],["ᖃ","qa"],["ᖄ","qaa"],["ᖅ","q"],
	["ᕂ","ro"],["ᕃ","roo"],["ᕆ","ri"],["ᕇ","rii"],["ᕈ","ru"],["ᕉ","ruu"],["ᕋ","ra"],["ᕌ","raa"],["ᕐ","r"],
	["ᕓ","fo"],["ᕔ","foo"],["ᕕ","fi"],["ᕖ","fii"],["ᕗ","fu"],["ᕘ","fuu"],["ᕙ","fa"],["ᕚ","faa"],["ᕝ","f"],
	["ᓭ","co"],["ᓮ","coo"],["ᓯ","ci"],["ᓰ","cii"],["ᓱ","cu"],["ᓲ","cuu"],["ᓴ","ca"],["ᓵ","caa"],["ᔅ","c"],
	["ᔦ","xo"],["ᔧ","xoo"],["ᔨ","xi"],["ᔩ","xii"],["ᔪ","xu"],["ᔫ","xuu"],["ᔭ","xa"],["ᔮ","xaa"],["ᔾ","x"],
	["ᖠ","li","lhi"],["ᖡ","lii","lhii"],["ᖢ","lu","lhu"],["ᖣ","luu","lhuu"],["ᖤ","la","lha"],["ᖥ","laa","lhaa"],
	["ᒣ","mo"],["ᒻᒤ","mmoo"],["ᒥ","mi"],["ᒻᒦ","mmii"],["ᒧ","mu"],["ᒻᒨ","mmuu"],["ᒪ","ma"],["ᒻᒫ","mmaa"],["ᒻ","m"],
	["ᓀ","no"],["ᓐᓁ","nnoo"],["ᓂ","ni"],["ᓐᓃ","nnii"],["ᓄ","nu"],["ᓐᓅ","nnuu"],["ᓇ","na"],["ᓐᓈ","nnaa"],["ᓐ","n"],
	["ᙰ","bo","ngo"],["ᖖᒊ","bboo","nngoo"],["ᖏ","bi","ngi"],["ᙶ","bbii","nngii"],["ᖑ","bu","ngu"],["ᙴ","bbuu","nnguu"],["ᖓ","ba","nga"],["ᙶ","bbaa","nngaa"],["ᖕ","b","ng"],
	["ᑦᓭ","tco"],["ᑦᓮ","tcoo"],["ᑦᓯ","tci"],["ᑦᓰ","tcii"],["ᑦᓱ","tcu"],["ᑦᓲ","tcuu"],["ᑦᓴ","tca"],["ᑦᓵ","tcaa"],["ᑦᔅ","tc"]]

const cyrillic = [
	["",""]
]




window.kanaTables = [
	{
		name: "Hiragana",
		table: hiragana,
		language: "Japanese",
		padding: "0"
	},
	{
		name: "Katakana",
		table: katakana,
		language: "Japanese",
		padding: "0"
	},
	{
		name: "Xokiinrimana",
		table: xokiinrimana,
		language: "!Tlkara (conlang)",
		padding: ".2em" // because they don't all fit inside their bounding box  
	}
]