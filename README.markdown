Backbone-JQUERY-Mobile Controls.
============================
See the BroadStreet Example = http://darrenhurst.github.com/BroadStreet/

![Example](http://backbonejs.org/docs/images/backbone.png) ![Example](http://requirejs.org/i/logo.png)

![Example](http://i1137.photobucket.com/albums/n510/dhurst74/ScreenShot2012-08-05at20241PM.png)

With a custom alert.js for IOS style notification!

![Example](http://i1137.photobucket.com/albums/n510/dhurst74/ScreenShot2012-08-06at74044PM.png)
#Description
A Backbone.js and Require.js Boilerplate by Greg Franko was used to demo these controls.
These controls give you "Jquery Mobile" like controls but using only Jquery and Backbone.

Follow Greg Franko  - https://github.com/gfranko/Backbone-Require-Boilerplate for the initial Boilerplate used in this project
for more information on setting up the boiler.

Broadstreet Mobile is North America’s boutique Mobile Solutions consulting firm, helping customers like RBC, CIBC, Rogers, BMO, Labatt, Yellow Pages Group, Loblaw, and other major organizations achieve sustainable data intelligence. We offer comprehensive strategy and consulting services to develop and deliver high quality end-to-end mobile, web, and social media solutions. We focus all of our efforts on delivering solutions and services through our unwavering commitment in bringing results to our customers. We are passionate about setting the standards for the next generation of mobile technology. 


#Getting Started
   1. Clone this repository
   2. Download and install [Node.js](http://nodejs.org/#download) (this is used to run the Require.js Optimizer)
   3. Download, install, and start a local web server (eg. [XAMPP](http://www.apachefriends.org/en/xampp.html)).  Make sure to put this repository in your local web server's public folder (eg. htdocs).

   **Note**: A local web server is required because Backbone-Require-Boilerplate dynamically pulls in an HTML dependency (a template), and IE and Chrome have local security restrictions that do not allow this action.  If you don't want to download and install a local web server, then you should be able to test the code locally with Firefox.  Keep in mind that if you remove the template, the code will work fine locally in all browsers.
   4. Enjoy using Backbone.js, Require.js, jQuery, Lodash, and Modernizr (enjoyment optional)
   5. Install Compass and start Compass Watch.
   
##Control Set Types

Controls take the target Div, and for input controls - this [view scope] for valueChange event 
### Text Input
Button
            <code>var Btn1 =  new Button().render("controls_right");
        	Btn1.setText("Click For Page 2");
        	Btn1.setEvent(this,"alertButton");</code>


Usage
			<code>
			var TextInput = new Input("controls",this).render();<br/>
        	TextInput.setTitle("Your Name");
        	</code>
        	
### Selection Input

Usage
            <code>
        	var Selection1 = new Selection("controls",this).render();<br/>
        	Selection1.setTitles("selection","make a selection");<br/>
        	Selection1.addRow("option1",1);<br/>
        	Selection1.addRow("option2",2);<br/>
        	</code>
       
### Toggle Input

Usage
  			<code>
			var Toggle1 = new Toggle("controls",this).render();<br/>
        	Toggle1.setTitle("Do you like this?");<br/>
        	Toggle1.setOptions("YES","NO");<br/>
        	</code>
        	
### Message View 

Usage
            <code>
			var Msg1 = new Msg("controls",this).render();<br/>
        	Msg1.setTitle("Do you like this?");<br/>
        	Msg1.setWarning("Something");<br/>
        	</code>
        	
### Label View

Usage
			<code>
			var Label1 = new Label("controls",this).render();<br/>
        	Label1.setTitle("label");<br/>
        	Label1.setLabel("label takes html");<br/>
        	</code>


##Contributors
Darren Hurst - BroadStreet Mobile<br/>
<a href="http://www.linkedin.com/profile/view?id=81321609&trk=tab_pro">Connect on LinkedIn</a><br/>

Lucas Koolma - BroadStreet Mobile<br/>
<br/>
Lyle Resnick - BroadStreet Mobile<br/>


![Example](http://i1137.photobucket.com/albums/n510/dhurst74/ScreenShot2012-08-05at43438PM.png)


## License
Copyright (c) 2012 BroadStreet Mobile 
Licensed under the MIT license.		
		  

	

