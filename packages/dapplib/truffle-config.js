require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember slow half clinic foster seminar'; 
let testAccounts = [
"0xe7feedc7a7fade8096f780fd5a053c40fa040f4c1e3114e74ea931c44b97cc29",
"0xb410f7809a7d2810db97e4620b744cc2a25c3d8ea40dc284eee5b383d0568ed1",
"0x479f872fb1e57f123c03e7bc69e125cf7bb405cf8a601ecaa9078ab07538b53b",
"0x7af0f342900878941d5462e8058b50875ef8069bfe6c6e17f419900d35d6beca",
"0xe0b6998306f38424e50333e3fdd33b09728c9600d15f7845261ef00fd9bcb8f8",
"0x60c58b99992c0c42587554d3f1ebf22bb9a3200ac26442a658370b18f3349c39",
"0x39b110403949215a62759bfc5e6f8f43cb793fad3aa683a7939115c3264147ac",
"0x5751f91d7a4685a27b158bf37646f132957f5577df5f2e3108d008c68cd5059b",
"0x2e1a8c7dad72ee5d07cd540b959f18a5e143fc22a83009c7de3e5a947e447203",
"0x341905fbdcfcdcef60972d3c5444ab9d32bcb5be33d4557284ca97d03882fad9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


