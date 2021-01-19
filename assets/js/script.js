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
		var textArea = $("<textarea>").css({"min-width": "100%", "float": "left"});
		var saveBtn = $("<button>").text("Save");

		textArea.append(saveBtn);
		timeSpot.append(textArea); 
		timeRow.append(timeSpot);
		calendar.append(timeRow)

	}
}

renderDay();