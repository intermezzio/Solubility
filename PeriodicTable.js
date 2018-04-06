/**
Create elements of the periodic table
 */

var PerEl = function(name, symbol, group = -1, charge = 0) {
	this.name = name;
	this.symbol = symbol;
	this.group = group;
	this.charge = charge;
};

PerEl.prototype.searchTerm = function(term) {
	return (term in [this.name, this.symbol]);
};

Ions = [];
function addIon(name, symbol, group = -1, charge = 0) {
	Ions.push(new PerEl(name, symbol, group, charge));
}

addIon("Hydrogen", "H", 1, 1);
addIon("Ammonium", "NH4", 1, 1);

addIon("Carbonate", "CO3", 0, -2);