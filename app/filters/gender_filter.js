myApp.filter('gender', function() {
	return function(genderInt) {
		switch(genderInt) {
			case 1:
				return "Male";
			case 2:
				return "Female";
			case 3:
				return "Not Disclosed";
		};
	};
});