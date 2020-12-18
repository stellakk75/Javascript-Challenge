// from data.js
var tableData = data;

// reference to body and table
var tbody = d3.select('tbody');

// creating table using function 
createTable(tableData);

// filter button and event handler
let filterButton = d3.select('#filter-btn').on('click', runHandler);

// handler function to run when user inputs date
function runHandler(){

    // Prevent the page from refreshing.
    event.preventDefault();

    let input = d3.select('#datetime');
    let value = input.property('value');

    //emtpy table
    tbody.html('');

    //filter for date equal to user input 
    let newResult = tableData.filter(item => item.datetime === value);

    //insert filtered data into table 
    createTable(newResult);


}

//function to create new table 
function createTable(data){
    data.forEach(item => {

        //creating rows
        let row = tbody.append('tr');
        //creating columns 
        let date = row.append('td');
        let city = row.append('td');
        let state = row.append('td');
        let country = row.append('td');
        let shape = row.append('td');
        let durationMinutes = row.append('td');
        let comment = row.append('td');
    
        //appending data to table
        date.text(item.datetime);
        city.text(item.city);
        state.text(item.state);
        country.text(item.country);
        shape.text(item.shape);
        durationMinutes.text(item.durationMinutes);
        comment.text(item.comments);
    }) 
}

