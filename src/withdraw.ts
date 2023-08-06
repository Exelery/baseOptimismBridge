import { CrossChainMessenger, MessageStatus, NumberLike } from "@eth-optimism/sdk";
import { parseEther } from "viem";
import { wait } from "./utils";

export const explorer = 'https://goerli.basescan.org'


 export async function withdrawETH(crossChainMessenger: CrossChainMessenger, amount: `${number}`) {
    const wei = parseEther(amount); // 0.1 ETH in Wei
  
    const withawResponse = await crossChainMessenger.withdrawETH(
      wei as unknown as NumberLike
    );
  
    console.log(withawResponse.hash);
  
    await withawResponse.wait();

    console.log(
      `See on Goerli BaseScan: ${explorer}/tx/${withawResponse.hash}`
    );

    await wait(60 * 1000)
  
    // const status = await crossChainMessenger.getMessageStatus(withawResponse)
    // await crossChainMessenger.waitForMessageStatus(
    //   withawResponse.hash,
    //   MessageStatus.
    // );

    // console.log(status)

    console.log("withdraw is complete.");
    console.log("Updating current balances...");
    console.log("----------------------------------");
    // showBalances(crossChainMessenger);
    return withawResponse.hash
  }