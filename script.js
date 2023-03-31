
var currentHour = dayjs().format('H');
var today = dayjs();
 $('#currentDay').text(today.format('MMM D, YYYY'));



$(function () {
 

  
  var timeBlocks = $(".time-block");

  
  timeBlocks.each(function () {
    var hour = parseInt($(this).attr("data-hour"));
    console.log(hour);
    console.log(currentHour);
    currentHour = parseInt(currentHour);
    if (hour < currentHour) {
      console.log("past");
     
      $(this).addClass("past");
    } else if (hour === currentHour) {
      console.log('present');
      $(this).addClass("present");
    } else {
      console.log('future');
      $(this).addClass("future");
    }
  });
});
  

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  var savedEvents = JSON.parse(localStorage.getItem('savedEvents'));
  if (!savedEvents){
    savedEvents = 
                  {"hour-9": "",
                    "hour-10": "",
                    "hour-11": "",
                    "hour-12": "",
                    "hour-13": "",
                    "hour-14": "",
                    "hour-15": "",
                    "hour-16": "",
                    "hour-17": ""}
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));               

  } else {
    $('#hour-9').children()[1].value = savedEvents["hour-9"];
    $('#hour-10').children()[1].value = savedEvents["hour-10"];
    $('#hour-11').children()[1].value = savedEvents["hour-11"];
    $('#hour-12').children()[1].value = savedEvents["hour-12"];
    $('#hour-13').children()[1].value = savedEvents["hour-13"];
    $('#hour-14').children()[1].value = savedEvents["hour-14"];
    $('#hour-15').children()[1].value = savedEvents["hour-15"];
    $('#hour-16').children()[1].value = savedEvents["hour-16"];
    $('#hour-17').children()[1].value = savedEvents["hour-17"];

  }
  var saveButton = $('.fa-save');

  saveButton.on('click', function () {
      
    let grandParent = $(this).parent().parent();
    let parentSibling = $(this).parent().siblings();
    let grandParentId = grandParent.attr('id');
    let eventDescription = parentSibling[1].value;

    savedEvents[grandParentId] = eventDescription;
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));



    console.log(eventDescription);
    
  });
  


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });

console.log(today.format('H'));