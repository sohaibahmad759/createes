To run:

Run on local db:
	Clone or download from gitHub.
	File is at link: https://github.com/sohaibahmad759/createes.git
	In the directory with all the files and package.json, run the following commands:
	-> npm install // to downlaod necessary dependencies
	-> mongod // to connect to local data base
	In another terminal run:
	-> npm start // to connect to server
	You may download RoboMongo if you want to see the collections in the data base.
	If you want to make changes in the db as an administrator, run :
	-> gulp serve
	in another terminal.

	The web app will be executable on the address provided by gulp (at port 7000 usually).

Directory Structure:
- server =>
	- models => includes all the db schemas for each component that we have.
	- routes => back end routes for storing objects in dba nd retrieving them
- client =>
	- src =>
		- store => deals with our main page, shopping cart and checking out
		- app => has the main controller (global that can be accessed from anywhere)
		- auth => login authorization and token authorization
		- dashboard => how to deal with profiles if you have user access and admin access
		- shared => includes services and directories

	- vendors, img, css,.. => all formats and links


Acknowledgements:

We acknowledge that we took components from the following individuls:
->david accosta - register and login system (mean stack tutorials on you tube)
->Yaroslav Zaklinskyi - basic structure and foundation (github files)
->Lima template in Bootstrap - for front end help
 






