const GROUPS = [
  {
    "id": "group-1",
    "name": "個人・ソロ",
    "count": 23,
    "color": "#7bd9e9",
    "members": [
      {
        "name": "相葉雅紀",
        "en": "",
        "image": "https://starto.jp/images/81/f41/183497c18fddb4f8a1d09d0b21dd8.jpg",
        "profile": "https://starto.jp/s/p/artist/148/profile?ima=5501"
      },
      {
        "name": "今江大地",
        "en": "",
        "image": "https://starto.jp/images/81/4b2/d1fdabf4d0ee1d4f4b5e6defbd9ef.jpg",
        "profile": "https://starto.jp/s/p/artist/61/profile?ima=5501"
      },
      {
        "name": "上田竜也",
        "en": "",
        "image": "https://starto.jp/images/81/d71/8a6ddf02c178badb4e9e636ef90fd.jpg",
        "profile": "https://starto.jp/s/p/artist/77/profile?ima=5501"
      },
      {
        "name": "内海光司",
        "en": "",
        "image": "https://starto.jp/images/81/8c0/da4a6c273f9bc94eec489768b3d78.jpg",
        "profile": "https://starto.jp/s/p/artist/3/profile?ima=5501"
      },
      {
        "name": "内博貴",
        "en": "",
        "image": "https://starto.jp/images/81/069/d8712c7670989cb89041e0c9fbe9b.jpg",
        "profile": "https://starto.jp/s/p/artist/27/profile?ima=5501"
      },
      {
        "name": "岡本圭人",
        "en": "",
        "image": "https://starto.jp/images/81/a65/a72c14d0533472907caca7d263832.jpg",
        "profile": "https://starto.jp/s/p/artist/51/profile?ima=5501"
      },
      {
        "name": "河合郁人",
        "en": "",
        "image": "https://starto.jp/images/81/8aa/ce953afed452703ba80cc7d9ba087.jpg",
        "profile": "https://starto.jp/s/p/artist/100/profile?ima=5501"
      },
      {
        "name": "木村拓哉",
        "en": "",
        "image": "https://starto.jp/images/81/dab/39f6d56abd1d7225af6f95477c01e.jpg",
        "profile": "https://starto.jp/s/p/artist/35/profile?ima=5501"
      },
      {
        "name": "草間リチャード敬太",
        "en": "",
        "image": "https://starto.jp/images/81/ff3/ccfd2cfc07ca882c3fc927019f8b4.png",
        "profile": "https://starto.jp/s/p/artist/169/profile?ima=5501"
      },
      {
        "name": "櫻井翔",
        "en": "",
        "image": "https://starto.jp/images/81/552/02975bcbcc2f7213078bdbb54faab.jpg",
        "profile": "https://starto.jp/s/p/artist/152/profile?ima=5501"
      },
      {
        "name": "佐藤アツヒロ",
        "en": "",
        "image": "https://starto.jp/images/81/98c/6b1774466f3396f76cb3b0b30a362.jpg",
        "profile": "https://starto.jp/s/p/artist/4/profile?ima=5501"
      },
      {
        "name": "高田翔",
        "en": "",
        "image": "https://starto.jp/images/81/7d7/643f9461f983c317ee5fa44dc50c6.jpg",
        "profile": "https://starto.jp/s/p/artist/53/profile?ima=5501"
      },
      {
        "name": "冨岡健翔",
        "en": "",
        "image": "https://starto.jp/images/81/cf1/dfc8caf2eadde0004f6c50f6989a7.jpg",
        "profile": "https://starto.jp/s/p/artist/154/profile?ima=5501"
      },
      {
        "name": "堂本光一",
        "en": "",
        "image": "https://starto.jp/images/81/3c5/3f5ecc29df563f0a542761bccae8a.jpg",
        "profile": "https://starto.jp/s/p/artist/163/profile?ima=5501"
      },
      {
        "name": "中島健人",
        "en": "",
        "image": "https://starto.jp/images/81/8c2/5dd1524179810f2436757827a3cca.png",
        "profile": "https://starto.jp/s/p/artist/156/profile?ima=5501"
      },
      {
        "name": "中島裕翔",
        "en": "",
        "image": "https://starto.jp/images/81/05d/140ba8ed70aec41208284eae1691f.jpg",
        "profile": "https://starto.jp/s/p/artist/81/profile?ima=5501"
      },
      {
        "name": "中丸雄一",
        "en": "",
        "image": "https://starto.jp/images/81/63c/f0552a4758e60ed2522e71e0eb27f.jpg",
        "profile": "https://starto.jp/s/p/artist/78/profile?ima=5501"
      },
      {
        "name": "野澤祐樹",
        "en": "",
        "image": "https://starto.jp/images/81/179/3b0d9a7c22ea9aea40c80e090ccd8.jpg",
        "profile": "https://starto.jp/s/p/artist/155/profile?ima=5501"
      },
      {
        "name": "長谷川純",
        "en": "",
        "image": "https://starto.jp/images/81/676/be8c90ac53b8b8cc63cd702476f4e.jpg",
        "profile": "https://starto.jp/s/p/artist/32/profile?ima=5501"
      },
      {
        "name": "林翔太",
        "en": "",
        "image": "https://starto.jp/images/81/587/71f85f1bf1eb9a668d50c18509690.jpg",
        "profile": "https://starto.jp/s/p/artist/44/profile?ima=5501"
      },
      {
        "name": "藤井直樹",
        "en": "",
        "image": "https://starto.jp/images/81/aef/5598e85da42b19c33ef38f2bf8e52.jpg",
        "profile": "https://starto.jp/s/p/artist/168/profile?ima=5501"
      },
      {
        "name": "松本幸大",
        "en": "",
        "image": "https://starto.jp/images/81/79f/8a59003dd6d501b1115f817ba0f20.jpg",
        "profile": "https://starto.jp/s/p/artist/153/profile?ima=5501"
      },
      {
        "name": "室龍太",
        "en": "",
        "image": "https://starto.jp/images/81/44d/21def160b76ae58047f871ea9ccf6.jpg",
        "profile": "https://starto.jp/s/p/artist/52/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-2",
    "name": "Snow Man",
    "count": 9,
    "color": "#a5a1ff",
    "members": [
      {
        "name": "阿部亮平",
        "en": "",
        "image": "https://starto.jp/images/81/9f2/f50c73296f103af19f5df925eb2d7.png",
        "profile": "https://starto.jp/s/p/artist/127/profile?ima=5501"
      },
      {
        "name": "岩本照",
        "en": "",
        "image": "https://starto.jp/images/81/5ff/40710af153fa9f4515ab0b80fd444.png",
        "profile": "https://starto.jp/s/p/artist/122/profile?ima=5501"
      },
      {
        "name": "佐久間大介",
        "en": "",
        "image": "https://starto.jp/images/81/989/e5a6a3af68918b76d97479f8f2319.png",
        "profile": "https://starto.jp/s/p/artist/130/profile?ima=5501"
      },
      {
        "name": "深澤辰哉",
        "en": "",
        "image": "https://starto.jp/images/81/7d6/5524437948680f71be127764dc36b.png",
        "profile": "https://starto.jp/s/p/artist/123/profile?ima=5501"
      },
      {
        "name": "宮舘涼太",
        "en": "",
        "image": "https://starto.jp/images/81/b95/a4001397350ea613c97eb3406e240.png",
        "profile": "https://starto.jp/s/p/artist/129/profile?ima=5501"
      },
      {
        "name": "向井康二",
        "en": "",
        "image": "https://starto.jp/images/81/40c/b4b01ac52fb37283a2dd7bb7229a8.png",
        "profile": "https://starto.jp/s/p/artist/126/profile?ima=5501"
      },
      {
        "name": "目黒蓮",
        "en": "",
        "image": "https://starto.jp/images/81/8ee/57770816936c45c3280cd0441ebfc.jpg",
        "profile": "https://starto.jp/s/p/artist/128/profile?ima=5501"
      },
      {
        "name": "ラウール",
        "en": "",
        "image": "https://starto.jp/images/81/5e3/d642573f2cc80720fb45cc588b16e.png",
        "profile": "https://starto.jp/s/p/artist/124/profile?ima=5501"
      },
      {
        "name": "渡辺翔太",
        "en": "",
        "image": "https://starto.jp/images/81/2b7/fb2805ccd062ec8ecaf2a2b1c47a9.png",
        "profile": "https://starto.jp/s/p/artist/125/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-3",
    "name": "Hey! Say! JUMP",
    "count": 7,
    "color": "#ffb1ca",
    "members": [
      {
        "name": "有岡大貴",
        "en": "",
        "image": "https://starto.jp/images/81/229/162bbb72d5e4c0d6c74726d199a8b.jpg",
        "profile": "https://starto.jp/s/p/artist/82/profile?ima=5501"
      },
      {
        "name": "伊野尾慧",
        "en": "",
        "image": "https://starto.jp/images/81/b19/5cd37dfc1b2301122f8a18bb2ddaf.jpg",
        "profile": "https://starto.jp/s/p/artist/84/profile?ima=5501"
      },
      {
        "name": "髙木雄也",
        "en": "",
        "image": "https://starto.jp/images/81/2ee/d9fd22254eef5a2d06897b4316ae4.jpg",
        "profile": "https://starto.jp/s/p/artist/83/profile?ima=5501"
      },
      {
        "name": "知念侑李",
        "en": "",
        "image": "https://starto.jp/images/81/f3a/34fe83a6579afdd71224f220a25bb.jpg",
        "profile": "https://starto.jp/s/p/artist/80/profile?ima=5501"
      },
      {
        "name": "八乙女光",
        "en": "",
        "image": "https://starto.jp/images/81/9b7/aa6381f76fff36619e866f3151373.jpg",
        "profile": "https://starto.jp/s/p/artist/85/profile?ima=5501"
      },
      {
        "name": "薮宏太",
        "en": "",
        "image": "https://starto.jp/images/81/28d/7677e15a098f8e16a2267f4638536.jpg",
        "profile": "https://starto.jp/s/p/artist/86/profile?ima=5501"
      },
      {
        "name": "山田涼介",
        "en": "",
        "image": "https://starto.jp/images/81/6f0/46a8976c010a4606ac47002e597d2.jpg",
        "profile": "https://starto.jp/s/p/artist/79/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-4",
    "name": "20th Century",
    "count": 3,
    "color": "#ffcf74",
    "members": [
      {
        "name": "井ノ原快彦",
        "en": "",
        "image": "https://starto.jp/images/81/246/93ee9e54803cf009d55e49927b696.png",
        "profile": "https://starto.jp/s/p/artist/140/profile?ima=5501"
      },
      {
        "name": "坂本昌行",
        "en": "",
        "image": "https://starto.jp/images/81/373/8a8a36461fe68b64655d864665efd.png",
        "profile": "https://starto.jp/s/p/artist/138/profile?ima=5501"
      },
      {
        "name": "長野博",
        "en": "",
        "image": "https://starto.jp/images/81/c02/cb682f84a8fd3b2434df861fbbdb1.png",
        "profile": "https://starto.jp/s/p/artist/139/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-5",
    "name": "timelesz",
    "count": 8,
    "color": "#ff9b72",
    "members": [
      {
        "name": "猪俣周杜",
        "en": "",
        "image": "https://starto.jp/images/81/e2a/f0e6184a632c459f9ba4789de82e1.png",
        "profile": "https://starto.jp/s/p/artist/165/profile?ima=5501"
      },
      {
        "name": "菊池風磨",
        "en": "",
        "image": "https://starto.jp/images/81/c1b/2785457ebc3c3cf6df2ed696fa5c1.png",
        "profile": "https://starto.jp/s/p/artist/96/profile?ima=5501"
      },
      {
        "name": "佐藤勝利",
        "en": "",
        "image": "https://starto.jp/images/81/022/3e466e6b883b3972724a279bf7f4c.png",
        "profile": "https://starto.jp/s/p/artist/94/profile?ima=5501"
      },
      {
        "name": "篠塚大輝",
        "en": "",
        "image": "https://starto.jp/images/81/822/b3f35d3f232db50a3f53869fb3f1f.png",
        "profile": "https://starto.jp/s/p/artist/166/profile?ima=5501"
      },
      {
        "name": "寺西拓人",
        "en": "",
        "image": "https://starto.jp/images/81/5ac/8b66048c0050109e1c89edee26292.png",
        "profile": "https://starto.jp/s/p/artist/54/profile?ima=5501"
      },
      {
        "name": "橋本将生",
        "en": "",
        "image": "https://starto.jp/images/81/29c/7979c1aa4cf905a7f1ffc63e6744a.png",
        "profile": "https://starto.jp/s/p/artist/164/profile?ima=5501"
      },
      {
        "name": "原嘉孝",
        "en": "",
        "image": "https://starto.jp/images/81/0d3/a129238b7df40e21d52b808ece961.png",
        "profile": "https://starto.jp/s/p/artist/55/profile?ima=5501"
      },
      {
        "name": "松島聡",
        "en": "",
        "image": "https://starto.jp/images/81/ee9/8f190623799c185a2fd3ae7c4baca.png",
        "profile": "https://starto.jp/s/p/artist/97/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-6",
    "name": "SUPER EIGHT",
    "count": 5,
    "color": "#a7dfb5",
    "members": [
      {
        "name": "大倉忠義",
        "en": "",
        "image": "https://starto.jp/images/81/a53/2ec187d7d56d8488d7e924a9e80dd.jpg",
        "profile": "https://starto.jp/s/p/artist/75/profile?ima=5501"
      },
      {
        "name": "丸山隆平",
        "en": "",
        "image": "https://starto.jp/images/81/70f/9eda1ee13bf6ef34cadd51f982a52.jpg",
        "profile": "https://starto.jp/s/p/artist/73/profile?ima=5501"
      },
      {
        "name": "村上信五",
        "en": "",
        "image": "https://starto.jp/images/81/136/deaa36cd246642c3a7381afeb3aa6.jpg",
        "profile": "https://starto.jp/s/p/artist/72/profile?ima=5501"
      },
      {
        "name": "安田章大",
        "en": "",
        "image": "https://starto.jp/images/81/250/75e2917681db2fe71d369815ed6b6.jpg",
        "profile": "https://starto.jp/s/p/artist/74/profile?ima=5501"
      },
      {
        "name": "横山裕",
        "en": "",
        "image": "https://starto.jp/images/81/78a/6ce44c7ba53e11cf8a0c9c70154e2.jpg",
        "profile": "https://starto.jp/s/p/artist/71/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-7",
    "name": "なにわ男子",
    "count": 7,
    "color": "#c4b5fd",
    "members": [
      {
        "name": "大西流星",
        "en": "",
        "image": "https://starto.jp/images/81/e9f/e847a5ace2bab2b4f4e235fb2bc50.png",
        "profile": "https://starto.jp/s/p/artist/132/profile?ima=5501"
      },
      {
        "name": "大橋和也",
        "en": "",
        "image": "https://starto.jp/images/81/3db/228f073fd243b71af80c31116c4ee.png",
        "profile": "https://starto.jp/s/p/artist/137/profile?ima=5501"
      },
      {
        "name": "高橋恭平",
        "en": "",
        "image": "https://starto.jp/images/81/76b/7c394a790fe1f5f6ff230d0c4019b.png",
        "profile": "https://starto.jp/s/p/artist/134/profile?ima=5501"
      },
      {
        "name": "長尾謙杜",
        "en": "",
        "image": "https://starto.jp/images/81/23b/351224876ba0c5ddc50cae293b365.png",
        "profile": "https://starto.jp/s/p/artist/135/profile?ima=5501"
      },
      {
        "name": "西畑大吾",
        "en": "",
        "image": "https://starto.jp/images/81/460/da267150e05c2179dfed043f20a2f.png",
        "profile": "https://starto.jp/s/p/artist/131/profile?ima=5501"
      },
      {
        "name": "藤原丈一郎",
        "en": "",
        "image": "https://starto.jp/images/81/4ae/ecb72cd33edd0a27e90296129dfe1.png",
        "profile": "https://starto.jp/s/p/artist/136/profile?ima=5501"
      },
      {
        "name": "道枝駿佑",
        "en": "",
        "image": "https://starto.jp/images/81/390/3aa515128ff1d2d6deaf95a0dbe31.png",
        "profile": "https://starto.jp/s/p/artist/133/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-8",
    "name": "NEWS",
    "count": 3,
    "color": "#f4a6a6",
    "members": [
      {
        "name": "加藤シゲアキ",
        "en": "",
        "image": "https://starto.jp/images/81/814/1d621febec46003c7de750d58008e.png",
        "profile": "https://starto.jp/s/p/artist/69/profile?ima=5501"
      },
      {
        "name": "小山慶一郎",
        "en": "",
        "image": "https://starto.jp/images/81/084/8073814681880999a557352cd8dfe.png",
        "profile": "https://starto.jp/s/p/artist/68/profile?ima=5501"
      },
      {
        "name": "増田貴久",
        "en": "",
        "image": "https://starto.jp/images/81/53a/867b465e7ecafb34b26995f8f63ad.png",
        "profile": "https://starto.jp/s/p/artist/70/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-9",
    "name": "WEST.",
    "count": 7,
    "color": "#7bd9e9",
    "members": [
      {
        "name": "神山智洋",
        "en": "",
        "image": "https://starto.jp/images/81/e08/ab8beb0de7278a8d6b7e9e20d7252.jpg",
        "profile": "https://starto.jp/s/p/artist/106/profile?ima=5501"
      },
      {
        "name": "桐山照史",
        "en": "",
        "image": "https://starto.jp/images/81/b9c/a1f62222a3f8741a9bf46944c787e.jpg",
        "profile": "https://starto.jp/s/p/artist/104/profile?ima=5501"
      },
      {
        "name": "小瀧望",
        "en": "",
        "image": "https://starto.jp/images/81/c92/58f3a975db441b94af23467b38a7a.jpg",
        "profile": "https://starto.jp/s/p/artist/109/profile?ima=5501"
      },
      {
        "name": "重岡大毅",
        "en": "",
        "image": "https://starto.jp/images/81/acd/b4fb0f18780d9106549d010562d5c.jpg",
        "profile": "https://starto.jp/s/p/artist/103/profile?ima=5501"
      },
      {
        "name": "中間淳太",
        "en": "",
        "image": "https://starto.jp/images/81/ce4/d230d254aba8aa2f53324a2dd4011.jpg",
        "profile": "https://starto.jp/s/p/artist/105/profile?ima=5501"
      },
      {
        "name": "濵田崇裕",
        "en": "",
        "image": "https://starto.jp/images/81/f43/376f33923960a380c70625d21d1f9.jpg",
        "profile": "https://starto.jp/s/p/artist/108/profile?ima=5501"
      },
      {
        "name": "藤井流星",
        "en": "",
        "image": "https://starto.jp/images/81/084/4bf0a65afa55bf370c0f7a29dd274.jpg",
        "profile": "https://starto.jp/s/p/artist/107/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-10",
    "name": "Travis Japan",
    "count": 7,
    "color": "#a5a1ff",
    "members": [
      {
        "name": "川島如恵留",
        "en": "",
        "image": "https://starto.jp/images/81/ff2/597eeeeb280bbf48e845cc6f18353.png",
        "profile": "https://starto.jp/s/p/artist/144/profile?ima=5501"
      },
      {
        "name": "七五三掛龍也",
        "en": "",
        "image": "https://starto.jp/images/81/5d3/4865e908268c3f49f8228afce22e5.png",
        "profile": "https://starto.jp/s/p/artist/143/profile?ima=5501"
      },
      {
        "name": "中村海人",
        "en": "",
        "image": "https://starto.jp/images/81/5dc/afaa01837035b78bc5c227582710d.png",
        "profile": "https://starto.jp/s/p/artist/142/profile?ima=5501"
      },
      {
        "name": "松倉海斗",
        "en": "",
        "image": "https://starto.jp/images/81/095/380778b6c7da9115bcd2bb4ffd054.png",
        "profile": "https://starto.jp/s/p/artist/147/profile?ima=5501"
      },
      {
        "name": "松田元太",
        "en": "",
        "image": "https://starto.jp/images/81/207/2da2c8e612514618080b044d708db.png",
        "profile": "https://starto.jp/s/p/artist/146/profile?ima=5501"
      },
      {
        "name": "宮近海斗",
        "en": "",
        "image": "https://starto.jp/images/81/ab5/524bc9fb4c37f468404136d1d6b6f.png",
        "profile": "https://starto.jp/s/p/artist/141/profile?ima=5501"
      },
      {
        "name": "吉澤閑也",
        "en": "",
        "image": "https://starto.jp/images/81/87b/4f4e056039ea683907ae69b846856.png",
        "profile": "https://starto.jp/s/p/artist/145/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-11",
    "name": "SixTONES",
    "count": 6,
    "color": "#ffb1ca",
    "members": [
      {
        "name": "京本大我",
        "en": "",
        "image": "https://starto.jp/images/81/bc4/97edbad1432b6982579eea76e1324.png",
        "profile": "https://starto.jp/s/p/artist/117/profile?ima=5501"
      },
      {
        "name": "髙地優吾",
        "en": "",
        "image": "https://starto.jp/images/81/c71/ee8e491e6827e5df10f569b18ed1a.png",
        "profile": "https://starto.jp/s/p/artist/119/profile?ima=5501"
      },
      {
        "name": "ジェシー",
        "en": "",
        "image": "https://starto.jp/images/81/44e/8ebc226045c0ead51d280d690c4c7.png",
        "profile": "https://starto.jp/s/p/artist/116/profile?ima=5501"
      },
      {
        "name": "田中樹",
        "en": "",
        "image": "https://starto.jp/images/81/cbc/ce75ee5a9362fd93c5446729f01cc.png",
        "profile": "https://starto.jp/s/p/artist/121/profile?ima=5501"
      },
      {
        "name": "松村北斗",
        "en": "",
        "image": "https://starto.jp/images/81/016/179da6384846883b02e4a6f9425d1.png",
        "profile": "https://starto.jp/s/p/artist/118/profile?ima=5501"
      },
      {
        "name": "森本慎太郎",
        "en": "",
        "image": "https://starto.jp/images/81/758/d4d529eff602e69e9edaeae5b6e3e.png",
        "profile": "https://starto.jp/s/p/artist/120/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-12",
    "name": "ふぉ～ゆ～",
    "count": 4,
    "color": "#ffcf74",
    "members": [
      {
        "name": "越岡裕貴",
        "en": "",
        "image": "https://starto.jp/images/81/6fc/620537501760c9d4e0288513bd51a.jpg",
        "profile": "https://starto.jp/s/p/artist/112/profile?ima=5501"
      },
      {
        "name": "辰巳雄大",
        "en": "",
        "image": "https://starto.jp/images/81/e8d/d5cc7fe3c35bf6c49d0faf3c8ce3c.jpg",
        "profile": "https://starto.jp/s/p/artist/111/profile?ima=5501"
      },
      {
        "name": "福田悠太",
        "en": "",
        "image": "https://starto.jp/images/81/f2c/66058262af1cdf4957eef32e0cc0c.jpg",
        "profile": "https://starto.jp/s/p/artist/110/profile?ima=5501"
      },
      {
        "name": "松崎祐介",
        "en": "",
        "image": "https://starto.jp/images/81/1c5/33ebcdb556d527f9e0aa24a01f34d.jpg",
        "profile": "https://starto.jp/s/p/artist/113/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-13",
    "name": "Aぇ! group",
    "count": 4,
    "color": "#ff9b72",
    "members": [
      {
        "name": "小島健",
        "en": "",
        "image": "https://starto.jp/images/81/0bf/2f12ad703f522ae2db04629248efd.jpg",
        "profile": "https://starto.jp/s/p/artist/161/profile?ima=5501"
      },
      {
        "name": "佐野晶哉",
        "en": "",
        "image": "https://starto.jp/images/81/6ac/6b697f0f5778268299fa7029ffbac.jpg",
        "profile": "https://starto.jp/s/p/artist/162/profile?ima=5501"
      },
      {
        "name": "末澤誠也",
        "en": "",
        "image": "https://starto.jp/images/81/05f/eba680dc870cd9b7ca76fe172a178.jpg",
        "profile": "https://starto.jp/s/p/artist/159/profile?ima=5501"
      },
      {
        "name": "正門良規",
        "en": "",
        "image": "https://starto.jp/images/81/b77/60917bb94128c5d185ada110840fb.jpg",
        "profile": "https://starto.jp/s/p/artist/158/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-14",
    "name": "A.B.C-Z",
    "count": 4,
    "color": "#a7dfb5",
    "members": [
      {
        "name": "五関晃一",
        "en": "",
        "image": "https://starto.jp/images/81/f63/140e9017b919d53fcf985cfc72815.png",
        "profile": "https://starto.jp/s/p/artist/101/profile?ima=5501"
      },
      {
        "name": "塚田僚一",
        "en": "",
        "image": "https://starto.jp/images/81/319/22ee7109648ccb181a429df95c9cb.png",
        "profile": "https://starto.jp/s/p/artist/102/profile?ima=5501"
      },
      {
        "name": "戸塚祥太",
        "en": "",
        "image": "https://starto.jp/images/81/de1/5c43b7691fb65e49330fe45289764.png",
        "profile": "https://starto.jp/s/p/artist/99/profile?ima=5501"
      },
      {
        "name": "橋本良亮",
        "en": "",
        "image": "https://starto.jp/images/81/ecd/c3180f33a6066e513f151be5918d2.png",
        "profile": "https://starto.jp/s/p/artist/98/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-15",
    "name": "Kis-My-Ft2",
    "count": 6,
    "color": "#c4b5fd",
    "members": [
      {
        "name": "千賀健永",
        "en": "",
        "image": "https://starto.jp/images/81/3a5/0ff28361136e486c7406d560e8580.png",
        "profile": "https://starto.jp/s/p/artist/88/profile?ima=5501"
      },
      {
        "name": "玉森裕太",
        "en": "",
        "image": "https://starto.jp/images/81/2b2/38f8e2c9c8688c07624d20dded116.png",
        "profile": "https://starto.jp/s/p/artist/92/profile?ima=5501"
      },
      {
        "name": "二階堂高嗣",
        "en": "",
        "image": "https://starto.jp/images/81/1ae/1badf71eda4d214517b5fa1dcefcc.png",
        "profile": "https://starto.jp/s/p/artist/93/profile?ima=5501"
      },
      {
        "name": "藤ヶ谷太輔",
        "en": "",
        "image": "https://starto.jp/images/81/bd8/a0eda0ee744e9230e960f8c50fa8d.png",
        "profile": "https://starto.jp/s/p/artist/91/profile?ima=5501"
      },
      {
        "name": "宮田俊哉",
        "en": "",
        "image": "https://starto.jp/images/81/36b/13ac2c7feb47d6ce0feb0e61023e6.png",
        "profile": "https://starto.jp/s/p/artist/89/profile?ima=5501"
      },
      {
        "name": "横尾渉",
        "en": "",
        "image": "https://starto.jp/images/81/d24/f9fe171f73c2a1f5dc476d062449d.png",
        "profile": "https://starto.jp/s/p/artist/90/profile?ima=5501"
      }
    ]
  },
  {
    "id": "group-16",
    "name": "King & Prince",
    "count": 2,
    "color": "#f4a6a6",
    "members": [
      {
        "name": "髙橋海人",
        "en": "",
        "image": "https://starto.jp/images/81/9d0/299d1d4f508046ad57b2bc8ca457a.png",
        "profile": "https://starto.jp/s/p/artist/115/profile?ima=5501"
      },
      {
        "name": "永瀬廉",
        "en": "",
        "image": "https://starto.jp/images/81/350/251bff5fe491af6e009a2ffb443ed.png",
        "profile": "https://starto.jp/s/p/artist/114/profile?ima=5501"
      }
    ]
  }
];

const CATEGORIES = {
  face: { label: "好き顔9選", lead: "顔が好き。直感だけで選ぶランキング。" }
};
const TOTAL_MEMBERS = GROUPS.reduce((total, group) => total + group.members.length, 0);

const state = {
  screen: "setup",
  category: "face",
  selectedGroups: new Set(GROUPS.map(group => group.id)),
  mode: "easy",
  photo: "official",
  matches: [],
  matchIndex: 0,
  scores: new Map(),
  history: [],
  ranking: [],
  showAll: false
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
let toastTimer;

function esc(text) {
  return String(text).replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch]));
}
function groupOf(member) { return GROUPS.find(group => group.id === member.groupId); }
function allSelectedMembers() {
  return GROUPS.filter(group => state.selectedGroups.has(group.id)).flatMap(group => group.members.map(member => ({ ...member, groupId: group.id, groupName: group.name })));
}
function initials(name) { return name.slice(0, 1); }
function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function imageTag(member, className = "") {
  return `<img class="${className}" src="${member.image}" alt="${esc(member.name)}" loading="lazy" onerror="this.style.display='none'" />`;
}
function getMatches(members) {
  const pairs = [];
  const used = new Set();
  const addPair = (a, b) => {
    const key = [a.name, b.name].sort().join("|");
    if (a.name !== b.name && !used.has(key)) { used.add(key); pairs.push([a, b]); }
  };
  if (state.mode === "full") {
    for (let i = 0; i < members.length; i++) for (let j = i + 1; j < members.length; j++) addPair(members[i], members[j]);
    return shuffle(pairs);
  }
  const max = Math.min(30, Math.max(12, Math.round(members.length * 0.35)));
  const possible = members.length * (members.length - 1) / 2;
  const target = Math.min(max, possible);
  let attempts = 0;
  while (pairs.length < target && attempts < 500) {
    const [a, b] = shuffle(members).slice(0, 2);
    addPair(a, b); attempts++;
  }
  return pairs;
}
function render() {
  if (state.screen === "setup") renderSetup();
  if (state.screen === "match") renderMatch();
  if (state.screen === "result") renderResult();
  if (state.screen !== "setup") window.scrollTo({ top: document.querySelector(".content-card").offsetTop - 20, behavior: "smooth" });
}
function renderSetup() {
  const category = CATEGORIES.face;
  app.innerHTML = `
    <section class="setup-screen">
      <div class="panel-head">
        <div><p class="panel-kicker">01 / ALL ARTISTS, ONE RANKING</p><h2 class="panel-title">所属アーティスト全員で比べよう</h2><p class="panel-lead">グループを選ぶ必要はありません。収録している全員が最初から対象です。</p></div>
        <span class="panel-index">01</span>
      </div>
      <div class="all-roster">
        <div class="roster-total"><strong>${TOTAL_MEMBERS}</strong><span>ARTISTS</span></div>
        <div class="roster-copy"><b>STARTO ENTERTAINMENT</b><span>このサイトに収録している全${GROUPS.length}グループを横断して対決</span></div>
      </div>
      <div class="section-label"><b>対象アーティスト</b><span>ALL ${TOTAL_MEMBERS} MEMBERS</span></div>
      <div class="roster-grid">
        ${GROUPS.map(group => `<div class="roster-chip"><span class="roster-dot" style="background:${group.color}"></span><b>${esc(group.name)}</b><small>${group.members.length} MEMBERS</small></div>`).join("")}
      </div>
      <div class="selection-note"><span class="note-dot"></span><b>全${GROUPS.length}グループ・${TOTAL_MEMBERS}名が対象</b> / このまま診断をスタートできます</div>
      <div class="option-area">
        <div><div class="section-label"><b>対戦モード</b><span>QUESTION STYLE</span></div><div class="segmented">
          <button class="segment-btn ${state.mode === "easy" ? "is-selected" : ""}" data-mode="easy"><b>サクッと診断</b><small>目安の対戦数で気軽に</small></button>
          <button class="segment-btn ${state.mode === "full" ? "is-selected" : ""}" data-mode="full"><b>ガチ全部比較</b><small>全員を1対1で総当たり</small></button>
        </div></div>
        <div><div class="section-label"><b>写真タイプ</b><span>PHOTO TYPE</span></div><div class="segmented">
          <button class="segment-btn ${state.photo === "official" ? "is-selected" : ""}" data-photo="official"><b>公式アー写</b><small>プロフィール写真で選ぶ</small></button>
          <button class="segment-btn ${state.photo === "simple" ? "is-selected" : ""}" data-photo="simple"><b>シンプル表示</b><small>名前だけで直感勝負</small></button>
        </div></div>
      </div>
      <div class="start-row"><p class="start-copy"><b>${category.label} / ${state.mode === "easy" ? "EASY MODE" : "FULL COMPARISON"}</b>${category.lead}</p><button class="primary-btn" id="start-btn">診断をスタート</button></div>
    </section>`;
  bindSetup();
}
function bindSetup() {
  document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { state.mode = button.dataset.mode; renderSetup(); }));
  document.querySelectorAll("[data-photo]").forEach(button => button.addEventListener("click", () => { state.photo = button.dataset.photo; renderSetup(); }));
  document.querySelector("#start-btn")?.addEventListener("click", startGame);
}
function startGame() {
  const members = allSelectedMembers();
  state.matches = getMatches(members);
  state.matchIndex = 0; state.scores = new Map(members.map(member => [member.name, 0])); state.history = []; state.screen = "match";
  render();
}
function renderMatch() {
  const pair = state.matches[state.matchIndex];
  const total = state.matches.length;
  if (!pair) return finishGame();
  app.innerHTML = `<section class="match-screen">
    <div class="panel-head"><div><p class="panel-kicker">02 / TRUST YOUR INSTINCT</p><h2 class="panel-title">直感で、どっちが好き？</h2><p class="panel-lead">考えすぎず、最初に目に入った方をタップ。</p></div><span class="panel-index">02</span></div>
    <div class="match-progress"><div class="match-progress-bar"><i style="width:${(state.matchIndex / total) * 100}%"></i></div><span class="match-progress-count">${String(state.matchIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}</span></div>
    <p class="match-label">MATCH UP / ${state.mode === "easy" ? "EASY" : "FULL COMPARISON"}</p>
    <div class="match-pair">
      ${pair.map((member, index) => `<button class="choice-card" data-choice="${index}" aria-label="${esc(member.name)}を選ぶ"><span class="choice-photo">${state.photo === "official" ? imageTag(member) : `<span class="simple-avatar">${initials(member.name)}</span>`}</span><span class="choice-card-copy"><small>${esc(member.groupName)}</small><b>${esc(member.name)}</b>${member.en ? `<span>${esc(member.en)}</span>` : ""}</span></button>${index === 0 ? '<span class="vs">VS</span>' : ""}`).join("")}
    </div>
    <p class="match-hint">← 左が好き　　<b>選ぶだけで次へ</b>　　右が好き →</p>
    <div class="match-actions"><button class="secondary-btn" data-draw>どっちも好き</button><button class="secondary-btn" data-unknown>わからない</button><button class="secondary-btn" data-undo ${state.history.length === 0 ? "disabled" : ""}>↩ ひとつ戻る</button></div>
  </section>`;
  document.querySelectorAll("[data-choice]").forEach(button => button.addEventListener("click", () => choose(Number(button.dataset.choice))));
  document.querySelector("[data-draw]").addEventListener("click", () => choose(null, true));
  document.querySelector("[data-unknown]").addEventListener("click", () => choose(null, false));
  document.querySelector("[data-undo]").addEventListener("click", undo);
}
function choose(index, draw = false) {
  const pair = state.matches[state.matchIndex];
  state.history.push({ matchIndex: state.matchIndex, scores: new Map(state.scores) });
  if (draw) { pair.forEach(member => state.scores.set(member.name, state.scores.get(member.name) + .5)); }
  else if (index !== null) state.scores.set(pair[index].name, state.scores.get(pair[index].name) + 1);
  state.matchIndex++;
  if (state.matchIndex >= state.matches.length) finishGame(); else renderMatch();
}
function undo() {
  const previous = state.history.pop();
  if (!previous) return;
  state.matchIndex = previous.matchIndex; state.scores = previous.scores; renderMatch();
}
function finishGame() {
  const members = allSelectedMembers();
  state.ranking = members.map(member => ({ ...member, score: state.scores.get(member.name) || 0 })).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "ja"));
  state.screen = "result"; state.showAll = false; renderResult();
}
function renderResult() {
  const category = CATEGORIES[state.category];
  const top = state.ranking.slice(0, 3);
  const shown = state.showAll ? state.ranking : state.ranking.slice(0, 9);
  const maxScore = Math.max(1, ...state.ranking.map(member => member.score));
  const phrase = state.ranking.length && state.ranking[0].score === 0 ? "全員尊すぎて、まだ決められなかった…！" : `${state.ranking[0]?.name || "あなたの推し"}の魅力に、心をつかまれました。`;
  app.innerHTML = `<section class="result-screen">
    <div class="panel-head"><span class="panel-index">03</span><div><span class="result-badge">YOUR RESULT IS READY</span><h2 class="panel-title">あなたの${category.label}</h2><p class="panel-lead">対決を勝ち抜いたメンバーたちです。</p></div></div>
    <div class="top-three">${top.map((member, index) => `<a class="top-result" href="${member.profile}" target="_blank" rel="noreferrer" aria-label="${esc(member.name)}の公式プロフィールを開く"><span class="top-photo">${imageTag(member)}</span><span class="top-rank">${index + 1}</span><span class="top-result-copy"><small>${esc(member.groupName)}</small><b>${esc(member.name)}</b><span>OFFICIAL PROFILE ↗</span></span></a>`).join("")}</div>
    <p class="result-insight"><strong>${esc(phrase)}</strong><br />あなたの直感から生まれた、世界にひとつのランキング。</p>
    <div class="result-list">${shown.map((member, index) => `<div class="rank-row"><span class="rank-number">${String(index + 1).padStart(2, "0")}</span><span class="rank-avatar">${imageTag(member)}</span><span class="rank-name"><b>${esc(member.name)}</b><small>${esc(member.groupName)}${member.en ? ` / ${esc(member.en)}` : ""}</small></span><span class="rank-score">${member.score === 0 ? "—" : `${Math.round(member.score * 10) / 10} pt`}</span><a class="rank-link" href="${member.profile}" target="_blank" rel="noreferrer" aria-label="${esc(member.name)}の公式プロフィール">↗</a></div>`).join("")}</div>
    ${state.ranking.length > 9 ? `<button class="show-more" id="show-more">${state.showAll ? "上位9人だけ表示" : `もっと見る（全${state.ranking.length}人）`}</button>` : ""}
    <div class="result-actions"><button class="secondary-btn" id="share-btn">↗ 結果をシェア</button><button class="secondary-btn" id="save-btn">▣ 画像で保存</button><button class="primary-btn" id="retry-btn">もう一度診断する</button></div>
  </section>`;
  document.querySelector("#show-more")?.addEventListener("click", () => { state.showAll = !state.showAll; renderResult(); });
  document.querySelector("#retry-btn").addEventListener("click", () => { state.screen = "setup"; render(); });
  document.querySelector("#share-btn").addEventListener("click", shareResult);
  document.querySelector("#save-btn").addEventListener("click", saveResultImage);
}
function showToast(message) {
  toast.textContent = message; toast.classList.add("is-visible"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}
async function shareResult() {
  const category = CATEGORIES[state.category].label;
  const text = `私の${category}は ${state.ranking.slice(0, 3).map(member => member.name).join("・")}！\nSTARTO 好き顔セレクション`;
  try {
    if (navigator.share) await navigator.share({ title: "STARTO 好き顔セレクション", text, url: location.href });
    else { await navigator.clipboard.writeText(`${text}\n${location.href}`); showToast("結果とURLをコピーしました"); }
  } catch (error) { if (error.name !== "AbortError") showToast("シェアの準備ができませんでした"); }
}
function saveResultImage() {
  const canvas = document.createElement("canvas"); canvas.width = 1000; canvas.height = 1400;
  const ctx = canvas.getContext("2d"); const gradient = ctx.createLinearGradient(0, 0, 1000, 1400); gradient.addColorStop(0, "#08182e"); gradient.addColorStop(1, "#183b61"); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1000, 1400);
  ctx.fillStyle = "#7bd9e9"; ctx.beginPath(); ctx.arc(845, 135, 100, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#ff8068"; ctx.beginPath(); ctx.arc(150, 1210, 76, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#ffffff"; ctx.font = "700 25px sans-serif"; ctx.fillText("STARTO 好き顔セレクション", 80, 92);
  ctx.fillStyle = "#7bd9e9"; ctx.font = "700 18px sans-serif"; ctx.fillText(CATEGORIES[state.category].label.toUpperCase(), 80, 145);
  ctx.fillStyle = "#ffffff"; ctx.font = "900 58px sans-serif"; ctx.fillText("MY TOP 9", 80, 228);
  state.ranking.slice(0, 9).forEach((member, index) => {
    const y = 300 + index * 103; ctx.fillStyle = index === 0 ? "#ff8068" : "#7bd9e9"; ctx.font = "italic 900 30px sans-serif"; ctx.fillText(String(index + 1).padStart(2, "0"), 80, y);
    ctx.fillStyle = "rgba(255,255,255,.15)"; ctx.fillRect(170, y - 32, 720, 1);
    ctx.fillStyle = "#ffffff"; ctx.font = "700 27px sans-serif"; ctx.fillText(member.name, 185, y); ctx.fillStyle = "rgba(255,255,255,.63)"; ctx.font = "500 14px sans-serif"; ctx.fillText(`${member.groupName}${member.en ? `  /  ${member.en}` : ""}`, 185, y + 26);
  });
  ctx.fillStyle = "rgba(255,255,255,.6)"; ctx.font = "500 14px sans-serif"; ctx.fillText("FAN-MADE PROJECT  •  starto-sukigao", 80, 1320);
  const link = document.createElement("a"); link.download = "starto-sukigao-result.png"; link.href = canvas.toDataURL("image/png"); link.click(); showToast("結果画像を保存しました");
}

render();
