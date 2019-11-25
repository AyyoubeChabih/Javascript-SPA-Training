var controller = new Controller();

function addBook() {
	var request = new Request("addBook");
	controller.do(request);
}

function booksList() {
	var request = new Request("booksList");
	controller.do(request);
}

function search() {
	var request = new Request("search");
	controller.do(request);
}