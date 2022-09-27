// default data
let dates = [
    {
        month: "SEP",
        date: "27",
        day: "TUE",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        class: "fa-regular fa-square checkbox",
    },
    {
        month: "SEP",
        date: "28",
        day: "WED",
        startTime: "2:00 PM",
        endTime: "3:00 PM",
        class: "fa-regular fa-square checkbox",
    },
    {
        month: "SEP",
        date: "30",
        day: "FRI",
        startTime: "4:00 PM",
        endTime: "5:00 PM",
        class: "fa-regular fa-square checkbox",
    },
    {
        month: "OCT",
        date: "1",
        day: "SAT",
        startTime: "12:30 PM",
        endTime: "1:30 PM",
        class: "fa-regular fa-square checkbox",
    },
    {
        month: "OCT",
        date: "2",
        day: "SUN",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        class: "fa-regular fa-square checkbox",
    },
    {
        month: "OCT",
        date: "3",
        day: "MON",
        startTime: "2:00 PM",
        endTime: "3:00 PM",
        class: "fa-regular fa-square checkbox",
    },
    {
        month: "OCT",
        date: "4",
        day: "TUE",
        startTime: "5:30 PM",
        endTime: "6:30 PM",
        class: "fa-regular fa-square checkbox",
    },
    {
        month: "OCT",
        date: "5",
        day: "WED",
        startTime: "5:30 PM",
        endTime: "6:30 PM",
        class: "fa-regular fa-square checkbox",
    },
  ];


// Make each card, which are row columns, with the data
let card = d3
    .select("#selectionArea")
    .selectAll("div")
    .data(dates)
    .enter()
    .append("div")
    .attr("class", "col card")
    .attr("style", "padding:0.5em; margin: 1em;");

// Append the month
card
    .append("h6")
    .attr("style", "color:gray; text-align:center")
    .text((d) => d.day);

// Append the date
card
    .append("h4")
    .attr("style", "color:black; font-weight:bold; text-align:center")
    .text((d) => d.date);

// Append the month
card
    .append("h6")
    .attr("style", "color:gray; text-align:center")
    .text((d) => d.month);

// Adding the times
card
    .append("text")
    .attr("style", "color:black; text-align:center")
    .attr("dy", "0em")
    .text((d) => d.startTime)

card
    .append("text")
    .attr("style", "color:black; text-align:center")
    .attr("dy", "2em")
    .text((d) => d.endTime);

// Checkbox change functions based upon previous checkbox class state
card
  .append("div")
  .append("i")
  .attr("class", "fa-regular fa-square fa-2x checkbox")
  .on("click", function (d) {
    if(d.target.className == "fa-regular fa-square fa-2x checkbox"){
        d3.select(this)
            .attr("class", "fa-regular fa-square-check fa-2x yes checkbox");
    }
    else if(d.target.className == "fa-regular fa-square-check fa-2x yes checkbox"){
        d3.select(this)
            .attr("class", "fa-regular fa-square-check fa-2x maybe checkbox");
    }
    else{
        d3.select(this)
            .attr("class", "fa-regular fa-square fa-2x checkbox");
    }
    })
   // Hover effects, turns down opacity
   .on('mouseover', function(d, i) {
        d3.select(this)
            .attr("style", "opacity:0.5");
    })
    .on('mouseout', function (d, i) {
    d3.select(this)
        .attr("style", function(d){
            d.color
        });
    });

// function to clear all boxes
function clearAll() {
  let checkboxes = document.getElementsByClassName("checkbox");

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].className = "fa-regular fa-square fa-2x checkbox";
    dates[i].class = "fa-regular fa-square fa-2x checkbox";
  }
  var modal = document.getElementById("submittedModal");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}