import AuthStrategy from './AuthStrategy'

class GoogleAuthStrategy extends AuthStrategy {
  authenticate() {
    return 'Authenticated with Google'
  }
}

export default GoogleAuthStrategy