/**
Create elements of the periodic table
 */

var PerEl = function(name, symbol, group = 1, charge = 0, period = 1) {
	this.name = name;
	this.symbol = symbol;
	this.group = group;
	this.period = period;
	this.charge = charge;
};

PerEl.prototype.searchTerm = function(term) {
	return (term in [this.name, this.symbol]);
};
