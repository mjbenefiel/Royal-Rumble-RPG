<h1> Royal Rumble RPG Game </h1>
<hr></hr>
Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project. 
<hr></hr>
<h3> App screenshot </h3>

![alt text](https://raw.githubusercontent.com/mjbenefiel/unit-4-game/master/assets/images/readme.jpg "Royal Rumble")

<hr></hr>
<h2> How it works </h2>
Select your wrestler. Choose an opponent. Hit the attack button until you're defeated, or you defeat all your enemies. Last man standing wins!
<hr></hr>

<h2>Technology used</h2>

[Animate.css](https://daneden.github.io/animate.css/)

[Bootstrap 3.3.7](http://getbootstrap.com/)

[jQuery 3.2.1](https://jquery.com/)


<hr></hr>

<h4>Below is a thorough, but not comprehensive, step-by-step process of how I got the app running in terms of code</h4>

function startGame:

- declare and define wrestler objects

  - each wrestler includes:
    - id
    - name
    - health points
    - base attack
    - attack power
    - counter attack power
    - image

- reset wrestler, defenders and defender

- reset wrestler selections

- bell sound 

- displayJR function for displaying announcer

- hideJR function for hiding announcer

- displayAnnouncement function (beg of game)

- hideAnnouncement function (beg of game)

- emptying divs

- displaying announcer and msg at beg of game

- .each() to display each wrestler
  - created panels (success/green for good)
  - health points included
  - storing wrestler images in these containers

- on click function to hide JR and move wrestler to ring

- remaining wrestlers go to defender area with danger panel

- on click function to add enemy to ring (warning panel)

- shakeDefender function to shake enemy every time he's attacked

- on click function for attack button

- method for decreasing defender HP by wrestler attack power

- status after each attack

- method for updating health points

- method for increasing wrestler attack power by base power

- opponent fight area clears after opponent is defeated

- player wins if/else statement

- everything clears
