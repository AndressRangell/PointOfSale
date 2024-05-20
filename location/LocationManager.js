class LocationManager {
  constructor() {
    this.state = null
    this.currency = ''
    this.taxRate = 0
    this.locale = ''
  }

  setState(state) {
    this.state = state
    this.state.applySettings()
  }

  setCurrency(currency) {
    this.currency = currency
  }

  setLocale(locale) {
    this.locale = locale
  }

  getCurrency() {
    return this.currency
  }

  getLocale() {
    return this.locale
  }
}

export default LocationManager