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

function populateInfo(jsonObj) {
	const products = jsonObj['products'];

	// loop through first 12 products from the JSON file
	for (let i = 0; i < 12; i++) {
		// create product info div inside
		var productInfoDiv = document.createElement('div');
		productInfoDiv.className = 'product-info';
		document
			.getElementById('product-container')
			.appendChild(productInfoDiv);

		var image = new Image();
		image.src = jsonObj['products'][i]['images'][0]['src'];
		productInfoDiv.appendChild(image);

		const vendor = document.createElement('h3');
		vendor.textContent = jsonObj['products'][i]['vendor'];
		productInfoDiv.appendChild(vendor);

		const price = document.createElement('h4');
		price.textContent =
			'$' + jsonObj['products'][i]['variants'][0]['price'];
		productInfoDiv.appendChild(price);

		const tags = document.createElement('span');
		// format the tags to add hardcoded superscript '2' and join array with comma and space
		const formattedTags = jsonObj['products'][i]['tags']
			.map((tag) => tag.replace('<sup>2</sup>', `²`))
			.join(', ');
		tags.textContent = 'Tags: ' + formattedTags;
		productInfoDiv.appendChild(tags);
	}
}
