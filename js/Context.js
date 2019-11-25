function Context(request) {
	this.request = request;
}

Context.prototype.setModel = function(key, model) {
	this.request.setAttribute(key, model);
};

Context.prototype.getModel = function(key) {
	this.request.getAttribute(key);
};

Context.prototype.getParameter = function(name) {
	return this.request.getParameter(name);
};