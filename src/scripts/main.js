const financialAdvisor = Object.create({}, {
  company: {
      value: "Deft Prose Financial Radness Co.",
      enumerable: true,
      writable: false
  },
  speciality: {
      value: "import export trafficing",
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
        console.log(`Current stock net worth is: $${allStockValue}`)
      }
  },
  purchase: {
      value:  (ticker, quantity, price) => {
        const portfolioToLoop = financialAdvisor.portfolio
        portfolioToLoop.forEach(portfolioInfo => {
          if (portfolioInfo.stock === ticker) {
            portfolioInfo.quantity += quantity;
            portfolioInfo.price = ((portfolioInfo.price * portfolioInfo.quantity) + (price * quantity)) / (quantity + portfolioInfo.quantity);
            console.log(portfolioInfo)
          }
        })
      }
  },
  sell: {
      value: (ticker, quantity, price) => {

      }
  }
});

// console.log(financialAdvisor.worth());
console.log(financialAdvisor.purchase("TMNT", 100, 10));
// console.log(financialAdvisor.portfolio[1]);