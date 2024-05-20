import LocationState from "../LocationState"

class USALocationState extends LocationState {
  applySettings() {
    this.context.setCurrency('USD')
    this.context.setLocale('en-US')
  }
}

export default USALocationState