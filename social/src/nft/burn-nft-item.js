burnItem(itemInstance) {
    return itemInstance.burn().then((receipt) => {
      return receipt;
    });
  },