const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(a + b);
    }, 2000);
  });
};

// add(2, 3)
//   .then((sum) => {
//     console.log(sum);

//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 6);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((e) => {
    console.log(e);
  });
