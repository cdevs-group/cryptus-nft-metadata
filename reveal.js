const fs = require("fs");

let gifts = [{
    name: "Годовая подписка Prime",
    count: 5,
    dropChance: 0.10,
    nftImg: "0/0.png",
    usedNftImg: "0/0_used.png",
},
    {
        name: "6 месяцев подписки Prime",
        count: 10,
        dropChance: 0.20,
        nftImg: "1/1.png",
        usedNftImg: "1/1_used.png",
    },
    {
        name: "3 месяца подписки Prime",
        count: 20,
        dropChance: 0.40,
        nftImg: "2/2.png",
        usedNftImg: "2/2_used.png",
    },
    {
        name: "Месяц подписки Prime",
        count: 40,
        dropChance: 0.80,
        nftImg: "3/3.png",
        usedNftImg: "3/3_used.png",
    },
    {
        name: "Кружки Crypton",
        count: 50,
        dropChance: 1,
        nftImg: "4/4.png",
        usedNftImg: "4/4_used.png",
    },
    {
        name: "Кепка Crypton",
        count: 5,
        dropChance: 0.1,
        nftImg: "5/5.png",
        usedNftImg: "5/5_used.png",
    },
    {
        name: "Original Hoodie XXL Crypton",
        count: 2,
        dropChance: 0.04,
        nftImg: "6/6.png",
        usedNftImg: "6/6_used.png",
    },
    {
        name: "Original Tee XXL Crypton",
        count: 2,
        dropChance: 0.04,
        nftImg: "7/7.png",
        usedNftImg: "7/7_used.png",
    },
    {
        name: "Tee Crypton",
        count: 50,
        dropChance: 1,
        nftImg: "8/8.png",
        usedNftImg: "8/8_used.png",
    },
    {
        name: "70 % скидка на годовой Prime",
        count: 5,
        dropChance: 0.1,
        nftImg: "9/9.png",
        usedNftImg: "9/9_used.png",
    },
    {
        name: "70 % скидка на пол года Prime",
        count: 10,
        dropChance: 0.2,
        nftImg: "10/10.png",
        usedNftImg: "10/10_used.png",
    },
    {
        name: "70 % скидка на 3 месяца Prime",
        count: 20,
        dropChance: 0.4,
        nftImg: "11/11.png",
        usedNftImg: "11/11_used.png",
    },
    {
        name: "70 % скидка на месяц Prime",
        count: 40,
        dropChance: 0.8,
        nftImg: "12/12.png",
        usedNftImg: "12/12_used.png",
    },
    {
        name: "50 % скидка на годовой Prime",
        count: 5,
        dropChance: 0.1,
        nftImg: "13/13.png",
        usedNftImg: "13/13_used.png",
    },
    {
        name: "50 % скидка на пол года Prime",
        count: 10,
        dropChance: 0.2,
        nftImg: "14/14.png",
        usedNftImg: "14/14_used.png",
    },
    {
        name: "50 % скидка на 3 месяца Prime",
        count: 20,
        dropChance: 0.4,
        nftImg: "15/15.png",
        usedNftImg: "15/15_used.png",
    },
    {
        name: "50 % скидка на месяц Prime",
        count: 40,
        dropChance: 0.8,
        nftImg: "16/16.png",
        usedNftImg: "16/16_used.png",
    },
    {
        name: "35 % скидка на годовой Prime",
        count: 10,
        dropChance: 0.2,
        nftImg: "17/17.png",
        usedNftImg: "17/17_used.png",
    },
    {
        name: "35 % скидка на пол года Prime",
        count: 20,
        dropChance: 0.4,
        nftImg: "18/18.png",
        usedNftImg: "18/18_used.png",
    },
    {
        name: "35 % скидка на 3 месяца Prime",
        count: 40,
        dropChance: 0.8,
        nftImg: "19/19.png",
        usedNftImg: "19/19_used.png",
    },
    {
        name: "35 % скидка на месяц Prime",
        count: 80,
        dropChance: 1.6,
        nftImg: "20/20.png",
        usedNftImg: "20/20_used.png",
    },
    {
        name: "25 % скидка на годовой Prime",
        count: 20,
        dropChance: 0.4,
        nftImg: "21/21.png",
        usedNftImg: "21/21_used.png",
    },
    {
        name: "25 % скидка на пол года Prime",
        count: 40,
        dropChance: 0.8,
        nftImg: "22/22.png",
        usedNftImg: "22/22_used.png",
    },
    {
        name: "25 % скидка на 3 месяца Prime",
        count: 80,
        dropChance: 1.6,
        nftImg: "23/23.png",
        usedNftImg: "23/23_used.png",
    },
    {
        name: "25 % скидка на месяц Prime",
        count: 160,
        dropChance: 3.2,
        nftImg: "24/24.png",
        usedNftImg: "24/24_used.png",
    },
    {
        name: "20 % скидка на пол года Prime",
        count: 20,
        dropChance: 0.4,
        nftImg: "25/25.png",
        usedNftImg: "25/25_used.png",
    },
    {
        name: "20 % скидка на 3 месяца Prime",
        count: 40,
        dropChance: 0.8,
        nftImg: "26/26.png",
        usedNftImg: "26/26_used.png",
    },
    {
        name: "20 % скидка на месяц Primee",
        count: 80,
        dropChance: 1.6,
        nftImg: "27/27.png",
        usedNftImg: "27/27_used.png",
    },
    {
        name: "5 % скидка на мерч CRYPTUS",
        count: 150,
        dropChance: 3,
        nftImg: "28/28.png",
        usedNftImg: "28/28_used.png",
    },
    {
        name: "10 % скидка на мерч CRYPTUS",
        count: 108,
        dropChance: 2.16,
        nftImg: "29/29.png",
        usedNftImg: "29/29_used.png",
    },
    {
        name: "15 % скидка на мерч CRYPTUS",
        count: 27,
        dropChance: 0.54,
        nftImg: "30/30.png",
        usedNftImg: "30/30_used.png",
    },
    {
        name: "30 % скидка на мерч CRYPTUS",
        count: 7,
        dropChance: 0.14,
        nftImg: "31/31.png",
        usedNftImg: "31/31_used.png",
    },
    {
        name: "50 % скидка на мерч CRYPTUS",
        count: 5,
        dropChance: 0.1,
        nftImg: "32/32.png",
        usedNftImg: "32/32_used.png",
    },
    {
        name: "Футболка CRYPTUS",
        count: 3,
        dropChance: 0.06,
        nftImg: "33/33.png",
        usedNftImg: "33/33_used.png",
    },
    {
        name: "5 % скидка на Академию",
        count: 150,
        dropChance: 3,
        nftImg: "34/34.png",
        usedNftImg: "34/34_used.png",
    },
    {
        name: "10 % скидка на Академию",
        count: 108,
        dropChance: 2.16,
        nftImg: "35/35.png",
        usedNftImg: "35/35_used.png",
    },
    {
        name: "15 % скидка на Академию",
        count: 27,
        dropChance: 0.54,
        nftImg: "36/36.png",
        usedNftImg: "36/36_used.png",
    },
    {
        name: "20 % скидка на Академию",
        count: 7,
        dropChance: 0.14,
        nftImg: "37/37.png",
        usedNftImg: "37/37_used.png",
    },
    {
        name: "25 % скидка на Академию",
        count: 7,
        dropChance: 0.14,
        nftImg: "38/38.png",
        usedNftImg: "38/38_used.png",
    },
    {
        name: "30 % скидка на Академию",
        count: 3,
        dropChance: 0.06,
        nftImg: "39/39.png",
        usedNftImg: "39/39_used.png",
    },
    {
        name: "Бесплатное обучение в Академии",
        count: 1,
        dropChance: 0.02,
        nftImg: "40/40.png",
        usedNftImg: "40/40_used.png",
    },
    {
        name: "Скидка 50$ на доступ в Union",
        count: 150,
        dropChance: 3,
        nftImg: "41/41.png",
        usedNftImg: "41/41_used.png",
    },
    {
        name: "Скидка 100$ на доступ в Union",
        count: 90,
        dropChance: 1.8,
        nftImg: "42/42.png",
        usedNftImg: "42/42_used.png",
    },
    {
        name: "Скидка 200$ на доступ в Union",
        count: 20,
        dropChance: 0.4,
        nftImg: "43/43.png",
        usedNftImg: "43/43_used.png",
    },
    {
        name: "3 месяца доступа в Union",
        count: 6,
        dropChance: 0.12,
        nftImg: "44/44.png",
        usedNftImg: "44/44_used.png",
    },
    {
        name: "Год досутпа в Union",
        count: 3,
        dropChance: 0.06,
        nftImg: "45/45.png",
        usedNftImg: "45/45_used.png",
    },
    {
        name: "Пожизненный доступ в Union",
        count: 1,
        dropChance: 0.02,
        nftImg: "46/46.png",
        usedNftImg: "46/46_used.png",
    },
    {
        name: "Tangem",
        count: 43,
        dropChance: 0.86,
        nftImg: "47/47.png",
        usedNftImg: "47/47_used.png",
    },
    {
        name: "Safepal",
        count: 85,
        dropChance: 1.7,
        nftImg: "48/48.png",
        usedNftImg: "48/48_used.png",
    },
    {
        name: "Safepal",
        count: 85,
        dropChance: 1.7,
        nftImg: "49/49.png",
        usedNftImg: "49/49_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "50/50.png",
        usedNftImg: "50/50_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "51/51.png",
        usedNftImg: "51/51_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "52/52.png",
        usedNftImg: "52/52_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "53/53.png",
        usedNftImg: "53/53_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "54/54.png",
        usedNftImg: "54/54_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "55/55.png",
        usedNftImg: "55/55_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "56/56.png",
        usedNftImg: "56/56_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "57/57.png",
        usedNftImg: "57/57_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "58/58.png",
        usedNftImg: "58/58_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "59/59.png",
        usedNftImg: "59/59_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "60/60.png",
        usedNftImg: "60/60_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "61/61.png",
        usedNftImg: "61/61_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "62/62.png",
        usedNftImg: "62/62_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "63/63.png",
        usedNftImg: "63/63_used.png",
    },
    {
        name: "Носки",
        count: 45,
        dropChance: 0.9,
        nftImg: "64/64.png",
        usedNftImg: "64/64_used.png",
    },
    {
        name: "Носки",
        count: 45,
        dropChance: 0.9,
        nftImg: "65/65.png",
        usedNftImg: "65/65_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "66/66.png",
        usedNftImg: "66/66_used.png",
    },
    {
        name: "Носки",
        count: 85,
        dropChance: 1.7,
        nftImg: "67/67.png",
        usedNftImg: "67/67_used.png",
    },
    {
        name: "Impossible Finance 50$ Аллокация",
        count: 300,
        dropChance: 6,
        nftImg: "68/68.png",
        usedNftImg: "68/68_used.png",
    },
    {
        name: "Носки",
        count: 400,
        dropChance: 8,
        nftImg: "69/69.png",
        usedNftImg: "69/69_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "70/70.png",
        usedNftImg: "70/70_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "71/71.png",
        usedNftImg: "71/71_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "72/72.png",
        usedNftImg: "72/72_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "73/73.png",
        usedNftImg: "73/73_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "74/74.png",
        usedNftImg: "74/74_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "75/75.png",
        usedNftImg: "75/75_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "76/76.png",
        usedNftImg: "76/76_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "77/77.png",
        usedNftImg: "77/77_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "78/78.png",
        usedNftImg: "78/78_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "79/79.png",
        usedNftImg: "79/79_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "80/80.png",
        usedNftImg: "80/80_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "81/81.png",
        usedNftImg: "81/81_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "82/82.png",
        usedNftImg: "82/82_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "83/83.png",
        usedNftImg: "83/83_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "84/84.png",
        usedNftImg: "84/84_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "85/85.png",
        usedNftImg: "85/85_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "86/86.png",
        usedNftImg: "86/86_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "87/87.png",
        usedNftImg: "87/87_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "88/88.png",
        usedNftImg: "88/88_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "89/89.png",
        usedNftImg: "89/89_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "90/90.png",
        usedNftImg: "90/90_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "91/91.png",
        usedNftImg: "91/91_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "92/92.png",
        usedNftImg: "92/92_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "93/93.png",
        usedNftImg: "93/93_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "94/94.png",
        usedNftImg: "94/94_used.png",
    },
    {
        name: "Носки",
        count: 25,
        dropChance: 0.5,
        nftImg: "95/95.png",
        usedNftImg: "95/95_used.png",
    },
    {
        name: "Носки",
        count: 50,
        dropChance: 1,
        nftImg: "96/96.png",
        usedNftImg: "96/96_used.png",
    },
    {
        name: "Trust Wallet Tee",
        count: 23,
        dropChance: 0.46,
        nftImg: "97/97.png",
        usedNftImg: "97/97_used.png",
    },
    {
        name: "Trust Wallet Tee",
        count: 23,
        dropChance: 0.46,
        nftImg: "98/98.png",
        usedNftImg: "98/98_used.png",
    },
    {
        name: "CC2023 Tee",
        count: 42,
        dropChance: 0.84,
        nftImg: "99/99.png",
        usedNftImg: "99/99_used.png",
    },
    {
        name: "CC2023 Tee",
        count: 42,
        dropChance: 0.84,
        nftImg: "100/100.png",
        usedNftImg: "100/100_used.png",
    },
    {
        name: "Airpods",
        count: 5,
        dropChance: 0.1,
        nftImg: "101/101.png",
        usedNftImg: "101/101_used.png",
    },
    {
        name: "Airpods",
        count: 5,
        dropChance: 0.1,
        nftImg: "102/102.png",
        usedNftImg: "102/102_used.png",
    }
];

