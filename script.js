let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === "string";
  const calculatedAsNumber = isString
    ? parseFloat(calculated)
    : Number(calculated);
  return calculatedAsNumber === calculatedAsNumber - 1;
};

const calcUser = () => {
  const result = logCalc();
  if (result && user === null) {
    user = "John";
    state = "requesting";
  }
  if (result && state === "requesting") {
    state = "idle";
  }
};

const checkUser = () => {
  if (user === "John" && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
