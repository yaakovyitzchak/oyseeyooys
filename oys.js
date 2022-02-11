//B"H
var oyss = (new function() {
		
		var voyls = {
				'ֻ':"oo",
				'ָ':"uh",
				"ָ":"uh",
				'ַ':"aw",
				'ֶ':"eh",
				'ֵ':"ay",
				'ִ':"ee",
				'ֳ':"uh",
				'ֲ':"aw",
				'ֱ':"eh",
				'ְ':"ih",
				'ֹ':"o"
			},
			voylsInOrder = Object.keys(voyls),
			englishVowels = [
				"kooboots",
				"kuhmuhts",
				"pawtawch",
				"sehguhl",
				"tsayray",
				"cheereek",
				"chawtawf_kuhmuts",
				"chawtawf_pawtawch",
				"chawtawf_sehguhl",
				"shivaw",
				"choluhm"
			],
			
			e2hv = Object.fromEntries(
				voylsInOrder.map((x,i) => [
					englishVowels[i],x
				])
			),
			
			aytsh = [
				'ְ','ֱ',
				'ֳ','ָ','ֶ'
			],
			needUp = [
				
			],
			aytshEng = [
				"uh", "eh", "ih"
			],
			letors = {
				"א":"",
				"ב":"v",
				"ג":"g",
				"ד":"d",
				"ה":"h",
				"ו":"v",
				"ז":"z",
				"ח":"ch",
				"ט":"t",
				"י":"y",
				"כ":"ch",
				"ל":"l",
				"מ":"m",
				"נ":"n",
				"ס":"s",
				"ע":"",
				"פ":"f",
				"צ":"ts",
				"ק":"k",
				"ר":"r",
				"ש":"sh",
				"ת":"s",
				"ך":"ch",
				"ם":"m",
				"ן":"n",
				"ף":"f",
				"ץ":"ts"
			},
			otherMarks = [
				'֤', 
				'֙',  
				'֔', 
				'֛', 
				'ֽ', 
				'֥', 
				'֖', 
				'֣', 
				'֑',
				'ׁ',
				'ׂ',
				'֗', 
				'֨', 
				'֩', 
				'֜', 
				'֚', 
				'֕',
				'֧',
				'֠', 
				'֞', 
				'֘', 
				'֒',
			],
			other=[
				'’',
				'—',
				'-',
				'|',
				'…',
				'‘',
				'־',
			],
			onlyLetters = Object.keys(letors),
			
			dag = 'ּ',
			notDoubleable = [
				"y", "h"
			],
			dawgisht = {
				"ב":"b",
				"ו":"oo",
				"כ":"k",
				"פ":"p",
				"ת":"t",
				"ך":"ck",
				"ף":"p"	
			},
			choy = 'ֹ',
			choyluhmd = {
				"ו":"o"	
			},
			onlyVowels = Object.keys(voyls)
				.concat(choy),
			allNekoodos = onlyVowels.concat(
				otherMarks, dag	
			)
			oys = allNekoodos,
			
			actshual = oys,
			prefix = [
				[
					[
						"ל",
						'ְ'
					], 
					
					"to"
				],
				[
					[
						"ל",
						'ַ'
					],
				
					"to the",
				],
				[
				
					[
						"ל",
						'ֲ'
					],
					
					"to the"
				],
				
				
				[
				
					[
						"מ",
						'ֲ'
					],
					
					"from the"
				],
				[
				
					[
						"מ",
						'ֲ'
					],
					
					"from the"
				],
				
				
				[
				
					[
						"מ",
						'ִ'
					],
					
					"from"
				],
					
				[
				
					[
						"ב",
						'ֲ'
					],
					
					"in the"
				],
				
				[
				
					[
						"ב",
						'ַ'
					],
					
					"in the"
				],
				
				[
				
					[
						"ב",
						'ְ'
					],
					
					"in"
				],
				
				[
				
					[
						"כ",
						'ְ'
					],
					
					"like"
				],
				
				
				[
				
					[
						"כ",
						'ַ'
					],
					
					"like the"
				],
				
				
				[
				
					[
						"כ",
						'ֲ'
					],
					
					"like the"
				],
				
				
				[
				
					[
						"ו"
					],
					
					"and"
				],
				
				
				[
				
					[
						"ה",
						'ָ'
					],
					
					"the"
				],
				
				
				[
				
					[
						"ה",
						'ַ'
					],
					
					"the"
				]
				,
				
				
				[
				
					[
						"ש",
						'ׁ',
						'ֶ'
					],
					
					"that"
				]
				/*my through is 
				dry its hard to 
				talk a lot*/
				
				
				/* wat is th efoundaiton
				of chassidus from which 
				all chassidus stems out
				from?
				
				that the creation
				is from the awtsmoos,
				and that it happens
				every instant
				
				
				how can you know this 
				and remeber all the time 
				even when your not
				learning torah?
				
				seekrit*/
				
				
				
				
				
			],
			three = {
				"ש"	:true
			}
		var slf = this
		this.allNekoodos = allNekoodos;
		this.onlyVowels = onlyVowels
		this.onlyLetters = onlyLetters
		function makeSoundFromOys(mits) {
			return new Koyl(mits)
			
			
			
		//	return phoyn
		}
		
		function Koyl(dayTuh) {
			var cnst = dayTuh.cnst || dayTuh.cn ||
					dayTuh.constinent
			if(cnst) {
				this.kawsheh = cnst	
			}
			var vwl = dayTuh.vowel || dayTuh.vwl
			if(vwl) {
				this.vowel = vwl	
			}
			
			var mits = dayTuh
			
			var leto=mits.letter || mits.oys
			var snd = ""
			var voyl = mits.vowel
			if(leto) {
				
				var dawg = dawgisht[leto]
				if(mits.dagesh && dawg) {
					
					this.kawsheh = dawg	
					
				} else {
					this.kawsheh = letors[leto]	
				}
				
				var ch = choyluhmd[leto]
				if(
					ch &&
					voyl == choy
				) {
					this.kawsheh = ""
					this.vowel = ch
				}
			}
			
			
			
			if(voyl && voyls[voyl]) {
				this.vowel = voyls[voyl]
			}
			
			this.koylify = () => {
				this.roowawch = (
					(this.kawsheh || "") + 
					(this.vowel || "")
					
				)
			}
			this.koylify()
		}
		this.Koyl = this.kyl = Koyl
	
		function Deeboyr() {
			var a = [...arguments]
			
			/*args.forEach((x,i)=> {
				this[i] = x
			})
			this.length = args.length
			var ob = Array.from(this)*/
			
			
			a.koylify = () =>
				a
				.filter(x=>
					x.koyl.roowawch		
				)
				.map((y,i,a) => (
					(
						i > 0 &&
						(
							aytshEng
							.includes(
								a[i - 1].koyl.vowel
							) 
						)
						&& !y.koyl.kawsheh
					) ? "-" + capFrst(
						y.koyl.roowawch	
					) : (
							i > 0 &&
							y.koyl.kawsheh &&
						
							y.koyl.kawsheh[0]
							.toLowerCase() ==
							y.koyl.kawsheh[0] &&
						
							notDoubleable.includes(
								y.koyl.kawsheh[0]
							) 
							&&
							a[i - 1].koyl.roowawch[
								a[i - 1]
								.koyl
								.roowawch.length - 1
							] == 
								y.koyl.kawsheh[0]
								?
								/*y.koyl.roowawch
								.length > 1 ?*/
								"-" + capFrst(
									y.koyl.kawsheh)
								//	: ""	
							
							+ 
							(y.koyl.vowel||"")
							: y.koyl.roowawch
						)
					
				))
				.join("")
			return a
		}
		
		this.Deeboyr = this.db = Deeboyr
		this.makeSoundFromOys = this.msfo = 
			makeSoundFromOys
		//translator automatically
		this.targoom
			/*means translation*/
			= function(h="") {
			var spl = h.split(" ")
				/*.map(y=>
					y
					.split("")
					.filter(x=> x!= 'ֹ' )
					.join("")
				)*/
			console.log(spl)
			var f = prefix
			var rez = []
			spl.forEach(x => {
				var check = 2;
				
				if(three[x[0]])
					check = 3
				
				var firstTwo = x.substring(0,check)
				var preef
				if(firstTwo.length > 1) {
					preef = getWhatPrefixItIsIfAny(
						firstTwo, x	
					)
					
				}
				console.log(preef,x)
				if(preef) {
					
					var rest = x.substring(check,
										   x.length)
					console.log("LOL!",rest,check)
					var koyl = slf.koylify(rest)
					
					
					rez.push(preef)
					rez.push(koyl)
				} else {
					console.log(x)
					rez.push(slf.koylify(x))
				}
			})
			return rez.join(" ")
		}
		
		
	
		this.oys = oys
		function Dawvawr(input="") {
			var shtickles = []
			
			
			
			var firstRoundRemovedCommasSpacesEtc = ""
			input.split("").forEach(x => {
				if(!oys.includes(x))
					x = " "
				firstRoundRemovedCommasSpacesEtc+=x
			})
			
			removeExtras(firstRoundRemovedCommasSpacesEtc, " ")
			shtickles = 
				firstRoundRemovedCommasSpacesEtc
				.split(" ")
				.filter(x=>x)
			
			console.log(po=shtickles)
			this.shtickles = shtickles
			var computedShtickles = shtickles.map(x=>cmp(x))
			
			this.computedShtickles = this.cs = computedShtickles
			
			
			
			
		}
		this.Dawvawr = this.Dawvar = this.Davar = Dawvawr
		this.computeShtickle = this.cmp = cmp
		this.dawgesh = this.dag = this.dagish = this.dagesh
		= dag
		function cmp(sht = "") {
			sht = sht.trim()
			if(sht[sht.length -1] != "")
				sht += " "
			var letters = []
			var i
			var curLetter = ""
			var curOys = new OysMitseeyoos()
			var curWord = Deeboyr()
			for(i = 0; i < sht.length; i++) {
				 if(sht[i] == dag) {
					curOys.dagesh = true
				} else
				if(onlyLetters.includes(sht[i])) {
					if(curLetter) {
						curWord.push(curOys)
						curOys.koylify()
						curOys = new OysMitseeyoos()
					} 
					curLetter = sht[i]
					
					curOys.oys = curLetter

				} else if(sht[i] == "ׂ") {
					curOys.lefty = true
				} else if(sht[i] == "ׁ") {
					curOys.righty = true
				} else if(allNekoodos.includes(sht[i])) {
					curOys.vowel = sht[i]	

				} else if(
					curWord.length > 0
				) {
					curWord.push(curOys)
					curOys.koylify()
					
					curOys = new OysMitseeyoos()
					if(curWord.length > 0)
						letters.push(curWord)
					curWord = Deeboyr()
					curLetter = ""
				}
				
				if(i == sht.length - 1) {
					if(onlyLetters.includes(sht[i])) {
						if(curLetter) {
						curWord.push(curOys)
						curOys.koylify()
						}
					}
					if(curWord.length > 0) {
						letters.push(curWord)
					}
				}

				
				
				
			
			}
			
			//contextify
			
			var lk;
			for(lk = 0; lk < letters.length; lk++) {
				var letr = letters[lk]
				var i;
				for(i = 0; i < letr.length; i++) {
					var w = letr[i]
					var ar = letr;
					
					if(w.oys == "י") {
						if(!w.vowel) {
							if(i != letr.length -1)
								w.koyl.roowawch = ""
						}
					} else
					if(w.oys == "ח") {
						if(i == letr.length -1) 
							if(w.vowel == "ַ" ||
							w.vowel == "ֲ") {
							
								w.koyl.roowawch = "awch"
							}
								
					} else
					
					if(w.oys == "ש") {
						if(w.lefty) {
							w.koyl.kawsheh = "s"
							
							w.koyl.roowawch =
							w.koyl.kawsheh + 
							(w.koyl.vowel||"")
							
						}
					} else
					if(w.oys == "ה") {
						if(i == letr.length -1) {
							if(!w.vowel)
								w.koyl.roowawch = ""
						}
					} else
					if(w.oys == "ו") {
						if(
							w.vowel == "ֹ" || 
							w.vowel == "ּ" ||
							w.dagesh
						) {
							
							if(i > 0) {
								var c = ar[i - 1]
							//	console.log("What are u",c,!!c.vowel)
								if(!!c.vowel) {
						//			console.log("kk",letr[i].koyl)
									letr[i].koyl.kawsheh = "v"
									w.koyl.vowel = vowelToSound(w.vowel)
									letr[i].koyl.roowawch = 
										w.koyl.kawsheh + 
										(w.koyl.vowel)
						//			console.log("kk",letr[i].koyl)
								}
							}
						}
					} else {
						w.koyl.vowel = 
							vowelToSound(w.vowel)
						w.koyl.roowawch = 
							w.koyl.kawsheh + 
							(w.koyl.vowel)
					}
					
					if(w.vowel == "ְ") {
						if(i == letr.length - 1) {
							w.koyl.vowel = ""
							w.koyl.roowawch = w.koyl.kawsheh
						}
					}
					
				}
			}

			return letters

		}
		
		function vowelToSound(v) {
			if(!v) return ""
			if(Object.keys(voyls).includes(v))
				return voyls[v]
			else return ""
		}
		
		function OysMitseeyoos(wrd) {
			if(!wrd) wrd = {}
			if(wrd.letter) {
				var lt = wrd.letter.toLowerCase()
				var engl = e2h[lt]
				var heeb = lettersInOrder[lt]
				if(engl) {
					this.letter = engl
				} else if(heeb) {
					this.letter = heeb	
				}
			}
			
			this.dagesh = !!(wrd.dagesh || wrd.dawgesh ||
				wrd.dawgish)
			
			if(wrd.vowel) {
				var vwl = wrd.vowel.toLowerCase()
				var ev = e2hv[vwl]
				if(ev) {
					this.vowel = ev	
				} else if(voylsInOrder.includes(vwl)) {
					this.vowel = vwl	
				}
			}
			var slf = this
			this.koylify = () => (
				slf.koyl = makeSoundFromOys(slf)
			)
		}
	
		function removeDuplicates(arAy) {
			var things = {}
			arAy.forEach(x=> {
				if(!things[x]) {
					things[x] = 1	
				}
			})
			return Object.keys(things)
		}
		this.removeDuplicates = removeDuplicates
	
		function removeExtras(fullString, ext) {
			var rz = []
			var count = 0
			var shouldAdd = false
			fullString.split("").forEach(x => {
				shouldAdd = true
				if(x == ext) {
					count++
					if(count > 1) {
						shouldAdd = false

					}
				} else count = 0
				if(shouldAdd) rz.push(x)

			})
			return rz.join("")
		}
	
		function nikoodify(wrd = "") {
			var s  = wrd.split("")
			var rz = []
			var i,cr
			for(i = 0; i < s.length;i++){
				cr = s[i]
			}

		}
				/*depends
				for davening hashem understands
				all languages
				
				and learning has to be understood
				
				bu its still good to know hebrew for chassidus
				etc 
				*/
		
		this.getWhatPrefixItIsIfAny = 
			getWhatPrefixItIsIfAny
		function getWhatPrefixItIsIfAny(letter="", wholeWord="") {
			var meaningOfPrefix = ""
			
			var i;
			/*
				trying to find what hebrew 
				letter exists in dictionary of
				prefixes, and if it does, then 
				extract the meaning and return it
				
				length means we go from 0 to the end to
				look to see if the current "letter" [hebrew]
				exists in the dictionary
				
				scanning the prefix dictionary for 
				a potential letter to see if its a prefix
				
				numbers represent what prefix it is,
				which is itself made up of another array
				that includes he vowels of the letters
				because the vowels could determine if its a 
				prefix or not, especially in cases of the hay
			*/
			if(wholeWord.length > 2) {
			for(i = 0; i < prefix.length; i++) {
				var p = prefix[i]
				if(p[0][0] == letter[0]) {
					if(p[0][2]) {
						if(
							p[0][1] ==
							letter[1] &&
							p[0][2] ==
							letter[2]
						) {
							meaningOfPrefix = p[1]
							break;	
						}
							
					} else
					if(p[0][1]){
					if(
					   p[0][1] == letter[1]
					) {
						//has vowel and is prefix
						meaningOfPrefix = p[1]
						break;
							/*
								p[1] is the english
								meaning of the hebrew letter,
								which is p[0]
								
								one set of p[0] and p[1]
								for each prefix
								
								goes through each to see if it is
							*/
					}
					/*same level a satsmoos, but in 
					actual as opposed to potential*/
					}
					else {
						meaningOfPrefix = p[1]
						break;
					}
				}
			}
			}
			
			return meaningOfPrefix
		}
		
		this.koylify = function(wrd) {
			var sht = cmp(wrd)
			okk=sht
			return sht
				.map(deeboyr=> 
				deeboyr.koylify()
			).join(" ")
		}
		
		function capFrst(vw) {
			return (
				vw.length > 1 ? 
				vw[0].toUpperCase() +
				vw.substr(1) : vw.toUpperCase()
			)
		}
		var gematriaMap = {
			1: "א",
			2: "ב",
			3: "ג",
			4: "ד",
			5: "ה",
			6: "ו",
			7: "ז",
			8: "ח",
			9: "ט",
			10: "י",
			20: "כ",
			30: "ל",
			40: "מ",
			50: "נ",
			60: "ס",
			70: "ע",
			80: "פ",
			90: "צ",
			100: "ק",
			200: "ר",
			300: "ש",
			400: "ת",
			500: "ך",
			600: "ם",
			700: "ן",
			800: "ף",
			900: "ץ"
		},
			lettersInOrder = Object.values(gematriaMap),
			numbs = [
				1488,
				1489,
				1490,
				1491,
				1492,
				1493,
				1494,
				1495,
				1496,
				1497,
				1499,
				1498,
				1500,
				1502,
				1501,
				1504,
				1503,
				1505,
				1506,
				1508,
				1507,
				1510,
				1509,
				1511,
				1512,
				1513,
				1514,
				1456,
				1457,
				1458,
				1459,
				1460,
				1461,
				1462,
				1463,
				1464,
				1465,
				1466,
				1467,
				1468,
				1469
			],
			eng = [
				"Aleph",
				"Bays",
				"Gimel",
				"Dawles",
				"Hey",
				"Vuhv",
				"Zaweeyin",
				"Ches",
				"Tes",
				"Yood",
				"Chawf",

				"Lamed",
				"Mem",

				"Noon",

				"Sawmech",
				"Aweeyin",
				"Pay",

				"Tzawdeek",

				"Koof",
				"Raysh",
				"Shin",
				"Suhf",
				"Final_Chawf",
				"Final_Mem",
				"Final_Noon",
				"Final_Pay",
				"Final_Tzadeek"


			],
			e2h = Object.fromEntries(
				eng.map((x,i)=> ([
					x.toLowerCase(), lettersInOrder[i]
				])
			))
		this.OysMitseeyoos = this.OM = OysMitseeyoos
		this.gematriaMap = gematriaMap
		this.lettersInOrder = lettersInOrder
		this.engToHebMap = this.englishToHebrewMap =
			this.e2h = e2h
		this.engToHebVowelMap = this.englishToHebrewVowelsMap =
			this.e2hv = e2hv
	
		var isEnglish = false
		if(oys[0].charCodeAt(0) !== 1488){
			isEnglish = true
			actshual = eng.join("$")
			var maftaychos = Object.keys(gematriaMap)
			gematriaMap = Object.fromEntries(
				eng.map((e, i) => (
					[
						maftaychos[i],
						eng[i]
					]
				))
			)
		}
		this.gematria = nm => {
			if(typeof(nm) == "number") {
				return (function numberificly(nm) {
					var noom = nm.toString();
					var places = [], i, k,
						digits = "1234567890",
						full = "",
						finished = 0
					for(i = 0; i < noom.length; i++) {
						full = ""
						var restOfLength = noom.length - i;
						for(k = 0; k < restOfLength - 1; k++) {
							full += 0
						}
						full = noom[i] + full
						finished = parseInt(full)

						places.push(finished)

					}
					places = places.map(y => {
						var x = y;
						if(x > 900) {
							var cur = x;
							var arr = []
							for(i = x; i >= 0; i--) {
								var it = x - 900
								if(it >= 0) {
									arr.push(900)
									x = it
								} else {
									arr.push(numberificly(x))
									break
								}



							}
							return arr.flat()
						}
						return x
					})
					return places.flat().filter(x => x)
				})(nm).map(x => (
					gematriaMap[x]
				)).join(
					isEnglish ? "$" 
					: ""
				)

			} else if(typeof(nm) == "string") {
				var list = actshual.split(
					isEnglish ? "$" :
					""
				)
				var words = nm.split(" ")
				var lettersInWords = words.map(w => (
					w.split(
						isEnglish ? "$" :
						""
					)
				))//.filter(x => x)
				var keys = Object.keys(gematriaMap),
					vals = Object.values(gematriaMap)
				var numbersFromLetters = lettersInWords.map((y) => 
															y.map(x => 
																  (vals.includes(x)) ? 
																  keys[vals.indexOf(x)]
																  : ""
																 ).join(".")
														   ).join(" ")//.filter(x => x)
//9294058690
				return numbersFromLetters
			}
		}

		this.toString = () => 
		actshual
	})
