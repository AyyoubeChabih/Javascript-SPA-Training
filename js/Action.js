function Action(service) {
	this.service = service;
}

Action.prototype.addBook = function(context) {
	var id = context.getParameter("id");
	var title = context.getParameter("titl");
	var price = context.getParameter("price");
	var year_published = context.getParameter("year_published");
	var book = new Book(id, title, price, year_published);
	return this.service.insertBook(book);
};

Action.prototype.books = function() {
	return this.service.books();
};

Action.prototype.search = function(context) {
	var keyword = context.getParameter("keyword");
	return this.service.search(keyword);
};