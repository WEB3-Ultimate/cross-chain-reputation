async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  const { contract: NonFungibleSBT, tx } = await locklift.factory.deployContract({
    contract: "NonFungibleSBT",
    publicKey: signer.publicKey,
    initParams: {
      _nonce: locklift.utils.getRandomNonce(),
    },
    constructorParams: {
      _state: 0,
    },
    value: locklift.utils.toNano(3),
  });

  console.log(NonFungibleSBT deployed at: ${NonFungibleSBT.address.toString()});
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });