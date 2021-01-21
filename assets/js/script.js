var calendar = $(".container");
var currentDate = moment().format("MMMM Do YYYY");
var dailyTasks = [];
var taskObject = {
	timeSlot: "", 
	task: ""
};

function renderDay(){
	$("#currentDay").text(currentDate);
	for(var i=9; i<18; i++){
		var timeRow = $("<div>").attr({"class": "row"});
		var amOrPm; 
		var timeOfDay = i;

		if(i > 11){
			amOrPm = "PM"; 
		}else{
			amOrPm = "AM"
		}
		if(i > 12){
			timeOfDay = i - 12;
		}

		var inputGroup = $("<div>").attr({"class": "input-group mb-3", "id":`${i}`});
		var timeSpot = $("<div>").attr({"class": "col-md-1"}).text(`${timeOfDay} ${amOrPm}`);
		var textArea = $("<input>").attr({"class": "form-control col-md-10", "type": "text", "id":`t${i}`});
		var inputGroup2 = $("<div>").attr({"class": "input-group-append"});
		var submitBtn = $("<button>").attr({"class": "btn btn-info", "type": "button"}).text("Submit")

		inputGroup.append(timeSpot,textArea,inputGroup2,submitBtn);
		calendar.append(inputGroup)
	}
};

function saveData(){
	taskObject.timeSlot = $(this).parent().attr("id");
	taskObject.task = $(`#t${taskObject.timeSlot}`).val();

	if(localStorage.getItem(`${currentDate}`) === null){
	 	dailyTasks.push(taskObject);
	 	localStorage.setItem(currentDate, JSON.stringify(dailyTasks));
	}else{
		dailyTasks = JSON.parse(localStorage.getItem(`${currentDate}`))
		dailyTasks.push(taskObject);
		localStorage.setItem(currentDate, JSON.stringify(dailyTasks));
	}
}

function loadData(){
	if(localStorage.getItem(`${currentDate}`) !== null){
		var data = JSON.parse(localStorage.getItem(`${currentDate}`))

		data.forEach(datum => {
			console.log(datum.timeSlot);
			$(`#t${datum.timeSlot}`).val(datum.task);
		})
	}
}; 

function colorCodeTasks(){
	var hour = 13
	// moment().format("HH"); 
	$(".col-md-10").each(function(){
		var taskHour = parseInt($(this).attr("id").substring(1));
		console.log(taskHour);
		if(taskHour < hour){
			$(this).css({"background-color": "#778899", "color": "white"});
		}else if(taskHour > hour){
			$(this).css({"background-color": "#CD5C5C", "color": "white"});
		}else{
			$(this).css({"background-color": "#90EE90", "color": "white"});
		}
	})
}
$(document).ready(function() {

	$("button").on("click", saveData)
});

renderDay();
loadData();
colorCodeTasks();