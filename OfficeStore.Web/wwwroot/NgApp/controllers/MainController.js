class MainController {
	constructor($http) {
		this.http = $http;
		this.products = [];
		this.getProducts();
		this.product = {};
	}

	getProducts() {
		this.http.get("api/Product")
			.then(res => {
				this.pets = res.data;
			});
	}

	addProduct() {
		this.http.post("api/Product", this.product)
			.then(res => {
				this.product = {};
				this.getProducts();
			});
	}
}