import logo from './logo.svg';
import './App.css';
import { SwapKitCore, Chain } from '@swapkit/core';
import { walletconnectWallet } from '@swapkit/wallet-wc';

const client = new SwapKitCore();
client.extend({ wallets: [walletconnectWallet] });

await client.connectWalletconnect([Chain.ETH], { options: {}, listeners: {} })

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
