// declare variable for products.json
const url = 'https://comfortup.com/products.json';

// request JSON file and load the data
let request = new XMLHttpRequest();
request.open('GET', url);
// send the request
request.responseType = 'json';
request.send();

request.onload = function () {
	const productData = request.response;
	populateInfo(productData);
};
