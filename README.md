# Sample Viem Project

This project deals with Ballot Contract. To run the program do this:

```shell
npx ts-node ./scripts/Ballot.ts <contract_address> <other>
```

Then, this menu will be shown for you and then based on your needs, select `r, c, d, w, q`.

```bash
Enter 'r' for GiveRightVote [<contract_address>, <voter_address>]
Enter 'c' for CastVote [<contract_address>, <proposal_number>]
Enter 'd' for DelegateVote [<contract_address>, <delegete_address>]
Enter 'w' for GetWinningProposal [<contract_address>]
Enter 'q' for QueryingResult [<contract_address>]
```