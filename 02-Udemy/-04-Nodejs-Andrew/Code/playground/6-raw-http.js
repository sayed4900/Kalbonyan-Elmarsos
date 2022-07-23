const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=c34d2cbbe7b4f35b03063b5cb3cd40f5&query=40,-70&units=m`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on("error", (error) => {
  console.log("An error ", error);
});
request.end();
