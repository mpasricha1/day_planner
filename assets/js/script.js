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
		var textArea = $("<textarea>").attr({"class": "col-md-10"});
		var saveBtn = $("<button>").attr({"class": "col-md-1"}).text("Save");

		timeRow.append(timeSpot, textArea, saveBtn);
		calendar.append(timeRow)

	}
}

renderDay();