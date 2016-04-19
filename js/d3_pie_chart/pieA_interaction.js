//append buttons and select menus for displaying pie charts.
function appendPieButtons() {
	$( "#pieA_select_location" ).append(
		"<option value='all_locations'>All Locations</option>");
	for (var category in studyGroups['north_shore']) {
		$( '#pieA_select_category' ).append(
			"<option value='" + category + "'>" + categoryScreenNames[category] + "</option>");
	}
	for (var location in locationTotals) {
		$( '#pieA_select_location' ).append(
			"<option value='" + location + "'>" + groupScreenNames['location'][location] + "</option>");
	}
	$( "#pieA_select_location" ).find( "option[value='" + locationPieA + "']" ).attr('selected', 'selected');
	$( "#pieA_select_category" ).find( "option[value='" + categoryPieA + "']" ).attr('selected', 'selected');
}

function clickOptionsPieA() {
	$( '#pieA_select_location' ).change(function() {
		locationPieA = $( "#pieA_select_location option:selected").attr('value');
		displayDataPieA();
	});
	$( '#pieA_select_category' ).change(function() {
		categoryPieA = $( "#pieA_select_category option:selected" ).attr('value');
		displayDataPieA();
	});
}

function displayDataPieA() {
	console.log('ran displayDataPieA');
	if (locationPieA === 'all_locations') {
		allLocationsPieA();
	} else {
		pushDataPieA();
	}
	updatePieChart(
		pieA,
		dataPieA,
		categoryScreenNames[categoryPieA],
		groupScreenNames['location'][locationPieA]);
}

function pushDataPieA() {
	console.log('location: ' + locationPieA);
	console.log('category: ' + categoryPieA);
	dataPieA = [];
	for (var group in studyGroups[locationPieA][categoryPieA]) {
		dataPieA.push({
			label: groupScreenNames[categoryPieA][group],
			value: studyGroups[locationPieA][categoryPieA][group]['average'] * 100
		});
	}
}

function allLocationsPieA() {
	dataPieA = [];
	console.log('dataPieA: ' + dataPieA);
	for (var group in categoryTotals[categoryPieA]) {
		console.log('label: ' + groupScreenNames[categoryPieA][group]);
		console.log('value: ' + categoryTotals[categoryPieA][group] * 100);
		dataPieA.push({
			label: groupScreenNames[categoryPieA][group],
			value: categoryTotals[categoryPieA][group] * 100
		});
	}
	console.log('dataPieA: ' + dataPieA);
}

//update the pie chart contents.
function updatePieChart(pie, data, title1, title2) {
	pie.updateProp("header.title.text", title1 + ' Statistics in ' + title2);
	pie.updateProp("data.content", data);
}

function initialDisplayData() {
	setTimeout(function() {
		displayDataPieA();
	}, 0);
}

function deferEvents() {
	var dfd = $.Deferred();
	dfd.resolve();
	dfd.done(getTotalPopulations, appendPieButtons, clickOptionsPieA, initialDisplayData);
}

deferEvents();

