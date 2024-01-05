import logo from './logo.svg';
import './App.css';
import { SwapKitCore, Chain, WalletOption } from '@swapkit/core';
import { evmWallet } from '@swapkit/wallet-evm-extensions';

const client = new SwapKitCore();
client.extend({ 
  config: {
    stagenet: false,
    /**
     * @required for AVAX, BSC, ARB, MATIC & OP
     */
    covalentApiKey: "string",
    /**
     * @required for ETH
     */
    ethplorerApiKey: "string",
    /**
     * @required for BTC, LTC, DOGE & BCH
     */
    utxoApiKey: "string",
    /**
     * @required for Walletconnect
     */
    walletConnectProjectId: "string",
    /**
     * @optional for Trezor config
     */
    trezorManifest: {
        email: "glorydream413@gmail.com",
        appUrl: "string"
    }
  },
  wallets: [evmWallet] 
});

// WalletOption.BRAVE | WalletOption.METAMASK | WalletOption.TRUSTWALLET_WEB | WalletOption.COINBASE_WEB
await client.connectEVMWallet([Chain.ETH], WalletOption.METAMASK)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
