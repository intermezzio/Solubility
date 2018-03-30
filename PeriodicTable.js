/**
Create elements of the periodic table
 */

var PerEl = function(name, symbol, group = 1, charge = 0) {
	this.name = name;
	this.symbol = symbol;
	this.group = group;
	this.charge = charge;
}