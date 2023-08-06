// работает но не записывается в историю и как то дорого

// import { initialize } from "./config";
// import 'dotenv/config'
// import { depositEth } from "./depositEth";
// import { withdrawETH } from "./withdraw";
// import { wait } from "../../utils";
// import { proveWithdrawal } from "./proveWithdraw";
// import { finalizeWithdrawal } from "./finalizeWithdraw";
// import { showBalances } from "./showBalances";
// import { createPublicClient, http } from "viem";
// import { baseGoerli } from "viem/chains";


// const privateKey = process.env.PRIVATE_KEY!;
// export async function main() {

//     const crossChainMessenger = await initialize(privateKey)


//     const depositHash = await depositEth(crossChainMessenger, '0.02')

//     console.log('depositHash', depositHash)

//     await wait(1 * 60 * 1000)

//     // const withdrawHash = await withdrawETH(crossChainMessenger, '0.018')

//     // console.log('withdrawHash', withdrawHash)

//     // await wait(2 * 60 * 1000)

//     // const proveHash = proveWithdrawal(crossChainMessenger, withdrawHash)

//     // console.log('proveHash', proveHash)

//     // await wait(1 * 60 * 1000)

//     // const finalizeHash = finalizeWithdrawal(crossChainMessenger, withdrawHash)

//     // console.log('finalizeHash', finalizeHash)

//     // await wait(1 * 60 * 1000)

//     // await showBalances(crossChainMessenger)
// }



// async function main2() {

//     const crossChainMessenger = await initialize(privateKey)

//     // const hash = '0xf04a74a2e648812afc5955777b04b9bfca352fc6032160e5cce1580c17761cf9'
//     const hash = '0x5ddf0fc6de4936b6f8a19cf1752e2bceb9703cb1995ce2f5a514285e9d9b3511'
    
//     const publicClient = createPublicClient({
//         chain: baseGoerli,
//         transport: http()
//     })

//     const txReceipt = await publicClient.getTransactionReceipt({hash})
//     // const status = await crossChainMessenger.getMessageStatus('0x3e875efC912278D031c2b5C192ee588365E15781')
//     const messages = await     crossChainMessenger.getMessagesByTransaction(hash, {direction: 1})
//     console.log('messages', messages)
//     // const gas = await crossChainMessenger.estimateMessageWaitTimeSeconds(hash)

//     // console.log('status', gas)
//     // const proveHash = await proveWithdrawal(crossChainMessenger, hash)

//     // console.log('proveHash', proveHash)

//     // await wait(1 * 60 * 1000)

//     // const answer = await crossChainMessenger.getWithdrawalsByAddress('0x3e875efC912278D031c2b5C192ee588365E15781', {fromBlock: 7365956, toBlock: 7374675})
//     // console.log('answer', answer)
//     // const finalizeHash = await finalizeWithdrawal(crossChainMessenger, hash)

//     // console.log('finalizeHash', finalizeHash)

//     // await wait(1 * 60 * 1000)

//     await showBalances(crossChainMessenger)
// }

// main2()