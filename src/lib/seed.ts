import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const dishesList = [
  "California Roll",
  "Spicy Tuna Roll",
  "Dragon Roll",
  "Rainbow Roll",
  "Salmon Nigiri",
  "Tuna Sashimi",
  "Eel Roll",
  "Philadelphia Roll",
  "Cucumber Roll",
  "Avocado Roll",
  "Tempura Roll",
  "Spider Roll",
  "Alaska Roll",
  "Volcano Roll",
  "Caterpillar Roll",
  "Salmon Roll",
  "Yellowtail Nigiri",
  "Mackerel Sushi",
  "Uni Sushi",
  "Miso Soup",
  "Edamame",
  "Gyoza",
  "Tempura",
  "Teriyaki Chicken",
  "Yakitori",
  "Agedashi Tofu",
  "Ramen",
  "Udon",
  "Soba",
  "Tonkatsu",
  "Okonomiyaki",
  "Takoyaki",
  "Onigiri",
  "Chirashi",
  "Karaage",
  "Sukiyaki",
  "Yakiniku",
  "Shabu-Shabu",
  "Natto",
  "Gunkan Maki",
  "Futomaki",
  "Inari Sushi",
  "Tamago Nigiri",
  "Sashimi Platter",
  "Bibimbap",
  "Kimchi",
  "Bulgogi",
  "Japchae",
  "Tteokbokki",
  "Samgyeopsal",
  "Kimchi Fried Rice",
  "Jjajangmyeon",
  "Haemul Pajeon",
  "Dak Galbi",
  "Kimbap",
  "Doenjang Jjigae",
  "Kimchi Jjigae",
  "Yukgaejang",
  "Sundubu Jjigae",
  "Banchan",
  "Mandu",
  "Hotteok",
  "Gimbap",
  "Japchae",
  "Gyeran Jjim",
  "Galbi",
  "Mul Naengmyeon",
  "Bibim Naengmyeon",
  "Samgyetang",
  "Bossam",
  "Korean BBQ",
  "Jjolmyeon",
  "Gochujang",
  "Korean Fried Chicken",
  "Kimbap",
  "Beef Bulgogi",
  "Dakgangjeong",
  "Hobakjuk",
  "Patbingsu",
  "Sannakji",
  "Yangnyeom Tongdak",
  "Soondae",
  "Hwe",
  "Saeu Twigim",
  "Galbijjim",
  "Gyeran Mari",
  "Gopchang",
  "Ddeokbokki",
  "Ganjang Gejang",
  "Gimbap",
  "Gyeran Bokkeumbap",
  "Jumeokbap",
  "Kalguksu",
  "Kimchi Bokkeumbap",
  "Kkakdugi",
  "Kongnamul Guk",
  "Kongguksu",
  "Korean Omelette",
  "Miyeok Guk",
  "Nurungji",
  "Ojingeo Bokkeum",
  "Samgyupsal",
  "Sikhye",
  "Sujeonggwa",
  "Yangjangpi",
  "Pho",
  "Dim sum",
  "Pad Thai",
  "Kimchi",
  "Miso soup",
  "Baozi",
  "Samosa",
  "Yakitori",
  "Bulgogi",
  "Bibimbap",
  "Gyoza",
  "Laksa",
  "Spring rolls",
  "Curry laksa",
  "Roti canai",
  "Tom yum",
  "Banh mi",
  "Satay",
  "Nasi goreng",
  "Hainanese chicken rice",
  "Bubble tea",
  "Peking duck",
  "Shabu-shabu",
  "Kebab",
  "Tandoori chicken",
  "Tikka masala",
  "Naan",
  "Okonomiyaki",
  "Takoyaki",
  "Tempura",
  "Onigiri",
  "Udon",
  "Yakisoba",
  "Tonkatsu",
  "Teriyaki",
  "Matcha ice cream",
  "Soba noodles",
  "Sashimi",
  "Bibim-naengmyeon",
  "Bibim-guksu",
  "Bulgogi-bap",
  "Japchae",
  "Kimchi-jjigae",
  "Jajangmyeon",
  "Hot pot",
  "Mapo tofu",
  "Wonton soup",
  "Congee",
  "Zongzi",
  "Hujiao bing",
  "Jianbing",
  "Xiaolongbao",
  "Zhajiangmian",
  "Tanghulu",
  "Chilli crab",
  "Laksa lemak",
  "Kaya toast",
  "Bak kut teh",
  "Hainanese curry rice",
  "Chirashi sushi",
  "Char kway teow",
  "Roti prata",
  "Kueh pie tee",
  "Lontong",
  "Ketoprak",
  "Ayam goreng",
  "Martabak",
  "Gado-gado",
  "Rendang",
  "Nasi lemak",
  "Murtabak",
  "Otak-otak",
  "Satay bee hoon",
  "Tahu goreng",
  "Asam laksa",
  "Nasi kerabu",
  "Ikan bakar",
  "Mi rebus",
  "Laska johor",
  "Nasi dagang",
  "Laksa Johor",
  "Bahulu",
  "Cendol",
  "Putu piring",
  "Ais kacang",
  "Apam balik",
  "Ayam percik",
  "Nasi ulam",
  "Nasi goreng pattaya",
  "Nasi kandar",
  "Nasi vanggey",
  "Mee rebus",
  "Mee soto",
  "Nasi ambeng",
  "Nasi ayam penyet",
  "Nasi kentut",
  "Mee bandung",
  "Mee kolok",
  "Roti jala",
  "Hokkien mee",
  "Bee hoon",
  "Mee pok",
  "Mee kari",
  "Mee siam",
  "Laksa Sarawak",
  "Kolo mee",
  "Char siew",
  "Penang white curry mee",
  "Bakso",
  "Martabak manis",
  "Pempek",
  "Gudeg",
  "Bubur ayam",
  "Asinan",
  "Nasi campur",
  "Nasi rames",
  "Nasi gudeg",
  "Nasi bogana",
  "Nasi kuning",
  "Nasi pepes",
  "Nasi bakar",
  "Nasi uduk",
  "Nasi bebek",
  "Nasi jinggo",
  "Nasi kucing",
  "Sate ayam",
  "Sate kambing",
  "Sate Padang",
  "Sate lilit",
  "Sate babi",
  "Sate kere",
  "Sate laler",
  "Sate buntel",
  "Sate segar",
  "Sate Maranggi",
  "Sate Bulayak",
  "Es doger",
  "Es cendol",
  "Es dawet",
  "Es palu butung",
  "Es campur",
  "Es kelapa muda",
  "Es kopyor",
  "Es legen",
  "Es lidah buaya",
  "Es oyen",
  "Es puter",
  "Es selendang mayang",
  "Es cincau",
  "Es sekoteng",
  "Es teh manis",
  "Es teler",
  "Es degan",
  "Es merah delima",
  "Es kepal",
  "Es krim pot",
  "Es sop buah",
  "Es blewah",
  "Es buah",
  "Es kacang merah",
  "Es ketan hitam",
  "Es kiamboy",
  "Mongolian barbecue",
  "Hunan beef",
  "Lao gan ma",
  "Gong bao chicken",
  "Sichuan hot pot",
  "Biangbiang noodles",
  "Peking noodles",
  "Dandan noodles",
  "Beijing roast duck",
  "Hakka cuisine",
  "Taiwanese beef noodle soup",
  "Taiwanese oyster omelette",
  "Taiwanese popcorn chicken",
  "Taiwanese bubble tea",
  "Taiwanese pineapple cake",
  "Taiwanese stinky tofu",
  "Shanghai hairy crab",
  "Xinjiang lamb skewers",
  "Xinjiang hand-pulled noodles",
  "Xinjiang big plate chicken",
  "Xinjiang naan",
  "Xinjiang rice pilaf",
  "Xinjiang yogurt",
  "Uyghur cuisine",
  "Szechuan cuisine",
  "Szechuan peppercorn",
  "Ma po tofu",
  "Dan dan noodles",
  "Chongqing hot pot",
  "Chongqing noodles",
  "Chongqing chicken",
  "Chongqing fried rice",
  "Guangdong cuisine",
  "Cantonese cuisine",
  "Guangzhou dim sum",
  "Char siu",
  "Cantonese roast goose",
  "Yum cha",
  "Zhejiang cuisine",
  "Hangzhou cuisine",
  "Dongpo pork",
  "Beggar's chicken",
  "Sichuan cuisine",
  "Szechuan hotpot",
  "Kung pao chicken",
  "Yu xiang rou si",
  "Twice-cooked pork",
  "Sichuan spicy fish",
  "Guizhou cuisine",
  "Yunnan cuisine",
  "Kunming cuisine",
  "Crossing-the-bridge noodles",
  "Guoqiao mixian",
  "Yunnan rice noodles",
  "Guilin cuisine",
  "Guilin rice noodles",
  "Luosifen",
  "Chaozhou cuisine",
  "Teochew cuisine",
  "Hainan cuisine",
  "Hainanese chicken rice",
  "Hainanese curry rice",
  "Hainanese noodle soup",
  "Hainanese mutton soup",
  "Hainanese chicken curry",
  "Hainanese beef curry",
  "Hainanese duck curry",
  "Hainanese pork curry",
  "Hainanese duck soup",
  "Hainanese pork soup",
  "Hainanese beef soup",
  "Hainanese fish soup",
  "Hainanese crab soup",
  "Hainanese prawn soup",
  "Hainanese tofu soup",
  "Hainanese vegetable soup",
  "Hainanese seafood soup",
  "Hainanese hot pot",
  "Hainanese barbecue",
  "Hainanese lamb skewers",
  "Hainanese fish balls",
  "Hainanese meatballs",
  "Hainanese crab balls",
  "Hainanese prawn balls",
  "Hainanese tofu balls",
  "Hainanese vegetable balls",
  "Hainanese seafood balls",
  "Hainanese spring rolls",
  "Hainanese summer rolls",
  "Hainanese autumn rolls",
  "Hainanese winter rolls",
  "Hainanese fried rice",
  "Hainanese noodles",
  "Hainanese stir-fry",
  "Hainanese tofu",
  "Hainanese eggplant",
  "Hainanese tomato and egg stir-fry",
  "Hainanese fish stir-fry",
  "Hainanese prawn stir-fry",
  "Hainanese beef stir-fry",
  "Hainanese chicken stir-fry",
  "Hainanese pork stir-fry",
  "Hainanese vegetable stir-fry",
  "Hainanese seafood stir-fry",
  "Hainanese pineapple stir-fry",
  "Hainanese ginger stir-fry",
  "Hainanese garlic stir-fry",
  "Hainanese spring onion stir-fry",
  "Hainanese ginger and spring onion stir-fry",
]

dishesList.forEach((item) => {
  const dish = item
  const dishes: { score: 0; member: string }[] = []

  for (let i = 0; i <= dish.length; i++) {
    dishes.push({ score: 0, member: dish.substring(0, i) })
  }
  dishes.push({ score: 0, member: dish + '*' })

  const populateDb = async () => {
    // @ts-expect-error
    await redis.zadd("Dishes", ...dishes)
  }

  populateDb()
})