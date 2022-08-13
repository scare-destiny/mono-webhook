const axios = require("axios").default;
// todo: revert to previos version
exports.handler = async function (event, context) {

  // let response = await axios.post(
  //   `https://script.google.com/macros/s/AKfycbziPb_3irULA1RlHD3p5A33EFKcvGY7Ec8wKtqcnbj7IJsAFasickXhta7J2Ed8mPIa-A/exec`,
  //   {
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     test: "test",
  //   }
  // );

  // let result = await response.json();
  console.log(result.message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
