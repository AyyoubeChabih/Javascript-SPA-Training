function Biblio() {
	this.books = [];
}

Biblio.prototype.addBook = function(book) {
	this.books.push(book);
};

Biblio.prototype.allBooks = function() {
	return this.books;
};

Biblio.prototype.size = function() {
	return this.books.length;
};

Biblio.prototype.searchByKeyword = function(keyword) {
	var data = [];
    for (var i = 0; i < this.size(); i++) {
        if (this.books[i].title.toUpperCase().includes(keyword.toUpperCase())) {
            data.push(this.books[i]);
        }
    }
    return data;
};