import { createPublicClient, createWalletClient, http, formatEther, toHex, hexToString } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { holesky, sepolia } from "viem/chains";
import { abi, bytecode } from "../artifacts/contracts/Ballot.sol/Ballot.json";
import process from 'process';
import * as dotenv from "dotenv";

dotenv.config();

const alchemyApiKey: string = process.env.ALCHEMY_API_KEY || "";
const infuraApiKey: string = process.env.INFURA_API_KEY || "";
const infuraSecretKey: string = process.env.INFURA_SECRET_KEY || "";
const etherScanApiKey: string = process.env.ETHERSCAN_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";


async function queryingResult(publicClient: any){
    const parameters = process.argv.slice(2);
    if (!parameters || parameters.length < 1)
      throw new Error("Parameters not provided");
    const contractAddress = parameters[0] as `0x${string}`;
    if (!contractAddress) throw new Error("Contract address not provided");
    if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
      throw new Error("Invalid contract address");

    let index = 0;
    while (true) {
        try {
            const proposal = await publicClient.readContract({
                address: contractAddress,
                abi,
                functionName: "proposals",
                args: [BigInt(index)],
            });
            console.log("Proposal number: ", index++, ", Proposal: ", hexToString(proposal[0], { size: 32 }), ", Vote count: ", proposal[1]);
        } catch (error) {
            // When we hit an out-of-bounds error, break and return the count
            // console.log(`Number of proposals: ${index}`);
            // return index;
            break;
        }
    }
    
}

export { queryingResult };
