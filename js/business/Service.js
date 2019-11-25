function Service(dao) {
	this.dao = dao;
}

Service.prototype.insertBook = function(book) {
	return this.dao.insertBook(book);
};

Service.prototype.books = function() {
	return this.dao.books();
};

Service.prototype.search = function(keyword) {
	return this.dao.search(keyword);
};