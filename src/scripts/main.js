const financialAdvisor = Object.create({}, {
  company: {
      value: "Mad Men Financial Radness Co.",
      enumerable: true,
      writable: false
  },
  speciality: {
      value: "Import/Exports",
      enumerable: true
  },
  name: {
      value: "Geoffery Bannon",
      enumerable: true
  },
  portfolio: {
      value: [{
        stock: "TWTR",
        quantity: 100,
        price: 34.59,
        buyTransaction: true
      },
      {
        stock: "TMNT",
        quantity: 100,
        price: 10.00,
        buyTransaction: true
      },
      {
        stock: "MMW3",
        quantity: 10,
        price: 100.00,
        buyTransaction: true
      },
    ],
  },
  worth: {
      value: () => {
        const portfolioToLoop = financialAdvisor.portfolio
        const stocksTimesValue = portfolioToLoop.map(shiz => shiz.quantity * shiz.price)
        const allStockValue = stocksTimesValue.reduce((allValue, indieValue) => allValue + indieValue)
        console.log(`Overall current stock net worth is: $${allStockValue}`, portfolioToLoop)
      }
  },
  purchase: {
      value:  (ticker, quantity, price) => {
        const portfolioToLoop = financialAdvisor.portfolio
        portfolioToLoop.forEach(portfolioInfo => {
          if (portfolioInfo.stock === ticker) {
            portfolioInfo.quantity += quantity;
            portfolioInfo.price = ((portfolioInfo.price * portfolioInfo.quantity) + (price * quantity)) / (quantity + portfolioInfo.quantity);
            console.log(`Purchased ${quantity} units of ${portfolioInfo.stock} stock at $${price} a share it's now:`, portfolioInfo)
          }
        })
      }
  },
  sell: {
      value: (ticker, quantity, price) => {
        const portfolioToLoop = financialAdvisor.portfolio
        portfolioToLoop.forEach(portfolioInfo => {
          if (portfolioInfo.stock === ticker) {
            portfolioInfo.quantity -= quantity;
            portfolioInfo.price = ((portfolioInfo.price * portfolioInfo.quantity) + (price * quantity)) / (quantity + portfolioInfo.quantity);
            console.log(`Sold ${quantity} units of ${portfolioInfo.stock} stock at $${price} a share it's now:`, portfolioInfo)
          }
        })
        

      }
  }
});

console.log(financialAdvisor.purchase("TMNT", 100, 10));
console.log(financialAdvisor.sell("TMNT", 50, 10));
console.log(financialAdvisor.worth());