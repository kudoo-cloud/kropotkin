# mutual-aid
A governance framework

# Todo
- [ ] Update documentation

# Roadmap
## Product Flow
User signs in - > User loads a Token -> User defines Governance policy

### User signs in
We can give users the option to sign in using their contract address via Metamask. In future we'd like to use something like Litentry. This is obviously not ideal, but once an Avalanche Identity management tool comes out we'll then embrace that for providing identiry.

### User loads a token
We will use the following repo in order to get the list of Tokens:
https://github.com/ava-labs/bridge-tokens/blob/main/eth_token_mapping.csv

Anyone can load a Token. If however the Token has already been loaded, then you can Join that Project's governance project. If however someone is squatting on your token, then we need to have an ability to reclaim the token. 

To prevent squatting someone needs to purchase our Token. This token goes into the Governance of Mutual-Aid.

### User defines governance policy
We will provide the following options:
* Voting type


There should be two options for voting. On chain versus Offchain. Snapshot currently uses Off chain, but for Quadratic voting we'd need on chain voting on our own Token

