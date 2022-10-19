// seeders - это такая "прослойка" до сервера, чтобы, в случае, когда сервер недоступен, была возможность демонстрации
// что-то вроде демоверсии, дефолтных значений, которые показываются до загрузки сервера
export default [
    {
        id: 1,
        alias: 'archer', // уникальное текстовое значение без заглавных букв и пробелов
        name: 'Archer',
        description: 'The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.',
        // все файлы хранятся в том числе в кэше, чтобы не подгружать их заново, если они не изменились
        // если название осталось прежним, будет считаться, что картинка та же
        // даже если это уже другая картинка под тем же названием
        // поэтому нужно использовать require - он будет использовать название картинки с хэш кодом в конце
        // изменение картинки приведет к изменению хэш кода, даже если само название прежнее
        img: require('@/assets/img/archer.png'),
        level: 6,
        info: [
            { title: 'training', value: '25s' },
            { title: 'speed', value: '24' },
            { title: 'cost', value: '300' }
        ]
    },
    {
        id: 2,
        alias: 'wizard',
        name: 'Wizard',
        description: 'The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!',
        img: require('@/assets/img/wizard.png'),
        level: 5,
        info: [
            { title: 'training', value: '5m' },
            { title: 'speed', value: '16' },
            { title: 'cost', value: '3800' }
        ]
    },
    {
        id: 3,
        alias: 'giant',
        name: 'Giant',
        description: 'Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you will see their fury unleashed!',
        img: require('@/assets/img/giant.png'),
        level: 3,
        info: [
            { title: 'training', value: '2m' },
            { title: 'speed', value: '12' },
            { title: 'cost', value: '2250' }
        ]
    },
    {
        id: 4,
        alias: 'barbarian',
        name: 'Barbarian',
        description: 'The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.',
        img: require('@/assets/img/barbarian.png'),
        level: 5,
        info: [
            { title: 'training', value: '20s' },
            { title: 'speed', value: '16' },
            { title: 'cost', value: '150' }
        ]
    },
    {
        id: 5,
        alias: 'goblin',
        name: 'Goblin',
        description: 'These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.',
        img: require('@/assets/img/goblin.png'),
        level: 4,
        info: [
            { title: 'training', value: '30s' },
            { title: 'speed', value: '32' },
            { title: 'cost', value: '100' }
        ]
    }

]