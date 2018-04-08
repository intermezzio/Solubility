/**
Create elements of the periodic table
 */

var PerEl = function(name, symbol, group = -1, charge = 0) {
	try { //need to improve: how to check if an array is inputted
		this.name = name[0];
		this.names = name;
	} catch(Exception) {
		this.name = name; // for main name
		this.names = [name]; // for alternate names ex: Iron, Ferrous
	}
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

//Add ions to the list
addIon("Hydrogen", "H", 1, 1);
addIon("Ammonium", "NH4", 0, 1);
addIon("Sodium", "Na", 1, 1);
addIon("Potassium", "K", 1, 1);
addIon("Magnesium", "Mg", 2, 2);
addIon("Calcium", "Ca", 2, 2);
addIon("<name(s)>", "Symbol", /* group */ 0, /* charge */ 0);

addIon("Silver", "Ag", 0, 1);
addIon(["Iron (II)", "Ferrous"], "Fe", /* iron group */ 0, 2);
addIon(["Iron (III)", "Ferric"], "Fe", /* iron group */ 0, 3);

addIon("Carbonate", "CO3", 0, -2);
addIon("Sulfate", "SO4", 0, -2);
addIon("Phosphate", "PO4", 0, -3);
addIon("Chlorate", "ClO3", 0, -1);