class Ship {
  constructor(length, hits) {
      this.length = length
      this.hits = hits
      this.sunk = false;
  }
  hit(){
    this.hits++;
  }

  getHit(){
    return this.hits;
  }

  isSunk(){
    if (this.getHit() === length){
        this.sunk = true;
    }
    return this.sunk
  }
}

