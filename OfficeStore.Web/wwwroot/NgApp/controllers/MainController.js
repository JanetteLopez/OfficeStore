class MainController {
	constructor($http) {
		this.http = $http;
		this.products = [];
		this.getProducts();
		this.product = {};
	}

	getProducts() {
		this.http.get("api/Products")
			.then(res => {
				this.pets = res.data;
			});
	}

	addProduct() {
		this.http.post("api/Products", this.product)
			.then(res => {
				this.product = {};
				this.getProducts();
			});
	}
}