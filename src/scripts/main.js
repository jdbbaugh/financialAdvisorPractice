const JuanRodriguezPatient = Object.create({}, {
  company: {
      value: "Deft Prose Finance Radness",
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
        stock: "MCRS",
        quantity: 10,
        price: 100.00,
        buyTransaction: true
      },
    ],
  },
  worth: {
      value: () => {
        console.log("yo")
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