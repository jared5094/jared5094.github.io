//get percentage of each demographic group in total population.
function getTotalPopulations() {
	var total=0;
	//get names of all categories and their groups and store them in categoryTotals.
	for (var category in studyGroups['north_shore']) {
		categoryTotals[category] = {};
		for (var group in studyGroups['north_shore'][category]) {
			categoryTotals[category][group] = 0;
		}
	}
	//add percentages for each demographic group by iterating through studyGroups.
	for (var location in studyGroups) {
		for (var category in studyGroups[location]) {
			for (var group in studyGroups[location][category]) {
				categoryTotals[category][group] +=
				studyGroups[location][category][group]['average'] *
				locationTotals[location]['average'];
			}
		}
	}
	//add total for each location.
	categoryTotals['location'] = {};
	for (var location in locationTotals) {
		categoryTotals['location'][location] = locationTotals[location]['average'];
	}
	//print each demographic total.
	for (var category in categoryTotals) {
		console.log('category: ' + category);
		for (var group in categoryTotals[category]) {
			console.log('TOTAL ' + group + ': ' + categoryTotals[category][group]);
		}
	}
}


