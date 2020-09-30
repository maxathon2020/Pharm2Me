const itemProp = {
    symbol: this.course,
    itemID: this.course + "#" + "007",
    properties: " from University of Reading",
    metadata: "Owned by: " + wallet.address,
  };
  nft.mint(wallet.address, itemProp).then((receipt) => {
    return receipt;
  });