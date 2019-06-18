// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(attributes) {

  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;

  }


volume () {

  return (this.length * this.width * this.height);



};
surfaceArea () {
  return (
    2 *
    (this.length * this.width +
      this.length * this.height +
      this.width * this.height)
  );
};



}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("<-----------------------classes-------------------------------------------->")

console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log("<------------------Stretch Classes------------------------>")
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(cubeAttrs) {
    super(cubeAttrs);

  }
}

const cube1 = new CubeMaker({
  length: 7,
  width: 7,
  height: 7
});
const cube2 = new CubeMaker({
  length: 8,
  width: 8,
  height: 8
});
const cube3 = new CubeMaker({
  length: 9,
  width: 9,
  height: 9
});
console.log("cube1.volume " , cube1.volume());
console.log("cube1.surfaceArea ", cube1.surfaceArea());
console.log("cube2.volume ",cube2.volume());
console.log("cube2.surfaceArea ",cube2.surfaceArea());
console.log("cube3.volume ",cube3.volume());
console.log("cube3.surfaceArea ",cube3.surfaceArea());

