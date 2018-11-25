---------------------------------
Prerequisite
---------------------------------

[Visual Studio 2017]

[Node] - https://nodejs.org/en/download/ 
Verify that you are running at least Node.js version 8.x or greater and npm version 5.x or greater by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

[Angular Cli 7] - To install run the following in command line. 
npm install -g @angular/cli
verify version running: ng --version

[Typescript] - https://www.typescriptlang.org/
Verify that you have version 3.1 or above for npm global and SDK for visual studio. 
To check Global: You can check by running tsc -v in any terminal window.
To check Visual Studio 2017: Right click on project -> properties -> Typescript Build -> Typescript Version 3.1 (should be there)


--------------------------------------
Getting Started
--------------------------------------

1. Right click on solution and select "Restore Nuget Packages"
2. Open terminal windows and browse to project location where the package.json file is, then run the following to install all the npm packages:
"npm install"
3. Run the application

---------------------------------
Swagger
---------------------------------
To test swagger

1. Run applicaton
2. add "/swagger" to url and should take to you swagger api tester

---------------------------------
Angular Karma Testing
--------------------------------
To test angular using karma
1. run "ng test" in a terminal where the angular.json file is located

