class NumberFormatter {
  format(number) {
    return number.toString()
  }
}

class CurrencyFormatter extends NumberFormatter {
  constructor(numberFormatter) {
    super()
    this.numberFormatter = numberFormatter
  }

  format(number) {
    const formattedNumber = this.numberFormatter.format(number)
    const currencyFormattedNumber = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(parseFloat(formattedNumber))
    return currencyFormattedNumber
  }
}

export { NumberFormatter, CurrencyFormatter }