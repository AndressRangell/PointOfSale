import LocationState from "../LocationState"

class SpainLocationState extends LocationState {
  applySettings() {
    this.context.setCurrency('EUR')
    this.context.setLocale('es-ES')
  }
}

export default SpainLocationState