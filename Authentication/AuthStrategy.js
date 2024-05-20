class AuthStrategy {
  authenticate(username, password) {
    throw new Error('authenticate() must be implemented')
  }
}

class AuthContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  authenticate(username, password) {
    if (!this.strategy) {
      throw new Error('Auth strategy not set');
    }
    return this.strategy.authenticate(username, password);
  }
}

export default { AuthStrategy, AuthContext }