import { CrossChainMessenger } from "@eth-optimism/sdk";

import { wait } from "./utils";

export async function finalizeWithdrawal(
  crossChainMessenger: CrossChainMessenger,
  hash: string
) {
  try {
    console.log("Start  finalize withdraw for hash", hash);
    const proof = await crossChainMessenger.finalizeMessage(hash,  {overrides: {gasLimit: 427985 }});
    console.log("Waiting for  finalize withdraw");
    await wait(10 * 1000);
    // console.log("step 2");
    console.log(proof.hash)

    await proof.wait();

    await wait(1 * 60 * 1000);
    console.log('finalize hash', hash, 'successfully')

    return hash;
  } catch (error) {
    console.log( error);
  }
}
