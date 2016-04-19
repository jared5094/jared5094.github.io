//Purpose: get options chosen by user.
//Operation: add event handler to submit button of #userBets form.
//get value of each select tag and push it to userBets array.
//activate other functions.
function getBets(race) {
  $('#submit_race' + race).on('click', function(event) {
    event.preventDefault();
    $( "#submit_race" + race ).off();
    randomiseNames(race);
    var position = '';
    var name = '';
    for (var j = 0; j < raceNames[race].length; j++) {
      position = $('#' + raceData['IDs' + [race]][j]).val();
      name = $('#' + raceData['IDs' + [race]][j]).attr('val');
      betRanking[position] = name;
    }
    console.log('betRanking object');
    for (var key in betRanking) {
        console.log("key: " + key + "\nvalue: " + betRanking[key]);
      }
    for (var j = 0; j < raceNames[race].length; j++) {
      raceData['Bets' + [race]].push(betRanking[positions[j]]);
    }

    //testing
    console.log(raceData['Bets' + [race]]);
    checkBets(race);
    console.log("Points" + ": " + raceData['Points' + race]);
    displayResults(race);
    betRanking = {};
    resetBets(race);
  });
}


//Purpose: do an index-by-index comparison of Bets array and RandomNames array.
// Add a point if there is a match.
function checkBets(race) {
  for (var i = 0; i < raceNames[race].length; i++) {
    if (raceData['Bets' + race][i] === raceRandomNames[race][i]) {
      raceData['Points' + race] += 1;
    }
  }
}

function displayResults(race) {
  var raceID = "";
  $( "#race" + race ).find( ".results_container" ).append(resultsTable);
  raceID = $( "#race" + race ).find( ".results_table" );
  //print table rows.
  for (var i = 0; i < raceNames[race].length; i++) {
    raceID.find('tr').last().after(newRowResults);
    raceID.find('tr').last().find('td').first().append(raceRandomNames[race][i]);
    raceID.find('tr').last().find('td').first().next().append(positions[i]);
    
    //this column (Your Bets) finds and prints the position the user chose
    //for an athlete. E.g. if athlete is 'alpha', the betRanking object
    //is searched for a key with value of alpha.
    for (var j = 0; j < raceRandomNames[race].length; j++) {
      if (betRanking[positions[j]] === raceRandomNames[race][i]) {
        raceID.find('tr').last().find('td').last().append(positions[j]);
        if (positions[j] === positions[i]) {
          raceID.find('tr').last().find('td').first().addClass('highlight');
          raceID.find('tr').last().find('td').first().next().addClass('highlight');
          raceID.find('tr').last().find('td').last().addClass('highlight');
        }
        break;
      }   
    }
  }
}

function resetBets(race) {
  $('#reset_race' + race).on('click', function(event) {
    event.preventDefault();
    $( "#reset_race" + race ).off();
    $('#race' + race).find( ".results_table" ).remove();
    $('.betMenu').each( function() {
      $(this).find('option').first().html(
        "<option selected>select</option>");
    });
    raceRandomNames[race] = [];
    console.log('raceRandomNames: ' + raceRandomNames);
    raceData['Bets' + race] = [];
    raceData['Points' + race] = 0;
    getBets(race);
  });

}

$( "#button_race0" ).trigger( "click" );