const countNft = 5000;
const prizes = [];

const lerp = (min, max, value) => ((1 - value) * min + value * max);

const drop = items => {
    const total = items.reduce((accumulator, item) => (accumulator + item.dropChance), 0);
    const chance = lerp(0, total, Math.random());

    let current = 0;
    for (const item of items) {
        if (current <= chance && chance < current + item.dropChance) {
            return item;
        }

        current += item.dropChance;
    }
};

for (let i = 0; i < countNft; i++) {
    const newGifts = [];
    const prize = drop(gifts);
    prizes.push(prize);
    for (let gift of gifts) {
        if (prize === gift) {
            if (gift.count === 1) {
                gift = null;
            }
            if (gift?.count > 1) {
                gift.count = --gift.count
            }
        }
        newGifts.push(gift);
    }
    gifts = newGifts.filter(function (el) {
        return el != null;
    });
}

const bootstrap = async () => {
    for (let i = 0; i < countNft; i++) {
        const meta = JSON.parse(fs.readFileSync(`./${i.toString()}/${i}.json`, 'utf8'));
        meta.image = `https://raw.githubusercontent.com/cdevs-group/cryptus-nft-metadata/master/gifts/${prizes[i].nftImg}`
        meta.attributes.push({"trait_type": "Gift", "value": prizes[i].name})
        fs.writeFileSync(`./${i.toString()}/${i}.json`, JSON.stringify(meta))
    }
}

console.log(prizes.length)
bootstrap()