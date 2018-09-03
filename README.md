# unit-4-game

Project: RPG Game | Royal Rumble

Author: Michael Benefiel

Why I created this project: 

Homework for the University of Kansas Coding Boot Camp, and to develop basic JS skills.

Feel free to use some or all of this code if you're trying to complete a similar project. 

THE PROJECT

Bootstrap 3.3.7

index.html to structure RPG webpage/app

style.css used to style RPG webpage/app

animate.css for extra effects

game.js for jQuery and JavaScript


JavaScript & jQuery 

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