// from data.js
var tableData = data;

// reference to body and table
var tbody = d3.select('tbody')
var table = d3.select('table')

// creating table using function 
createTable(data)

// selecting form and filter button
let filterButton = d3.select('#filter-btn')
let form = d3.select('#form')

// event handlers 
filterButton.on('click', runHandler)
form.on('submit', runHandler)

// handler function to run when user inputs date
function runHandler(){



    
    let input = d3.select('#datetime')
    let value = input.property('value')
    // let inputCity = d3.select('#city')
    console.log(value)
    //emtpy table
    tbody.html('')

    //filter for date equal to user input 
    let newResult = tableData.filter(item => item.datetime === value)

    //insert filtered data into table 
    createTable(newResult)
    d3.event.preventDefault();

}

//function to create new table 
function createTable(data){
    data.forEach(item => {

        //creating rows
        let row = tbody.append('tr')
        //creating columns 
        let date = row.append('td')
        let city = row.append('td')
        let state = row.append('td')
        let country = row.append('td')
        let shape = row.append('td')
        let durationMinutes = row.append('td')
        let comment = row.append('td')
    
        //appending data to table
        date.text(item.datetime)
        city.text(item.city)
        state.text(item.state)
        country.text(item.country)
        shape.text(item.shape)
        durationMinutes.text(item.durationMinutes)
        comment.text(item.comments)
    }) 
}

