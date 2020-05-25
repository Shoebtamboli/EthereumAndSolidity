const HDWallerProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('../inbox/compile');

const provider = new HDWallerProvider(
    'bubble accuse fox sustain add fetch install question minor sunny easily kid',
    'https://rinkeby.infura.io/v3/7d6e1a7deffa4c09afec87b237125a63'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    // for truffle-hdwallet-provider version 0.0.3

    /* const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data:bytecode, arguments:['Hi there!'] })
        .send({gas:'1000000', from: accounts[0] }); */

    // for truffle-hdwallet-provider version 0.0.4 and above

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode, arguments:['Hi there!'] })
        .send({ from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};

deploy();