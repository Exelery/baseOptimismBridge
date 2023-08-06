import { CrossChainMessenger } from "@eth-optimism/sdk";

import { wait } from "./utils";

export async function proveWithdrawal(
  crossChainMessenger: CrossChainMessenger,
  hash: string
) {
  try {

    // console.log('gas', gas._hex)
    console.log("Start  prove withdraw for hash", hash);
    const proof = await crossChainMessenger.proveMessage(hash, {overrides: {gasLimit: 370000, }});
    console.log("Waiting for  prove withdraw");
    await wait(10 * 1000);
    // console.log("step 2");

    await proof.wait();

    await wait(1 * 60 * 1000);
    console.log('aprove hash', hash, 'successfully')
    return hash;
  } catch (error) {
    console.log(error)
  }
}
