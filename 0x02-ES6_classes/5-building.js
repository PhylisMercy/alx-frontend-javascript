export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract class "Building" cannot be instantiated.');
    }

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage.');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

