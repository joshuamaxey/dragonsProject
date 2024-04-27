class Dragon{
  constructor(name, color){
    this.name = name
    this.color = color
  }
  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...dragons){
    // let dragonArr = []
    // for(let dragon of dragons){
    //   dragonArr.push(dragon.name)
    // }
    // return dragonArr
    return dragons.map((dragon) => dragon.name)
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
