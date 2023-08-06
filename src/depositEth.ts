import { CrossChainMessenger, NumberLike } from "@eth-optimism/sdk";
import { showBalances } from "./showBalances";
import { parseEther } from "viem";
import { wait } from "./utils";

export const explorer = 'https://goerli.etherscan.io'

export async function depositEth(crossChainMessenger: CrossChainMessenger, amount: `${number}`) {
  const wei = parseEther(amount); // 0.1 ETH in Wei
  console.log("Fetching current balances...");

  await showBalances(crossChainMessenger);
  console.log("Initiating ETH transfer from L1 to L2...");

  const depositResponse = await crossChainMessenger.depositETH(
    wei as unknown as NumberLike
  );
  console.log(
    `Transaction hash for deposit from L1 to L2: ${depositResponse.hash}`
  );
  console.log(
    `See on Goerli Etherscan: ${explorer}/tx/${depositResponse.hash}`
  );
    await wait(30 * 1000)
//   await depositResponse.wait();
  console.log("Waiting for deposit transaction to be relayed...");
  console.log("----------------------------------");

  //   await crossChainMessenger.waitForMessageStatus(
  //     depositResponse.hash,
  //     MessageStatus.RELAYED
  //   );
  console.log("ETH transfer from L1 to L2 is complete.");
  console.log("Updating current balances...");
  console.log("----------------------------------");

  await showBalances(crossChainMessenger);

  return depositResponse.hash
}
