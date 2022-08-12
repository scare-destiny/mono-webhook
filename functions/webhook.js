exports.handler = async function (event, context) {
  console.log(event);
  const body = JSON.parse(event.body);

  let response = await fetch(
    "https://script.google.com/macros/s/AKfycbziPb_3irULA1RlHD3p5A33EFKcvGY7Ec8wKtqcnbj7IJsAFasickXhta7J2Ed8mPIa-A/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    }
  );

  let result = await response.json();
  console.log(result.message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

