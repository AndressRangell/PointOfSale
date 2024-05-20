import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter'

class CartManager {
  constructor() {
    if (typeof CartManager.instance === 'undefined') {
      this.cart = []
      this.eventEmitter = new EventEmitter()
      CartManager.instance = this
    }
    return CartManager.instance
  }

  addToCart(product) {
    this.cart.push(product)
    this.notifyCartUpdated()
  }

  notifyCartUpdated() {
    this.eventEmitter.emit('cartUpdated', this.cart)
  }

  subscribeToCartUpdates(callback) {
    this.eventEmitter.addListener('cartUpdated', callback)
  }

  unsubscribeFromCartUpdates(callback) {
    this.eventEmitter.removeListener('cartUpdated', callback)
  }
}

const instance = new CartManager()
Object.freeze(instance)

export default instance