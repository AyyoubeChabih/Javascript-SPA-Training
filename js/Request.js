function Request(name) {
	this.name = name;
}

Request.prototype.setAttribute = function(key, model) {
	this[key] = model;
};

Request.prototype.getAttribute = function(key) {
	return this[key];
};

Request.prototype.getParameter = function(name) {
	return document.getElementById(name).value;
};