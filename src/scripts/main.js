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
        quantity: 75,
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
      value:  () => {
          return `${this.firstName} ${this.lastName}`
      }
  },
  sell: {
      value: () => {
          const dob = new Date(this.dob)
          const yearBirth = dob.getFullYear()
          const now = new Date()
          const yearNow = now.getFullYear()

          return yearNow - yearBirth
      }
  }
});

console.log(financialAdvisor.worth())

// const testAr = [
//   {
//   addthis: 10
// },
//   {
//   addthis: 10
// },
//   {
//   addthis: 10
// },
//   {
//   addthis: 10
// },
//   {
//   addthis: 10
// },
// ]


// const mappedThing = testAr.map(thing => {
//   // console.log(thing.addthis)
//   return thing.addthis
// })
// // console.log(mappedThing)

// const addinUp = mappedThing.reduce((ac, digits) => {
//   let shibs = ac + digits
//   return shibs
// })
// // console.log(addinUp)

// var kvArray = [{key: 1, value: 10},
//   {key: 2, value: 20},
//   {key: 3, value: 30}];

// var reformattedArray = kvArray.map(obj =>{
// var rObj = {};
// rObj[obj.key] = obj.value;
// return rObj;
// });
// // console.log(kvArray)
