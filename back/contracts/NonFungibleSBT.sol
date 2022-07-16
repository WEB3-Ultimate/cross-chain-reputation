pragma ever-solidity >= 0.35.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

contract NonFungibleSBT {

    string _name = "SBT";
    // address _supportAddr = address.makeAddrStd(0, msg.sender);
    uint256 _ownerPubkey = tvm.pubkey();

    address _nftRoot = address(0);
    address _userAddr;

    bytes _icon;

    uint256 reputation;

    function setAddress(address value) public {
        _userAddr = value;
    }

    function getOwner(uint32 answerId, uint32 errorId) public view {
        optional(uint256) none;
    }

    function setNftRootAddr(address nftRoot) public onlyOwner {
        tvm.accept();
        _nftRoot = nftRoot;
    }

    function setOwnerPubkey(uint256 ownerPubkey) public onlyOwner {
        tvm.accept();
        _ownerPubkey = ownerPubkey;
    }

    function setIcon(bytes icon) public onlyOwner {
        tvm.accept();
        _icon = icon;
    }

    function burn(address dest) public onlyOwner {
        tvm.accept();
        selfdestruct(dest);
    }

    modifier onlyOwner() {
        require(msg.pubkey() == _ownerPubkey, 100);
        _;
    }

}