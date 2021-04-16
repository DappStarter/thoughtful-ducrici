require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inner drop tail solution mansion creek stick mad good prison symptom stadium'; 
let testAccounts = [
"0xc6265b521865e93ebc605ab35d8ce3837f72d2692df7ce3474ebc9fad912898b",
"0xc07384126d420dbad9c689510bc01eab88886d44e8793ddafd1a1fecaa3f33c2",
"0x2b681f8e4c27fce26a2dce58a5343adad9f1e63f2380fa0fcdb0cc6968ba2d7e",
"0x71aae09066f322d480226680f224d6492201cced0b95b5ed6a73fd570d3a4ef5",
"0x250f4c983f391132e45a23ea209c0211df86151ea7e9c091ea6e8d87ea369444",
"0xf0fb3eee14f778638cfec0bf39e988723ddb4c7e5f0ec12b60c4d6785a8b4164",
"0x2cf4f0ac74625c02a7eb4c4a6d1e74746368cb0b33a54fdce138a9002303c753",
"0x5b401b352f793e4900d629d2fe7db09a7aa309635c8ce477d9b3b3e63c854af2",
"0x1262369e2e8b59f6650f37c230b8beaa99576db6ed06284d2e1adb1277d3df1f",
"0x33662b8c6dc307771a5e6472f46b21c34b3cde90e024de7693548bd642f87291"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

