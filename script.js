function generateTable() {
    var rowVal = parseInt(document.getElementById("rows").value);
    var colVal = parseInt(document.getElementById("cols").value);

    if (rowVal < 2 || rowVal > 10 || colVal < 2 || colVal > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    var output = "<table>";

    for (var counter = 1; counter <= rowVal; counter++) {
        output += "<tr>";
        for (var counterTwo = 1; counterTwo <= colVal; counterTwo++) {
            output += "<td>" + (counter * counterTwo) + "</td>";
        }
        output += "</tr>";
    }

    output += "</table>";
    document.getElementById("tableOutput").innerHTML = output;
}
