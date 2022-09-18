const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  return new Promise(async (resolve) => {
    let hasil = 0;
    await Promise.allSettled([promiseTheaterIXX(), promiseTheaterVGC()]).then(
      (results) =>
        results.forEach((result) =>
          result.value.forEach((val) => {
            if (val.hasil == emosi) {
              hasil++;
            }
          })
        )
    );
    resolve(hasil);
  });
};

module.exports = {
  promiseOutput,
};
