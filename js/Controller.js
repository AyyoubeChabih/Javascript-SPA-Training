function Controller() {
	var service = new Service(new DAO(new Biblio()));
	this.action = new Action(service);
}

var current = "addBook";

function show(id) {
	document.getElementById(current).style.display = "none";
	document.getElementById(current + "-menu-item").classList.remove("active");
	document.getElementById(id).style.display = "block";
	document.getElementById(id + "-menu-item").classList.add("active");
	var title;
	if (id == "addBook") {
		title = "Ajouter un livre";
	} else if(id == "booksList") {
		title = "Liste des livres";
	} else {
		title  = "Rechercher un livre";
	}
	document.getElementById("title").innerHTML = title;
	current = id;
}

Controller.prototype.do = function(request) {
	if (request.name == "addBook") {
		var context = new Context(request);
		var result = this.action.addBook(context);
		if (result) {
			document.getElementById("success").style.display = "block";
		} else {
			document.getElementById("error").style.display = "block";
		}
	} else if (request.name == "booksList") {
		var result = this.action.books();
		var view = new View();
		view.books(result);
	} else if (request.name == "search") {
		var context = new Context(request);
		var result = this.action.search(context);
		var view = new View();
		view.searchResult(result);
	}
};

function hide(id) {
	document.getElementById(id).style.display = "none";
}