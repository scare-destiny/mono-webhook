const axios = require("axios").default;

exports.handler = async function (event, context) {
	const body = JSON.parse(event.body);


  let response = await axios.post(
    `https://script.google.com/macros/s/AKfycbziPb_3irULA1RlHD3p5A33EFKcvGY7Ec8wKtqcnbj7IJsAFasickXhta7J2Ed8mPIa-A/exec`,
    {
      data: body,
    }
  );

  let result = await response.json();
  console.log(result.message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
