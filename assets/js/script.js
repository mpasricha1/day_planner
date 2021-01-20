var calendar = $(".container"); 

function renderDay(){
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
		var timeSpot = $("<div>").attr({"class": "col-md-1"}).text(`${timeOfDay} ${amOrPm}`);
		var textArea = $("<input>").attr({"class": "col-md-10", "type": "text", "id":`${i}text`});
		var saveBtn = $("<button>").attr({"class": "btn btn-info col-md-1", "id": `${i}btn`}).text("Save");

		timeRow.append(timeSpot, textArea, saveBtn);
		calendar.append(timeRow)
	}
}
$(document).ready(function() {

	$("button").on("click", function(){
		var buttonId = $(this).attr("id"); 
		console.log(buttonId)
		// alert(`Button number ${buttonId} clicked`)
	});
});

renderDay();