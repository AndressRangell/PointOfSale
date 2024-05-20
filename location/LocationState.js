class LocationState {
  constructor(context) {
    this.context = context
  }

  applySettings() {
    throw new Error('applySettings() must be implemented')
  }
}

export default LocationState