//Add ions to the list
/*
addIon(name, symbol, charge, paren = false, state = "s", group = 0, duplicate = 0);
*/
addIon("Hydrogen", "H", 1, false, "g", 1);
addIon("Ammonium", "NH4", 1, true, "g");
addIon("Sodium", "Na", 1, false, "s", 1);
addIon("Potassium", "K", 1);
addIon("Magnesium", "Mg", 2);
addIon("Calcium", "Ca", 2);
addIon("<name(s)>", "Symbol", /* charge */ 1);

addIon("Chromium (III)", "Cr", 3);
addIon("Silver", "Ag", 1);
addIon(["Iron (II)", "Ferrous"], "Fe", 2);
addIon(["Iron (III)", "Ferric"], "Fe", 3);

addIon("Carbonate", "CO3", -2);
addIon("Nitrate", "NO3", -1);
addIon("Sulfate", "SO4", -2);
addIon("Phosphate", "PO4", -3);
addIon("Chlorate", "ClO3", -1);