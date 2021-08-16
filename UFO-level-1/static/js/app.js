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

// Setting variable for filter table button
var tableFilter = d3.select("#filter-btn");
// Filtering data by clicking filter table button
tableFilter.on("click", dataFilter);

// Filering data by pressing enter button
// All or any input fields can be entered
var filterChange = d3.select("#filters")
filterChange.on("change", dataFilter)


// Setting data filter function
function dataFilter() {
    // Showing table in HTML
    tableBody.html("")
    // Setting filter data as table data for further filtering
    filterData = tableData

    // Filtering table data by date value
    date = d3.select("#datetime").property("value")
    if(date) {
    filterData = filterData.filter( r => r.datetime == date )}

    // Filtering table data by city value
    city = d3.select("#city").property("value")
    if(city) {
    filterData = filterData.filter( r => r.city == city )}

    // Filtering table data by state value
    state = d3.select("#state").property("value")
    if(state) {
    filterData = filterData.filter( r => r.state == state )}

    // Filtering table data by country value
    country = d3.select("#country").property("value")
    if(country) {
    filterData = filterData.filter( r => r.country == country )}

    // Filtering table data by shape value
    shape = d3.select("#shape").property("value")
    if(shape) {
    filterData = filterData.filter( r => r.shape == shape )}

    // Invoking function to show filtered data
    alienTable(filterData)
}
// Invoking function to show data
alienTable(tableData);
