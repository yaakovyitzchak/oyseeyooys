//B"H
var oyss = (new function() {
		
		var oys = "אבגדהוזחטיכךלמםנןסעפףצץקרשתְֱֲֳִֵֶַָֹֺֻּֽ",
			voyls = {
				'ֻ':"oo",
				'ָ':"uh",
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
			dag = 'ּ',
			dawgisht = {
				"ב":"b",
				"ו":"oo",
				"כ":"c",
				"פ":"p",
				"ת":"t",
				"ך":"ck",
				"ף":"p"	
			},
			choy = 'ֹ',
			choyluhmd = {
				"ו":"o"	
			},
			
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
						'ְ'
					],
					
					"from"
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
						firstTwo	
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
		function getWhatPrefixItIsIfAny(letter="") {
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
			
			return meaningOfPrefix
		}
		
		this.koylify = function(heeb="") {
			if(typeof(heeb) != "string")
				return "LOL what is this?"

			var splat = heeb.trim().split("")
			var reezAr = []
			var i
			var voylzz=[]
			var inda = 0
			var vi = 0
			var loyst=""
			for(i = 0; i < splat.length; i++) {
				var af, lst
				if(i < splat.length - 1)
					af = splat[i + 1]
				if(voylzz.length > 0 && vi > 0)
					lst = voylzz[vi - 1]
				
				if(reezAr.length > 0 && inda > 0)
					loyst = reezAr[inda - 1]
				
				var cr = splat[i]
				var lt = letors[splat[i]]
				var vw = voyls[splat[i]]
				
				if(lt) {
					if(af == dag) {
						if(dawgisht[splat[i]])
							lt=dawgisht[splat[i]]
					}
					if(af == choy) {
						if(choyluhmd[cr])
							lt = ""//choyluhmd[cr]
					}
					
					
					if(lt.length > 0) {
						vi++

						voylzz.push([lt,0])
					}
					reezAr.push(lt)
				}else
				if(vw) {
				
					vi++
					voylzz.push([vw,1])
					
					reezAr.push(vw)
				}
				else if(splat[i] == " ")
					reezAr.push(" ")
				
				if(reezAr.length > 1) {
					var last = reezAr[reezAr
									  .length- 2]
					if(aytshEng.includes(last)) {
						reezAr[reezAr.length-1] =
							capFrst(reezAr[
								reezAr.length - 1
							])
					}	
					
				}
				
			}
			console.log(voylzz, vw, vi, cr)
			return reezAr.join("")
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
				"Dales",
				"Hey",
				"Vuhv",
				"Zaeein",
				"Ches",
				"Tes",
				"Yood",
				"Chawf",

				"Lamed",
				"Mem",

				"Noon",

				"Sawmech",
				"Aeein",
				"Fay",

				"Tzadeek",

				"Koof",
				"Raysh",
				"Shin",
				"Suhf",
				"Final_Chawf",
				"Final_Mem",
				"Final_Noon",
				"Final_Fay",
				"Final_Tzadeek",
				"Koobootz",


			]
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