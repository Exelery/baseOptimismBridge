import { ethers } from "ethers";
import {
  CrossChainMessenger,
  L2ChainID,
  L1ChainID,
  DEPOSIT_CONFIRMATION_BLOCKS,
  CHAIN_BLOCK_TIMES,
} from "@eth-optimism/sdk";
import "dotenv/config";



const goerliRpc = "https://rpc.ankr.com/eth_goerli";

// const goerliRpc = process.env.GOERLI_RPC;

const baseRpc = "https://goerli.base.org";

const l1Provider = new ethers.providers.JsonRpcProvider(goerliRpc);
const l2Provider = new ethers.providers.JsonRpcProvider(baseRpc);

async function getSigners(privateKey: string) {
  //   const privateKey = PRIVATE_KEY;
  const l1Wallet = new ethers.Wallet(privateKey, l1Provider);
  const l2Wallet = new ethers.Wallet(privateKey, l2Provider);

  return [l1Wallet, l2Wallet];
}

async function chainIds() {
  const l1Network = await l1Provider.getNetwork();
  const l2Network = await l2Provider.getNetwork();

  const l1ChainId = l1Network.chainId;
  const l2ChainId = l2Network.chainId;

  return [l1ChainId, l2ChainId];
}

export async function initialize(privateKey: string) {
  const [l1Signer, l2Signer] = await getSigners(privateKey);
  const [l1ChainId, l2ChainId] = await chainIds();
  const zeroAddr = "0x".padEnd(42, "0");


  const crossChainMessenger = new CrossChainMessenger({
    l1ChainId: L1ChainID.GOERLI,
    l2ChainId: L2ChainID.BASE_GOERLI,
    l1SignerOrProvider: l1Signer,
    l2SignerOrProvider: l2Signer,
    depositConfirmationBlocks: DEPOSIT_CONFIRMATION_BLOCKS[L2ChainID.BASE_GOERLI],
    l1BlockTimeSeconds: CHAIN_BLOCK_TIMES[L1ChainID.GOERLI], 
    bedrock: true, //maybe not
  });

  return crossChainMessenger;
}
