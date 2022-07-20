const hasDriveLicense = true; // a
const hasGoodVision = true; // b

console.log(hasDriveLicense && hasGoodVision);
console.log(hasDriveLicense || hasGoodVision);
console.log(!hasDriveLicense);

if (hasDriveLicense && hasGoodVision) {
  console.log("Sayed is able to drive");
} else {
  console.log("Someone else should drive");
}

const isTired = true; // c

if (!isTired && hasDriveLicense && hasGoodVision) {
  console.log("Can drive");
} else {
  console.log("Can't drive");
}
