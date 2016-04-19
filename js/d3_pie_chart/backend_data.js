var categoryTotals = {};

var locationTotals = {
	north_shore:{average:0.11},
	newmarket:{average:0.13},
	glenfield:{average:0.11},
	henderson:{average:0.12},
	manukau:{average:0.09},
	new_lynn:{average:0.14},
};

var studyGroups = {
	north_shore:{ gender:{male: {average:0.76}, female: {average:0.24}}, age:{aged18to30:{average:0.10}, aged30to49:{average:0.46}, aged50to64:{average:0.24}, over64:{average:0.18}}, income:{low:{average:0.13}, middle:{average:0.46}, high:{average:0.41}}, brand:{contoso:{average:0.61}, westhaven:{average:0.20}, other:{average:0.09}, lewis_clark:{average:0.06}}, },
	newmarket:{ gender:{male: {average:0.42}, female: {average:0.58}}, age:{aged18to30:{average:0.13}, aged30to49:{average:0.37}, aged50to64:{average:0.21}, over64:{average:0.26}}, income:{low:{average:0.26}, middle:{average:0.44}, high:{average:0.30}}, brand:{contoso:{average:0.68}, westhaven:{average:0.24}, other:{average:0.02}, lewis_clark:{average:0.03}}, },
	glenfield:{ gender:{male: {average:0.38}, female: {average:0.62}}, age:{aged18to30:{average:0.24}, aged30to49:{average:0.39}, aged50to64:{average:0.22}, over64:{average:0.14}}, income:{low:{average:0.49}, middle:{average:0.41}, high:{average:0.10}}, brand:{contoso:{average:0.64}, westhaven:{average:0.25}, other:{average:0.03}, lewis_clark:{average:0.04}}, },
	henderson:{ gender:{male: {average:0.44}, female: {average:0.56}}, age:{aged18to30:{average:0.17}, aged30to49:{average:0.37}, aged50to64:{average:0.23}, over64:{average:0.23}}, income:{low:{average:0.42}, middle:{average:0.43}, high:{average:0.15}}, brand:{contoso:{average:0.62}, westhaven:{average:0.29}, other:{average:0.03}, lewis_clark:{average:0.01}}, },
	manukau:{ gender:{male: {average:0.40}, female: {average:0.60}}, age:{aged18to30:{average:0.17}, aged30to49:{average:0.37}, aged50to64:{average:0.30}, over64:{average:0.13}}, income:{low:{average:0.52}, middle:{average:0.40}, high:{average:0.08}}, brand:{contoso:{average:0.59}, westhaven:{average:0.25}, other:{average:0.03}, lewis_clark:{average:0.05}}, },
	new_lynn:{ gender:{male: {average:0.46}, female: {average:0.54}}, age:{aged18to30:{average:0.28}, aged30to49:{average:0.40}, aged50to64:{average:0.21}, over64:{average:0.10}}, income:{low:{average:0.24}, middle:{average:0.35}, high:{average:0.41}}, brand:{contoso:{average:0.36}, westhaven:{average:0.23}, other:{average:0.10}, lewis_clark:{average:0.22}}, },
};

var categoryScreenNames = {
	location:"Location",
	gender:"Gender",
	age:"Age Group",
	income:"Income Level",
	brand:"Favourite Brand"
};

var groupScreenNames = {
	location: {
		all_locations:"All Locations",
		north_shore: "North Shore",
		newmarket:"Newmarket",
		glenfield:"Glenfield",
		henderson:"Henderson",
		manukau:"Manukau",
		new_lynn:"New Lynn"
	},
	gender: {
		male:"Men",
		female:"Women"
	},
	age: {
		aged18to30: '18-30 Age Group',
		aged30to49: '30-49 Age Group',
		aged50to64: '50-64 Age Group',
		over64: 'Over 64 Age Group',
	},
	income: {
		low:"Low Income",
		middle: "Middle Income",
		high:"High Income",
	},
	brand: {
		contoso:"Contoso",
		westhaven:"Westhaven",
		lewis_clark:"Lewis & Clark",
		other:"Other Brands",
	}
};