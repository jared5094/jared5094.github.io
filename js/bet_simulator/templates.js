var raceDiv =
  "<div class='race_container container_table'>" +
    "<div class='race_table'>" +
      "<div class='table_header'></div>" +
      "<table>" +
        "<tr class='head_row'>" +
          "<td>Athlete</td>" +
          "<td>Rank</td>" +
        "</tr>" +
      "</table>" +
    "</div>" +
    "<div class='buttons_container'>" +
      "<button class='submit_button'>Submit</button>" +
      "<button class='reset_button'>Reset</button>" +
    "</div>" +
    "<div class='results_container'>" +
      "<div class='table_header'></div>" +
    "</div>" +
  "</div>";

var resultsTable =
  "<table class='results_table'>" +
    "<tr class='head_row'>" +
      "<td>Athlete</td>" +
      "<td>Ranking</td>" +
      "<td>Your Bets</td>" +
    "</tr>" +
  "</table>";

var newRowRace = 
  "<tr>" +
    "<td></td>" +
    "<td>" +
      "<select class='betMenu'></select>" +
    "</td>" +
  "</tr>";

var newRowResults =
    "<tr>" +
      "<td></td>" +
      "<td></td>" +
      "<td></td>" +
    "</tr>";