/**
Create ions of the periodic table
 */

var PerEl = function(name, symbol, charge, paren = false, state = "s", group = 0, duplicate = 0) {
	if(Array.isArray(name)) {
		this.name = name[0];
		this.names = name;
	} else {
		this.name = name;
		this.names = [name]; // for alternate names ex: Iron, Ferrous
	}
	this.symbol = symbol;
	this.group = group;
	this.charge = charge;
	this.duplicate = duplicate; // for multiple ions of the same element
	this.paren = paren;
	this.state = state;
};

PerEl.prototype.toString = function toString() {
	return this.name;
}

Ions = [];
function addIon(name, symbol, charge, paren = false, state = "s", group = 0, duplicate = 0) {
	Ions.push(new PerEl(name, symbol, charge, paren, state, group, duplicate));
}

function strToEl(name) {
	retVal = -1; // need this because return in the foreach does nothing
	Ions.forEach(function(ion) {
		if(ion.searchTerm(name)) {
			retVal = ion;
		}
	});
	return retVal;
}

PerEl.prototype.searchTerm = function(term) {
	return term === this.symbol || this.names.indexOf(term) !== -1;
};

function isSoluble(C, A) {
	if (1 === C.group || "Ammonium" == C /* C is converted toString so double equals is necessary */) {
		return true;
	} else if ("Nitrate" == A || "Acetate" == A || "Chlorate" == A || "Perchlorate" == A) {
		return true;
	} else if ("Chloride" == A || "Bromide" == A || "Iodide" == A) {
		if (C.symbol in ["Ag", "Hg2", "Pb"]) {
			return false;
		} else {
			return true;
		}
	} else if ("Sulfate" == A) {
		if (C.symbol in ["Ag", "Ca", "Sr", "Ba", "Hg2", "Pb"]) {
			return false;
		} else {
			return true;
		}
	} else if (A.name in ["Carbonate", "Phosphate", "Chromate"]) {
		return false;
	} else if ("Sulfide" == A) {
		if (C.group === 2) {
			return true;
		} else {
			return false;
		}
	} else if ("OH" == A) {
		if (C.symbol in ["Ba", "Sr", "Ca"]) {
			return true;
		} else {
			return false;
		}
	} // Front page rules completed
	else if (C.name in ["Silver", "Lead (II)", "Mercury (I)"]) {
		return false;
	} else if (A.name in ["Chloride", "Bromide", "Iodide"]) {
		return true;
	} else if (A.symbol in ["CO3", "O", "S", "OH", "PO4", "CrO4", "Cr2O7", "SO3"]) {
		if (C.group === 2  && A.name === "Sulfide" || "Barium" == C && "Hydroxide" == A) {
			return true;
		} else {
			return false;
		}
	} else if ("Sulfate" == A) {
		if (C.name in ["Calcium", "Strontium", "Barium"]) {
			return false;
		} else {
			return true;
		}
	}
	console.log("The following information is faulty");
	return false;
}