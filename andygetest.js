(function(){ 
	var YTlink = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=5&playlistId=UUTI5S0PqpgB0DbYgcgRU6QQ&key=AIzaSyCZ5jr4KJ-HebG-RH508ezGIvwzZMBYoJA";

	function getDate(videoDate) {
		var date = new Date(videoDate);
		var returnDate = "";
		var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
		var month = ["January","February","March","April","June","July","August","September","October","November","December"];
		
		returnDate += weekDay[date.getDay()] + " " + date.getDate();
		switch (date.getDate()){
			case 1:
			case 21:
			case 31:
				returnDate += "st ";
				break;
			case 2:
			case 22:
				returnDate += "nd ";
				break;
			case 3:
			case 23:
				returnDate += "rd ";
				break;
			default:
				returnDate += "th ";
				break;
		}
		returnDate += month[date.getMonth()] + " " + date.getFullYear() + ", " +  date.getHours() + ":";
		var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		returnDate += minutes;
		
		return returnDate;
		
	};

	function generateListEntry(listEntry) {
		var content="<div class='playlist-entry'>"
		
		content += "<a target='_blank' href='https://www.youtube.com/watch?v=" + listEntry.resourceId.videoId + "'><img src='" + listEntry.thumbnails.medium.url + "' /></a>";
		content += "<h2><a target='_blank' href='https://www.youtube.com/watch?v=" + listEntry.resourceId.videoId + "'>" + listEntry.title + "</a></h2>";
		content += "<p class='entry-date'>" + getDate(listEntry.publishedAt) + "</p>";
		content += "<p>" + listEntry.description + "</p>";
		
		content += "</div>";
		return content;
	}
	
	function populateYTContent(data){
		data.items.forEach(function(listEntry){
			$("#playlistHolder").append(generateListEntry(listEntry.snippet));
		})
	}
	
	//init
	$.get( YTlink, function( data ) {
	  populateYTContent(data);
	});
})();