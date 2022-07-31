const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) reject("Number must me postive");
      return resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(10, 20);
  const sum2 = await add(sum, 30);
  const sum3 = await add(sum2, 40);
  return sum3;
};

// console.log(doWork());

doWork()
  .then((result) => {
    console.log("result : ", result);
  })
  .catch((e) => {
    console.log("error : ", e);
  });
