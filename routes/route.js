app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "pages/list-events.html",
		controller : "eventController"
	})
	.when("/create-event", {
		templateUrl : "pages/create-events.html",
		controller : "eventController"
	})	
	.when("/event-edit", {
		templateUrl : "pages/create-events.html"
	})	
	.otherwise({
        templateUrl : "<h1>Error</h1><p>Page Not Found</p>"
    });	
	
});