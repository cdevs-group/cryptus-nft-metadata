const fs = require("fs");

const countNft = 5000;

const bootstrap = async () => {
    for (let i = 0; i < countNft; i++) {
        const meta = JSON.parse(fs.readFileSync(`./${i.toString()}/${i}.json`, 'utf8'));
        if (meta.attributes.length === 0) continue;
        if (meta.used) continue;
        // if (meta.attributes[0]['value'].includes('Prime')) continue;
        if (meta.attributes[0]['value'].includes('Impossible')) continue;

        meta.used = true;
        meta.image = meta.image.replace('.png', '_used.png');
        fs.writeFileSync(`./${i.toString()}/${i}.json`, JSON.stringify(meta));
    }
}

bootstrap()