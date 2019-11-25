function View() {
	
}

View.prototype.clear = function () {
	document.getElementById("id").value = "";
	document.getElementById("titl").value = "";
	document.getElementById("price").value = "";
	document.getElementById("year_published").value = "";
}

View.prototype.books = function(books) {
    if (books.length > 0) {
        var meta = '<div><span class="th">ID</span><span class="th">Titre</span><span class="th">Prix</span><span class="th">Année Publication</span></div>';
        document.getElementById("table").innerHTML = meta;
        for (var i = 0; i < books.length; i++) {
            this.addRow(books[i], "table");
        }
    }
}

View.prototype.addRow = function (book, tableName) {
    var data = '<div><span class="td">' + book.id + '</span><span class="td">' + book.title + '</span><span class="td">' + book.price + '</span><span class="td">' + book.year_published + '</span></div>';
    document.getElementById(tableName).innerHTML += data;
}

View.prototype.searchResult = function(books) {
    if (books.length > 0) {
        var meta = '<div><span class="th">ID</span><span class="th">Titre</span><span class="th">Prix</span><span class="th">Année Publication</span></div>';
        document.getElementById("search-table").innerHTML = meta;
        for (var i = 0; i < books.length; i++) {
            this.addRow(books[i], "search-table");
        }
    }	
};
