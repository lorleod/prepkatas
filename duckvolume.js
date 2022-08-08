

function sphereVolume(radius) {
  let volume = 4 / 3 * Math.PI * Math.pow(radius, 3)
  return volume;
}

function coneVolume(radius, height) {
 let volume = 1 / 3 * Math.PI * radius * radius * height
  return volume;
}

function prismVolume (height, width, depth) {

}

function totalVolume (arrayOfVolumes) {
  let sum = 0;
  for (volume of arrayOfVolumes) {
    sum += volume;
  }
  return sum;
}

console.log(sphereVolume(10));
console.log(coneVolume(3, 5));
console.log("total: ", totalVolume([20, 99]));
