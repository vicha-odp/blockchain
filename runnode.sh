geth --networkid 1447 --datadir "." --nodiscover --http --http.port "8545" --http.addr "localhost" --port "30303" --http.corsdomain "*" --nat "any" --http.api eth,web3,personal,net,admin --unlock 0xF6be359E980E540C7F3CB67a8BD2085419d65429 --password ./password.sec --ipcpath "~/.ethereum/geth.ipc" --allow-insecure-unlock --nousb --syncmode "full"
