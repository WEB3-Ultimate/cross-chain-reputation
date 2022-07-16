pragma ever-solidity >= 0.35.0;
pragma AbiHeader expire;

contract FungibleSBT {

	uint256 public reputation;

	constructor() public {
		require(tvm.pubkey() != 0, 101);
		tvm.accept();
	}

	function name() public view returns (string) {
		return "FungibleSBT";
	}

	function symbol() public view returns (string) {
		return "FSBT";
	}
}