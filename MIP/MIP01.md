YIP-57: Funding Yearn's Future #QmX8oYT
Closed
Authors
@aleks-blockchaincap @banteg @dudesahn @ekrenzke @lehnberg @milkyklim @ryanwatkins @srs-parafi @tracheopteryx @vooncer @yfi-cent

Summary
Safeguard Yearn's future development. Mint 6,666 YFI. Use ~1/3 of minted YFI to reward key contributors and put ~2/3 of minted YFI in the Treasury under the control of the community through future proposals.

Abstract
If adopted, this proposal seeks to:

Mint 6,666 YFI.
Allocate ~1/3 of the minted YFI to key contributors as vesting retention packages.
Allocate the remaining ~2/3 to the Treasury, which will be deployed through existing Governance for various uses, for example:
Future contributor incentives
Liquidity mining programs
Staking rewards
Protocol mergers & talent acquisitions
Cross-protocol incentives to tighten co-operation across the ecosystem family of projects
This benefits Yearn as a whole by:

Retaining existing contributors
Incentivizing new contributors
Capitalizing the Treasury to a scale comparable to industry peers in order to better support growth
This benefits YFI holders in particular by:

Creating a strategic reserve to advance Yearn as one of the world's leading DeFi protocols
Aligning incentives across stakeholders
Providing for Yearn's future
Motivation
Evolve the fair launch
Yearn's launch was exceptional at creating a decentralized and engaged community, but it did not provide adequate incentives to retain existing and future contributors on an ongoing basis, nor did it provide the protocol with a war chest to fund future activities.
Viewing the fair launch as a living concept rather than a single event, this proposal seeks to remedy this
It does so with an emphasis on funding the Treasury for the benefit of all active protocol participants over the existing contributors at a ratio of rougly 2:1 in terms of allocated YFI
Remove Yearn's Competitive Disadvantage
Excerpt from [1]:

Team token allocations
Projects such as Uniswap, Aave, Synthetix, Compound, 1inch, Curve, and Balancer hold anywhere from $300 million-$2.13 billion in tokens aside for [contributors], with the average being between $500-600 million. This is generally 20-30% of the total token allocation. Newer projects such as SushiSwap, Badger, CREAM, Harvest, and Cover vary more between teams, but allocate between 10-25% of token supply to their teams and early contributors.

Treasury/operations token allocations
While the numbers vary here more widely, most of the major projects still have significant token amounts set aside for operations. Uniswap is on the high end with $4 billion, Aave, Synthetix, Balancer, and 1inch all have between $200-$570 million, and likely other projects without any tokens set aside for operations have ample funding from investors (Curve and Compound).

Why mint?
Excerpt from [2]:

[The decision] comes down to the market for talent and the opportunity cost for YFI contributors. We looked at other successful DeFi projects to see what the market says top-tier talent is worth:



The UNI team has 21.3% of tokens (which includes tokens for future employees) and UNI holders collectively control a treasury with 43% of the supply. At current market prices of $9.2 (which reflects a fully diluted valuation of $9.2B), each bucket has several billion dollars worth of UNI – team ~$2B and treasury ~$4B – giving the Uniswap team significant fire power for hiring and enabling a lot of future growth spend from the treasury (both buckets are subject to 4-year vesting).

The COMP team has 26% of tokens and a smaller but still significant treasury with 7.8%. At the current market price of $226 per COMP, the team allocation is ~$580M and treasury ~$176M.

You can quickly see that a treasury of $500K and a team allocation of 0% is way off market. The reality is that for Yearn to allocate even 5% (which would be well below the examples above), at current market prices (~$37K) Yearn would need to either earn $56M or mint $56M worth of YFI. Given that a conservative figure is presently an order of magnitude higher than annualized YFI holder income, the only reasonable way to bridge the gap in the near-term is through a mint.

Why 6,666 YFI?
6,666 is 22% of the current total supply of 30,000 YFI.
After gathering feedback, modeling a number of mint scenarios and various retention package estimates, a ~20% increase was determined to be the minimum viable amount to provide competitive retention plan, using only roughly 1/3 of the total mint amount.
22% is in line with yearn's peers, for example Aave minted 23% when they migrated from LEND to AAVE.[3]
Improve Talent Retention & Acquisition
Contributors have recently been poached by other projects.
With the current operational treasury size of $500,000 and 0% token allocation to the team, Yearn struggles to compete with the compensation packages offered in the current market. These are becoming increasingly competitive.
BABY is a great first step, but not enough on its own
Buyback and Build Yearn (BABY)[4] establishes a moving target for YFI buybacks in USD terms. As Yearn earns more revenue in USD terms, it's possible that the YFI price in USD adjusts upwards to reflect those increased earnings. So it would be like trying to catch your own tail. Modeling shows that using 50% of Treasury earnings for buybacks would purchase 100-300 YFI per year (see sensitivities below). Even with the assumption that V2 vaults end up being very successful, earnings will likely not be enough to accumulate a sufficient amount of YFI for the Treasury.

Below are two different BABY scenarios. One sensitizing aggregate yields on V2 vaults and their effect on YFI buybacks. The other sensitizing operating expenses and their effect on YFI buybacks. The other with 100% of net income.

Aggregate Yields Sensitivity



Operating Expenses Sensitivity



Specification
1. Mint 6666 YFI
A proof of concept for minting has been produced [11]. If accepted, Yearn Governance would need to do these things:

Deploy the vesting contract
Call TimelockGovernance.setTargetGovernance(YearnPact)
Wait 3 days
Call TimelockGovernance.updateTargetGovernance()
Call YearnPact.brrr(), which will mint and then revert the YFI token governance back to TimelockGovernance immediately thereafter
2. Allocate ~1/3rd to vested retention packages
Out of the 6,666 minted YFI, allocate roughly 1/3rd (5% margin on either side) to retention packages in order to provide the sufficient face melt required for effective contributor stickiness.
All YFI allocated to retention packages will be subject to vesting.
Retention package details, including eligibility, amounts, and overall terms, will be prepared and presented by a Compensation Working Group:
Working group members are recommended by the Operations team and should include a variety of project contributors.
The Multi-sig approves the proposed members of the working group.
The working group can gather feedback and input from existing community groups or form new ones as required.
Once appointed, the working group's tasks will be to:
Finalize compensation packages
Finalize vesting terms
Identify eligible recipients
Prepare a Compensation plan for the Multi-sig to review
After review, the Multi-sig approves the Compensation plan, or requests changes.
Separately, the working group is also tasked with formalizing the qualification process and retention packages for future contributors. Funding for this comes from the portion allocated to Treasury (see below).
3. Allocate ~2/3rds to Treasury
Allocate the remainder of the minted YFI, i.e. roughly 2/3rds (5% margin on either side) to Treasury.
This allocation flows into the Operations Fund established by YIP-54 [12] and can be spent accordingly, which includes through ad-hoc Governance proposals brought forward as YIPs.
The Operations Fund remains under the supervision of the Multi-sig.
As YIP-56 [4] makes clear, YFI in the Treasury, including those in the Operations Fund, cannot be used to vote.
Discussion
https://gov.yearn.finance/t/proposal-funding-yearns-future/9319