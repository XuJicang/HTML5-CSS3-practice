function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation,displayError);
		}else{
			alert("Oops,no geolocation support");
			}
	}// JavaScript Document
	function displayLocation(position){
		var latitude=position.coords.latitude;
		var longitude=position.coords.longitude;
		var div=document.getElementById("location");
		div.innerHTML="you are at latitude:"+latitude+",longitude"+longtude;
		}
	function displayError(error){
		var errorTypes={
			0:"Unknown error",
			1:"permission denied by user",
			2:"position is not available",
			3:"request timed out"
			};
			if(error.code==0||error.code==2){
				errorMessage=errorMessage+" "+error.message;
				}
				var div=document.getElementById("location");
				div.innerHTML=errorMessage;
		}