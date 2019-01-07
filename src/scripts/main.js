const targetContainer = document.getElementById("display-container");
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
        const allStockValue = stocksTimesValue.reduce((allValue, indieValue) => allValue + indieValue);
        // console.log(`Overall current stock net worth is: $${allStockValue}`, portfolioToLoop)
        return allStockValue
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
  },
  toString: {
    value: () => {
      const sentence =`${financialAdvisor.name} is an advisor at ${financialAdvisor.company} His current portfolio value is US$${financialAdvisor.worth()}`
      const sentenceContainer = document.createElement("p");
      sentenceContainer.textContent = sentence;
      targetContainer.appendChild(sentenceContainer)
    }
  }
});

console.log(financialAdvisor.purchase("TMNT", 100, 10));
console.log(financialAdvisor.sell("TMNT", 50, 10));
console.log(financialAdvisor.worth());
console.log(financialAdvisor.toString());


const sellerContainer = document.createElement("article");
const sellerName = document.createElement("h2");
const sellerCompany = document.createElement("h3");
const sellerSpeciality = document.createElement("h3");

sellerContainer.setAttribute("id","seller-container");

sellerName.textContent = financialAdvisor.name;
sellerCompany.textContent = financialAdvisor.company;
sellerSpeciality.textContent = financialAdvisor.speciality;

targetContainer.appendChild(sellerContainer);
sellerContainer.appendChild(sellerName);
sellerContainer.appendChild(sellerCompany);
sellerContainer.appendChild(sellerSpeciality);

const sellersStockContainer = document.createElement("div");
sellersStockContainer.setAttribute("id", "stock-container");
sellerContainer.appendChild(sellersStockContainer)

financialAdvisor.portfolio.forEach(stock => {
  console.log(stock.stock)
  const stockFrag = document.createDocumentFragment();
  const stockName = document.createElement("h4");
  const stockQuantity = document.createElement("p");
  const stockPrice = document.createElement("p");

  stockName.textContent = `STOCK: ${stock.stock}`;
  stockQuantity.textContent = `units: ${stock.quantity}`;
  stockPrice.textContent = `price: ${stock.price}`;

  stockFrag.appendChild(stockName);
  stockFrag.appendChild(stockQuantity);
  stockFrag.appendChild(stockPrice);

  sellersStockContainer.appendChild(stockFrag);
});
