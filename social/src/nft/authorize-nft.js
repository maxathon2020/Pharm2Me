authourize(symbol, overrides) {
    return NonFungibleToken.approveNonFungibleToken(symbol, provider, overrides)
      .then((transaction) => {
        return NonFungibleToken.signNonFungibleTokenStatusTransaction(
          transaction,
          issuer
        );
      })
      .then((transaction) => {
        return NonFungibleToken.sendNonFungibleTokenStatusTransaction(
          transaction,
          middleware
        );
      })
      .then((receipt) => {
        if (receipt.status == 1) console.log("success");
        else console.log("error");
        return this.Query(symbol, i);
      });
    },