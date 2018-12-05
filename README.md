<!DOCTYPE html>
<body>
<h2 align="center"> MEDICATION TAKEBACK CATALOGING APP</h2>
<h4><b>Professor:</b> Yug Yung Lee</h4>

<h4>Team Details - Team Id: 1</h4>
<blockquote>
 <p><strong>Name: </strong>Veeresha M Thotigar</p>
<p><strong>Class Id: </strong>53</p>
 </blockquote>
<blockquote>
 <p><strong>Name: </strong>Sai Sampath Kumar Raigiri </p>
<p><strong>Class Id: </strong>41</p>
 </blockquote>

<blockquote>
 <p><strong>Name: </strong> Vineetha Gummadi</p>
<p><strong>Class Id: </strong>15</p>
 </blockquote>
<blockquote>
 <p><strong>Name: </strong>Vidyullatha Lakshmi Kaza </p>
<p><strong>Class Id: </strong>26</p>
 </blockquote>

## Introduction: 

   Unused home medications serve as a source for poisonings, abuse, and misuse. Leftover medications include two primary categories: over-the-counter and prescription products, with prescription further classified as non-controlled or controlled substances.

   Managing unused, unwanted and expired medications is a safety as well as an environmental concern. Safety and accidental poisoning concerns for smaller children and family pets are on the rise, however, headlines across the nation are focusing on two distinct areas of concern: the contamination of drinking water supplies with pharmaceuticals, and the rise of teen abuse of prescription medications. 

   Traditionally, we were told to flush unwanted medications down the drain or toilet rather than keeping them in the home. Although effective in preventing medication flushing creates a new and growing problem in the environment. Antibiotics and other medications in a septic system can destroy beneficial bacteria necessary for the system to operate. Wastewater treatment plants are not designed to remove or process many compounds found in medications that end up being discharged into our surface and groundwater. 

   Community Members, especially parents of teenagers, need a safe and consistent means of disposing of unwanted medications. According to the Monitoring, the Future Survey conducted by the National Institute on Drug Abuse (NIDA), most of the teens reporting the use of medications say that they obtained them from friends or family members, with one-fifth to one-quarter reporting taking them without permission. Parents and caregivers need to understand the importance of safeguarding and proper disposal of their medications. 

   Here comes our idea “Medication take back events” collect medications from individuals and households. National attention is growing and more appropriate methods of safely disposing of unwanted medications are in the works.

## Project Goal:

The motivation of our project is to educate the community and bring awareness to the following issues regarding disposal of unused, unwanted and expired medications from the home and dispose of them safely to prevent poisonings, prevent prescription drug abuse, and protect the environment.

## Project Objectives:
1.  Illustrate the degree to which controlled prescription medications remain unused.

2.  Identify specific classes/agents that are more likely to remain unused.

3.  The objective of the system is to record all the features/details of the medications quantity prescribed and quantity remaining at the take-back events and generates the reports for public awareness and research motive.

4.  Provide recommendations for reducing the accumulation of medications in homes.
 

## Features:

  Our Medication take-back application can be accessible by all the authorized members. The system will have the features like,

1. Built using an IONIC platform.

2. Can be used on iPhone and Android mobile phones.

3. Tested on Android and IOS platform.

4. Scan the medicine using a camera.

5. Report generation.

6. The generated data will be auto-filled.

7. Generated Data will be saved in the database

8. Gathering the details of the medication.

9. Generation of the report on daily, weekly, monthly ranges and based on the event place.

## Significance:

1. To bring awareness among people of safe disposal of unwanted medications. 

2. Teen abuse of prescription medications.

3. Safety and accidental poisoning of children and family pets.

4. Keeping our environment clean of toxins from medications. 

## Screens:
<h5> For Increment - 1  we have developed the following pages:</h5>

1. Login Page

2. Registration Page

3. About Us

<h5> For Increment - 2  we have developed the following pages:</h5>

1. Events home page

2. Events create page

3. Events join page

4. Product log page

<h5> For Increment - 3  we have developed the following pages:</h5>

1. Chat Page

2. Barcode Generation

3. Event Page

4. Report page

<h2>Detail Design of Features (using tools):</h2>
<h3>WireFrames and Mockups: </h3>
<h4>Login Page</h4>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/Login%20Page(wire%20frame).png" width="450px" height="500px"><br/>
<h4>Registration Page</h4>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/Registration%20Page(wire%20frame).png" width="450px" height="500px">
<h4>Home Page</h4>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/Main%20Page%20(wire%20frame).png" width="450px" height="500px">
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/MEDICINE%20DETAILS%20FIRST%20PAGE(wire%20frame).png" width="450px" height="500px">
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/MEDICINE%20DETAILS%20SECOND%20PAGE(wire%20frame)%20.png" width="450px" height="500px"/>
<h3>After capturing the picture. All the required details about the medicine will be autofilled from REST services. </h3>

