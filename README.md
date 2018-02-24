# AdvancedEnjoyHint
Finally I added change position of label content feature. For this you have to use xPos and yPos features. Also I added hideArrow feature too. Sometimes some divs couldn't find, but i don't know this why. Maybe you can find a solution. Thanks in advance.

Features:

	$(document).ready(function(){
	
		var enjoyhint_instance = new EnjoyHint({});

		var enjoyhint_script_steps = [
		  {
			'next .navbar-brand' : 'Welcome to Turbo Search! Let me guide you through its features.',
			'nextButton' : {className: "myNext", text: "Sure"},
			'skipButton' : {className: "mySkip", text: "Nope!"},
		      	'labelColor':'255,0,0',
		      	'arrowColor':'0,0,255'
		  },
		  {
			'click #ASPxRoundPanel1_RPC': "<div style='color:black;'>Lütfen bu sayfadan bir klasör seçiniz</div>",
			'arrowColor': '0,0,0',
			"labelColor": '0,0,0',
			"xPos": "500",
			"yPos": "200",
			"hideArrow": true,
			'showSkip': false
		  },
		  {
			'key #mySearchButton' : "Insert your search request and press 'Enter'",
			'keyCode' : 13
		  },
		  {
			'click .btn' : 'This button allows you to switch between the search results'
		  },
		  {
			'next .about' : 'Check the list of all the features available',
			'shape': 'circle'
		  },
		  {
			'next .contact' : 'Your feedback will be appreciated',
			'shape': 'circle',
			'radius': 70,
			'showSkip' : false,
			'nextButton' : {className: "myNext", text: "Got it!"}
		  }

		];

		enjoyhint_instance.set(enjoyhint_script_steps);
		enjoyhint_instance.run();
			
  });
