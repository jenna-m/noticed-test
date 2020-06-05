// declare const for JSON file url
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

// declare const for div that will contain product info
const div = document.querySelector('#product-card');
