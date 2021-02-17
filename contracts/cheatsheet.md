# Addresses
The address type comes in two flavours, which are largely identical:

address: Holds a 20 byte value (size of an Ethereum address).
address payable: Same as address, but with the additional members `transfer` and `send`.

The idea behind this distinction is that address payable is an address you can send Ether to, while a plain address cannot be sent Ether.

# Block and Transaction Properties
blockhash(uint blockNumber) returns (bytes32): hash of the given block - only works for 256 most recent, excluding current, blocks
block.chainid (uint): current chain id
block.coinbase (address payable): current block miner’s address
block.difficulty (uint): current block difficulty
block.gaslimit (uint): current block gaslimit
block.number (uint): current block number
block.timestamp (uint): current block timestamp as seconds since unix epoch
gasleft() returns (uint256): remaining gas
msg.data (bytes calldata): complete calldata
msg.sender (address): sender of the message (current call)
msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)
msg.value (uint): number of wei sent with the message
tx.gasprice (uint): gas price of the transaction
tx.origin (address): sender of the transaction (full call chain)