<h3>Architecture diagram/Sequence diagram/Class diagram </h3>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/Class%20Diagram%20.png" >

<h3>Write User Stories /Use Case/Service description </h3>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/USE%20CASE%20DIAGRAMS.png" >

<h2>Implementation (using Ionic 3,Angular, Node Js,MongoDB)</h2>

<h3>Fire Base Page</h3>

In Ionic 3, authentication and registering the application users is done by using the firebase service. Below is the code snippet to initialize the firebase.

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/Firebase%20plugins.PNG" >

<h3>Login Page</h3>

Login page form provides the input field for username and password, the entered credentials are validated on function calling SignIn(). Below code snippet: left form page and at the right logic to validate.

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/login.png" >

<h3>User Registration Page</h3>

Registration page form provides the input field for username details, the entered details are validated and saved on function calling register(). Below code snippet: shows left form page and at the right logic to validate and save details.

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/register%20page.png" >

<h3>Event Creation Page</h3>

Event creation page form provides the input field for event details, the entered details are saved on function calling createEvent(). Below code snippet: shows left form page and at the right logic to save details.

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/events%20create.png" >

<h3>Join Event Page</h3>

Other events that are created by other users are listed here, if interested the current logged in user can join in the events listed. Below code snippet: shows left list page and at the right logic to join 
 event.

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/joins%20page.png" >

<h3>Pruduct search and details save page</h3>

On search of the product, its details are retrieved and auto-filled in the form fields, later user can edit and save the product details on function calling drugData(). Below code snippet: shows left form page and at the right logic to save details.

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/drug%20data%20loader.PNG" >


<h2>Server Side:REST Api's</h2>

<h3>App: MongoDB connection, Schema initilization, controller imports</h3>

In Node JS, app.js is the main server file where express is initialised and incorporates the CORS. A logic for local database connection, schema initialization and controller imports are as shown below.

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/app.png" >

<h3>User Controller:</h3>

<h5>GET : /users/search</h5>
<h5>POST: /users/create</h5>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/usersctrl.PNG" >

<h3>Event Controller:</h3>

<h5>GET : /events/search/users</h5>
<h5>POST: /events/create</h5>
<h5>PUT: /event/update/users</h5>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/eventsctrl.PNG" >

<h3>Product Controller:</h3>

<h5>GET : /drug/search</h5>
<h5>POST: /product/create</h5>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/drugCtrl.PNG" >

<h2>Outputs:</h2>

<h3>Login and Register</h3>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/loginandregister.png">

<h3>Event:</h3>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/Events.PNG">

![](https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/Increament%203/Volunteers.PNG)


<h3>Product Log Details</h3>

<h4> 1. Product Search: </h4>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/log1.png">

<h4> 2. Product Details Log: </h4>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/log2.png">

<h3> About Page </h3>

<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/About.PNG">

<h3> Chat Page </h3>

<img
src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%203/Chat%20Page.jpeg">

<h3> Report Generation </h3>

Report-1

<img
src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%203/report%201.PNG">

Report-2

<img
src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%203/Report%202.PNG">



<h2>Project Management: describe it in terms of the first increment (with ZenHub):</h2>
<h3>Implementation status report </h3>
<h3>Work completed</h3>
<p>Create Issues/tasks for Increment 1:</p>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/ZenHub/closedIssues.JPG">
<p>Burndown chart for Increment 1:</p>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%201/ZenHub/increment1.JPG">

<h3>Increment 2 </h3>
<p>Create Issues/tasks for Increment 2:</p>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/incre2Zenhub_closed.PNG">
<p>Burndown chart for Increment 2:</p>
<img src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%202/incre2Zenhub.PNG">


<h3>Increment 3 </h3>

<p>Create Issues/tasks for Increment 3:</p>

<img
src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%203/Issues%20and%20pull%20request.PNG">

<p>Burndown chart for Increment 3:</p>

<img
src="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/Documentation/INCREMENT%203/ZenHub%20BurnDown.PNG">

<h4>Cloud deployment link</h4>

[Medication-take-back](https://medication-take-back.herokuapp.com/)

<h4>Android deployment link</h4>

[Android APK](https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/blob/master/APK/app-debug.apk)

<h4>Bibliography</h4>
<ul>
<li>https://ionicframework.com/docs/native/camera/</li>
<li>https://nodejs.org/en/</li>
<li>https://www.mongodb.com/</li>
<li>https://www.drugbank.ca/</li>
</ul>
<h5>Source Code link:</h5>
<a href="https://github.com/saisampathkumar/CS5551_WebKrakers_ProjectTeam1/tree/master/src/"> Source code link</a>
</body>
</html>
