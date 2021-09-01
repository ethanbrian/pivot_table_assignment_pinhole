Instructions on how to build this project
Setup for local Development
You can use create-react-app to setup the application. To install create-react-app run the following command.
Copy this command : npm install -g create-react-app
To create basic React application use following commands.
create-react-app pivot_table
Now, the application is cloned in the pivot_table demo folder. Run the following command one-by-one to navigate to the pivot_table demo folder, and install the required npm dependent packages.
cd pivot_table

npm install

Adding Syncfusion packages

All the available Essential JS 2 packages are published in npmjs.com public registry. To install pivot table component, use the following command.
npm install @syncfusion/ej2-react-pivotview --save

then run npm start to run it on the browser

Architectural view
This project basically implements the syncfusion library in react.
with adding its css references from syncfusion to give the table look
then since its class based components the widgets are being constructed.
Syncfusion has inbuilt methods that enable getting data from json file.
syncfusion has enabled sticky table effect and grouping.

Assumptions
It is a good task to test your proficiency in react.
I have known when to use relevant codes.

Next steps to take
Is to able to fetch this data from an api

