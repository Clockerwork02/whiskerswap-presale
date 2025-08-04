# WhiskerSwap Token (WSKR) Presale

A professional multi-chain token presale platform for WhiskerSwap Token with real-time blockchain transaction monitoring.

## Features

- **Multi-Chain Support**: HyperEVM and Solana blockchain integration
- **Real-Time Monitoring**: Automatic blockchain transaction detection every 10-15 seconds
- **Authentic Wallet Integration**: MetaMask (HyperEVM) and Phantom (Solana) support
- **Live Progress Tracking**: Progress bar updates from actual blockchain transactions
- **Professional UI**: Clean, modern design inspired by WhiskerSwap aesthetics

## Token Details

- **Total Supply**: 1 billion WSKR tokens
- **Conversion Rates**: 
  - 1 HYPE = 25,000,000 WSKR
  - 1 SOL = 5,000,000 WSKR
- **Presale Wallets**:
  - HyperEVM: `0xCbd45BE04C2CB52811609ef0334A9097fB2E2c48`
  - Solana: `6Q1EWhFuPERHUE3pY4iwBWZs2CMLBeAXPC8dpk3dRFYP`

## Setup

1. Clone the repository
2. Set up environment variables (see Environment Variables section)
3. Run the server: `node server.js`
4. Access the presale at `http://localhost:5000`

## Environment Variables

Create a `.env` file with:

```
ALCHEMY_SOLANA_RPC_URL=your_alchemy_solana_rpc_url
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js with Express
- **Blockchain**: 
  - HyperEVM RPC: `https://rpc.hyperliquid.xyz/evm`
  - Solana RPC: Alchemy endpoint
- **Wallet Libraries**: Solana Web3.js

## Real-Time Monitoring

The platform continuously monitors both blockchains:
- HyperEVM: Every 10 seconds
- Solana: Every 15 seconds

When transactions are detected to presale wallets, the progress bar updates automatically.

## About WhiskerSwap

WhiskerSwap is a DEX aggregator platform where WSKR token holders receive 80% of all trading fees through staking rewards.

## License

MIT License