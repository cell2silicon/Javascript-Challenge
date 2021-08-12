// from data.js
var tableData = data;

// YOUR CODE HERE!
// Getting table references

var tableBody = d3.select("tbody");

// Create function to populate table in webpage
function alienTable(data) {
// Iterate through the data 
    data.forEach((dataRow) => {
        // Append row to table body
        let row = tableBody.append("tr");
        
        // Loop through each row in Data set
        // Add each value to table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td")
            cell.text(val);
          }
        );
    });
}
var tableFilter = d3.select("#filter-btn");

tableFilter.on("click", dataFilter);
var dateChange = d3.select("#datetime")
dateChange.on("change", dataFilter)

function dataFilter() {
    tableBody.html("")
    filterData = tableData
    date = d3.select("#datetime").property("value")
    if(date) {
    filterData = filterData.filter( r => r.datetime == date )}
    city = d3.select("#city").property("value")
    if(city) {
    filterData = filterData.filter( r => r.city == city )}
    alienTable(filterData)
}

alienTable(tableData);
