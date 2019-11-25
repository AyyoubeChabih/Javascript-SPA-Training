function DAO(biblio) {
	this.biblio = biblio;
}

DAO.prototype.insertBook = function(book) {
	this.biblio.addBook(book);
	return true;
};

DAO.prototype.books = function() {
	return this.biblio.allBooks();
};

DAO.prototype.search = function(keyword) {
	return this.biblio.searchByKeyword(keyword);
};