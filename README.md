# Kropotkin

`A governance framework for a fair and equitable society`

Please read the [Tokenomics](Tokenomics.md) document if you'd like to understand the Tokenomics of the project.

Please read the [Roadmap](Roadmap.md) for our plans moving forward.

You can also find the early drafts of our Kropotkin Improvement Protocols under the KIP directory.

# Overview of the application
Kropotkin aims to be the next evolution of Governance within the broader cryptosphere. 

The application will allow both on and off chain governance for crypto projects.

Initially on chain governance will only be supported on the Avalanche blockchain. 

Crypto projects can use Kropotkin in order to establish governance policies for their projects. These policies will be templated into recognizable starter kits. As an example, you may choose a Governance structure from:
* Singapore (Meritocracy)
* Plato (Noocracy or philosopher kings) 
* Australia (Preferential voting)
* Scientific (Quadratic voting)

Or you could define a governance structure completely tailored to your project and organization.

The data from the governance structures will then be used to discover relationships in some common problems in voting such as:
* voting paradox
* majority rule
* separation of powers

Eventually the goal is to compare the wants of the voters with the on chain implementation of the votes to compare efficiency and usefulness of differing governance structures in achieving voters goals.

Crypto projects represent the biggest social experiment in decentralized governance the world has ever seen. We intend to mine that data in order to better understand the social structures needed for a more fair and equitable society. 

# Getting started
First you'll need to make sure you have a [local node running](https://docs.avax.network/build/get-started). 

If running a development node, it's recommended to connect to Fuji
`./avalanchego --network-id=fuji`

Now we need to create an env file. Populate this file with the information from the node you'd like to interact with.

//TODO: Complete this section and also add environment variables to `index.ts`

We need to make sure we have a user registered on the KeyStore.

I use the Postman collection to register

I then create an Address and then use the [Avalanche faucet](https://faucet.avax-test.network/) to get some funds!

* Create the following accounts:
[1. Developers 2. User research 3. Liquidity Providers 4. Vested]
* Send 100,000 `KROP` to Developers
* Send 50,000 `KROP` to User Research
* Send 50,000 `KROP` to Liquidity Providers
* Send 800,000 to Vested contract
