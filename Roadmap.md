# High level overview of next steps
- [ ] Redevelop our [website](https://github.com/kudoo-cloud/website) and [docs](https://github.com/kudoo-cloud/docs)
- [ ] Upgrade all our [shared-components](https://github.com/kudoo-cloud/shared-components)
- [ ] Form social channels. Specifically Telegram. Update the existing social channels
- [ ] Build Authentication with Metamask
- [ ] Build the Token contracts on Avalanche and deploy to FUJI
- [ ] List our token on the ICODrops website
- [ ] Develop initial UX

## UX work
- [ ] Research 
## Development


## User signs in
We can give users the option to sign in using their contract address via Metamask. In future we'd like to use something like Litentry. This is obviously not ideal, but once an Avalanche Identity management tool comes out we'll then embrace that for providing identiry.

## User loads a token
We will use the following repo in order to get the list of Tokens:
https://github.com/ava-labs/bridge-tokens/blob/main/eth_token_mapping.csv

Anyone can load a Token. If however the Token has already been loaded, then you can Join that Project's governance project. If however someone is squatting on your token, then we need to have an ability to reclaim the token. 

To prevent squatting someone needs to purchase our Token. This token goes into the Governance of Kropotkin.

## User defines governance policy
First phase is to develop the following Voting structures:
* Majoritarian
* Proportional (Preferential)
* Quadratic

As well as whether voting will be:
* On chain
* Off chain

We only support on chain voting for the Avalanche mainnet


