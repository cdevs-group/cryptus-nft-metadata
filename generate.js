const fs = require("fs");

const countNft = 5000;

const standardMeta = {
    "name": "Cryptus x Crypton 2023 #0",
    "image": "https://raw.githubusercontent.com/cdevs-group/cryptus-nft-metadata/test/0/0.png",
    "used": false,
    "attributes": [
        {
            "trait_type": "Gift1",
            "value": "iPhone 14 PRO"
        },
        {
            "trait_type": "Gift2",
            "value": "Скидка 10% на мерч Cryptus"
        },
        {
            "trait_type": "Gift3",
            "value": "Бесплатный доступ в клуб Cryptus"
        }
    ]
}

const bootstrap = () => {
    for (let i = 0; i < countNft; i++){
        fs.mkdirSync(`./${i.toString()}`, { recursive: true })
        const metaNft = standardMeta;
        metaNft.name = `Cryptus x Crypton 2023 #${i}`;
        metaNft.image = `https://raw.githubusercontent.com/cdevs-group/cryptus-nft-metadata/test/${i}/${i}.png`
        fs.writeFileSync(`./${i.toString()}/${i}.json`, JSON.stringify(metaNft))
        fs.copyFileSync('./standardNftImg.png', `./${i.toString()}/${i}.png`);
    }
}

bootstrap();