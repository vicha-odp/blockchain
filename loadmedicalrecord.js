var medicalrecord_abi = [{ "inputs": [{ "internalType": "string", "name": "DrID", "type": "string" }, { "internalType": "string", "name": "drName", "type": "string" }, { "internalType": "string", "name": "drSpecialist", "type": "string" }], "name": "addDoctor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "PatID", "type": "string" }, { "internalType": "string", "name": "patName", "type": "string" }, { "internalType": "string", "name": "patAddress", "type": "string" }, { "internalType": "string", "name": "patAyah", "type": "string" }, { "internalType": "string", "name": "patIbu", "type": "string" }, { "internalType": "string", "name": "patMR", "type": "string" }], "name": "addPatient", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "PatID", "type": "string" }, { "internalType": "string", "name": "medrec", "type": "string" }], "name": "addRecord", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "DrID", "type": "string" }], "name": "getDrInfo", "outputs": [{ "internalType": "string", "name": "drName", "type": "string" }, { "internalType": "string", "name": "drSpecialist", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "PatID", "type": "string" }], "name": "getPatInfo", "outputs": [{ "internalType": "string", "name": "patName", "type": "string" }, { "internalType": "string", "name": "patAddress", "type": "string" }, { "internalType": "string", "name": "patAyah", "type": "string" }, { "internalType": "string", "name": "patIbu", "type": "string" }, { "internalType": "string", "name": "patMR", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "PatID", "type": "string" }], "name": "getRecord", "outputs": [{ "internalType": "string", "name": "medrec", "type": "string" }], "stateMutability": "view", "type": "function" }];

var bytecode_mr = '608060405234801561001057600080fd5b50611124806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806311dd8845146100675780635911bc2d14610097578063a4f3cc23146100b3578063c9596248146100cf578063cb0dae20146100eb578063d8f0995a1461011f575b600080fd5b610081600480360381019061007c91906109c8565b610150565b60405161008e9190610a90565b60405180910390f35b6100b160048036038101906100ac9190610ab2565b610203565b005b6100cd60048036038101906100c89190610b59565b610266565b005b6100e960048036038101906100e49190610c8e565b610359565b005b610105600480360381019061010091906109c8565b61038c565b604051610116959493929190610d06565b60405180910390f35b610139600480360381019061013491906109c8565b610708565b604051610147929190610d7c565b60405180910390f35b60606002826040516101629190610def565b9081526020016040518091039020600001805461017e90610e35565b80601f01602080910402602001604051908101604052809291908181526020018280546101aa90610e35565b80156101f75780601f106101cc576101008083540402835291602001916101f7565b820191906000526020600020905b8154815290600101906020018083116101da57829003601f168201915b50505050509050919050565b816000846040516102149190610def565b90815260200160405180910390206000019081610231919061101c565b50806000846040516102439190610def565b90815260200160405180910390206001019081610260919061101c565b50505050565b846001876040516102779190610def565b90815260200160405180910390206000019081610294919061101c565b50836001876040516102a69190610def565b908152602001604051809103902060010190816102c3919061101c565b50826001876040516102d59190610def565b908152602001604051809103902060020190816102f2919061101c565b50816001876040516103049190610def565b90815260200160405180910390206003019081610321919061101c565b50806001876040516103339190610def565b90815260200160405180910390206004019081610350919061101c565b50505050505050565b8060028360405161036a9190610def565b90815260200160405180910390206000019081610387919061101c565b505050565b60608060608060606001866040516103a49190610def565b90815260200160405180910390206000016001876040516103c59190610def565b90815260200160405180910390206001016001886040516103e69190610def565b90815260200160405180910390206002016001896040516104079190610def565b908152602001604051809103902060030160018a6040516104289190610def565b908152602001604051809103902060040184805461044590610e35565b80601f016020809104026020016040519081016040528092919081815260200182805461047190610e35565b80156104be5780601f10610493576101008083540402835291602001916104be565b820191906000526020600020905b8154815290600101906020018083116104a157829003601f168201915b505050505094508380546104d190610e35565b80601f01602080910402602001604051908101604052809291908181526020018280546104fd90610e35565b801561054a5780601f1061051f5761010080835404028352916020019161054a565b820191906000526020600020905b81548152906001019060200180831161052d57829003601f168201915b5050505050935082805461055d90610e35565b80601f016020809104026020016040519081016040528092919081815260200182805461058990610e35565b80156105d65780601f106105ab576101008083540402835291602001916105d6565b820191906000526020600020905b8154815290600101906020018083116105b957829003601f168201915b505050505092508180546105e990610e35565b80601f016020809104026020016040519081016040528092919081815260200182805461061590610e35565b80156106625780601f1061063757610100808354040283529160200191610662565b820191906000526020600020905b81548152906001019060200180831161064557829003601f168201915b5050505050915080805461067590610e35565b80601f01602080910402602001604051908101604052809291908181526020018280546106a190610e35565b80156106ee5780601f106106c3576101008083540402835291602001916106ee565b820191906000526020600020905b8154815290600101906020018083116106d157829003601f168201915b505050505090509450945094509450945091939590929450565b60608060008360405161071b9190610def565b908152602001604051809103902060000160008460405161073c9190610def565b908152602001604051809103902060010181805461075990610e35565b80601f016020809104026020016040519081016040528092919081815260200182805461078590610e35565b80156107d25780601f106107a7576101008083540402835291602001916107d2565b820191906000526020600020905b8154815290600101906020018083116107b557829003601f168201915b505050505091508080546107e590610e35565b80601f016020809104026020016040519081016040528092919081815260200182805461081190610e35565b801561085e5780601f106108335761010080835404028352916020019161085e565b820191906000526020600020905b81548152906001019060200180831161084157829003601f168201915b5050505050905091509150915091565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108d58261088c565b810181811067ffffffffffffffff821117156108f4576108f361089d565b5b80604052505050565b600061090761086e565b905061091382826108cc565b919050565b600067ffffffffffffffff8211156109335761093261089d565b5b61093c8261088c565b9050602081019050919050565b82818337600083830152505050565b600061096b61096684610918565b6108fd565b90508281526020810184848401111561098757610986610887565b5b610992848285610949565b509392505050565b600082601f8301126109af576109ae610882565b5b81356109bf848260208601610958565b91505092915050565b6000602082840312156109de576109dd610878565b5b600082013567ffffffffffffffff8111156109fc576109fb61087d565b5b610a088482850161099a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a4b578082015181840152602081019050610a30565b60008484015250505050565b6000610a6282610a11565b610a6c8185610a1c565b9350610a7c818560208601610a2d565b610a858161088c565b840191505092915050565b60006020820190508181036000830152610aaa8184610a57565b905092915050565b600080600060608486031215610acb57610aca610878565b5b600084013567ffffffffffffffff811115610ae957610ae861087d565b5b610af58682870161099a565b935050602084013567ffffffffffffffff811115610b1657610b1561087d565b5b610b228682870161099a565b925050604084013567ffffffffffffffff811115610b4357610b4261087d565b5b610b4f8682870161099a565b9150509250925092565b60008060008060008060c08789031215610b7657610b75610878565b5b600087013567ffffffffffffffff811115610b9457610b9361087d565b5b610ba089828a0161099a565b965050602087013567ffffffffffffffff811115610bc157610bc061087d565b5b610bcd89828a0161099a565b955050604087013567ffffffffffffffff811115610bee57610bed61087d565b5b610bfa89828a0161099a565b945050606087013567ffffffffffffffff811115610c1b57610c1a61087d565b5b610c2789828a0161099a565b935050608087013567ffffffffffffffff811115610c4857610c4761087d565b5b610c5489828a0161099a565b92505060a087013567ffffffffffffffff811115610c7557610c7461087d565b5b610c8189828a0161099a565b9150509295509295509295565b60008060408385031215610ca557610ca4610878565b5b600083013567ffffffffffffffff811115610cc357610cc261087d565b5b610ccf8582860161099a565b925050602083013567ffffffffffffffff811115610cf057610cef61087d565b5b610cfc8582860161099a565b9150509250929050565b600060a0820190508181036000830152610d208188610a57565b90508181036020830152610d348187610a57565b90508181036040830152610d488186610a57565b90508181036060830152610d5c8185610a57565b90508181036080830152610d708184610a57565b90509695505050505050565b60006040820190508181036000830152610d968185610a57565b90508181036020830152610daa8184610a57565b90509392505050565b600081905092915050565b6000610dc982610a11565b610dd38185610db3565b9350610de3818560208601610a2d565b80840191505092915050565b6000610dfb8284610dbe565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e4d57607f821691505b602082108103610e6057610e5f610e06565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610ec87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610e8b565b610ed28683610e8b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610f19610f14610f0f84610eea565b610ef4565b610eea565b9050919050565b6000819050919050565b610f3383610efe565b610f47610f3f82610f20565b848454610e98565b825550505050565b600090565b610f5c610f4f565b610f67818484610f2a565b505050565b5b81811015610f8b57610f80600082610f54565b600181019050610f6d565b5050565b601f821115610fd057610fa181610e66565b610faa84610e7b565b81016020851015610fb9578190505b610fcd610fc585610e7b565b830182610f6c565b50505b505050565b600082821c905092915050565b6000610ff360001984600802610fd5565b1980831691505092915050565b600061100c8383610fe2565b9150826002028217905092915050565b61102582610a11565b67ffffffffffffffff81111561103e5761103d61089d565b5b6110488254610e35565b611053828285610f8f565b600060209050601f8311600181146110865760008415611074578287015190505b61107e8582611000565b8655506110e6565b601f19841661109486610e66565b60005b828110156110bc57848901518255600182019150602085019450602081019050611097565b868310156110d957848901516110d5601f891682610fe2565b8355505b6001600288020188555050505b50505050505056fea264697066735822122035652f97e557fc1f7361cf19eefa9ead58df7ac2da5dc818020c8dea0cdbeba264736f6c63430008110033081519050919050565b600082825260208201905092915050565b60005b838110156103ec5780820151818401526020810190506103d1565'

var mr = eth.contract(medicalrecord_abi)