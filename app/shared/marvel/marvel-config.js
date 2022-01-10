angular.module('marvel-app').value('config', {
    host: 'https://gateway.marvel.com',
    // pubkey: '5a237863b3cc2061003cbbc4fe20dc06',
    // privkey: 'fbf255068eccea6d0ef951b9f25626b57ab2fe72',
    pubkey: 'deb0aa0a1b27a31df5dae071e705560d',
    privkey: 'e78e90e130b1bf78d684baf1fa6b1cd33ec31c33',
    apis: {
        search: '/v1/public/characters',
        details: '/v1/public/characters/{characterId}'
    }
});