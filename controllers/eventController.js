app.controller('eventController',  
	function($scope, $http, $log, $location, $window){
// -------------Get all Event Ajax Request---------------------------------------------

		$http({
		    method : "GET",
		    url : "http://localhost/web-services/public/index.php/api/event"
		})	
		.then(function mySuccess(response) {
			$scope.events = response.data;		

	    }, function myError(response) {
	      	$log.log("Error please fix");
	  	});
// -------------Create Event Submit Button Ajax Request---------------------------------------------
		$scope.event = {};
		$scope.submit = function(){
			// $log.log(this.event);
			$http({
			    method : "POST",
			    url : "http://localhost/web-services/public/index.php/api/event",
			    data : this.event
			})	
			.then(function mySuccess(response) {
				// $scope.events = response.data;	
				$location.path("/");	

		    }, function myError(response) {
		      	$log.log("Error please fix");
		  	});
		}		
//--------------Delete Event Button Ajax Request--------------------------------------------------- 
		$scope.delete = function(id){
		    var deleteUser = $window.confirm('Are you absolutely sure you want to delete?');

		    if (!deleteUser) {
		      return false;
		    }			
			$http({
				url : "http://localhost/web-services/public/index.php/api/event/"+id,
				method : "DELETE"
			})
			.then(function Success(response){
				$location.path("/");				
			}, function Error(response){
		      	$log.log("Error please fix");				
			});
		}
//---------------Edit Event Request to get Event Data-----------------------------------------------
		$scope.edit = function (id){
			
		}
	}
);

app.controller('createEventController',  
	function($scope, $http, $log, $location){

	}
);