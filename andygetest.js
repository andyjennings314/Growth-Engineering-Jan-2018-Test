(function(){ 
	var YTlink = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=5&playlistId=UUTI5S0PqpgB0DbYgcgRU6QQ&key=AIzaSyCZ5jr4KJ-HebG-RH508ezGIvwzZMBYoJA";
	
	function generateListEntry(listEntry) {
		var content="<div class='playlist-entry'>"
		
		content += "<h2>" + listEntry.snippet.title + "</h2>";
		
		content += "</div>";
		return content;
	}
	
	function populateYTContent(data){
		data.items.forEach(function(listEntry){
			$("#playlistHolder").append(generateListEntry(listEntry));
		})
	}
	
	$.get( YTlink, function( data ) {
	  populateYTContent(data);
	});
})();