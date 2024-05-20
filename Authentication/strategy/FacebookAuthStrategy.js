import AuthStrategy from './AuthStrategy'

class FacebookAuthStrategy extends AuthStrategy {
  authenticate() {
    return 'Authenticated with Facebook'
  }
}

export default FacebookAuthStrategy