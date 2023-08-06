import { CrossChainMessenger } from "@eth-optimism/sdk";
import { ethers } from "ethers";

const l1TokenName = 'ETH'
const l2TokenName = 'ETH'

export async function showBalances(crossChainMessenger: CrossChainMessenger) {
    const l1Balance = (
      await crossChainMessenger.l1Signer.getBalance()
    ).toString();
    const l2Balance = (
      await crossChainMessenger.l2Signer.getBalance()
    ).toString();
  
    console.log(
      `Balance on L1: ${ethers.utils.formatEther(l1Balance).slice(0, -8)} eth`
    );
    console.log(
      `Balance on L2: ${ethers.utils.formatEther(l2Balance).slice(0, -8)} eth`
    );
    console.log("----------------------------------");
  }