(function(){ 
	var YTlink = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=5&playlistId=UUTI5S0PqpgB0DbYgcgRU6QQ&key=AIzaSyCZ5jr4KJ-HebG-RH508ezGIvwzZMBYoJA";
	
	function populateYTContent(data){
		alert(data.items);
	}
	
	$.get( YTlink, function( data ) {
	  populateYTContent(data);
	});
})();