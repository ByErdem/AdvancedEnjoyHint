# AdvancedEnjoyHint
This is an enhanced version of the enjoyhint.js plugin. I added labelColor and arrowColor features.
But now, i need to add position features. In some cases i need to change the position of the label content.
But this is currently very mixed. I could not fix yet. In this case, i need help from you. Maybe you can fix more fast.

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
