let nonFungibleTokenProperties = null;
let symbol = hexlify(randomBytes(4)).substring(2);
nonFungibleTokenProperties = {
  name: "NFT" + symbol,
  symbol: symbol,
  fee: {
    to: "mxw1md4u2zxz2ne5vsf9t4uun7q2k0nc3ly5g22dne",
    value: bigNumberify("1"),
  },
  metadata: "",
  properties: "",
};
let overrides = {
  tokenFees: [
    { action: NonFungibleTokenActions.transfer, feeName: "default" },
    {
      action: NonFungibleTokenActions.transferOwnership,
      feeName: "default",
    },
    {
      action: NonFungibleTokenActions.acceptOwnership,
      feeName: "default",
    },
  ],
  endorserList: [],
  mintLimit: -1,
  transferLimit: 1,
  burnable: true,
  transferable: true,
  modifiable: true,
  pub: false,
};
return NonFungibleToken.create(
  nonFungibleTokenProperties,
  this.issuer
).then((nfToken) => {
  console.log("Token had been created");
});