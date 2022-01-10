angular.module('marvel-app').value('config', {
    host: 'https://gateway.marvel.com',
    pubkey: '5a237863b3cc2061003cbbc4fe20dc06',
    privkey: 'fbf255068eccea6d0ef951b9f25626b57ab2fe72',
    apis: {
        search: '/v1/public/characters',
        details: '/v1/public/characters/{characterId}'
    }
});