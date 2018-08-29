# unit-4-game

Project: RPG Game | Old School Wrestlemania Edition

Author: Michael Benefiel

Why I created this project: 

Homework for the University of Kansas Coding Boot Camp, and to develop basic JS skills.

Feel free to use some or all of this code if you're trying to complete a similar project. --- I'M JUST BEGINNING THE PROJECT AS OF AUGUST 28, 2018

INITIAL READ ME 08.28.2018

- choose character by clicking fighter's picture.
    - player will fight as that character the entire game.

- will have four characters for this game.

- Chosen player must defeat all remaining fighters.

- Enemies should move to "Enemies Available to Attack" row.

- Click the enemy you'd like to fight.

- Enemy moves to "Defender" row.

- Attack by clicking an "attack" button.

- Text will appear below enemy that shows you "attacked so and so for 8 damage points" and "so and so attacked you back for 25 damage points".

- Health points need to correspond to the attack text.

- If your player is defeated, you can click restart button to restart the game.

- If you win, your enemy disappears and you can click another enemy to fight.

- Each time the player attacks, their character's Attack Power increases by its base Attack Power. For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).

- Counter attack power (enemy attack power) never changes.

- No characters can heal or recover health points.

- Your health does not reset if you win.

- Alert after you defeat every enemy.


CHARACTERS:
 - Name | Photo/Avatar | Health Points (0-100 for example).

- Enemies have red background (for example) if they're moved to enemies available to attack.

- Enemy defenders have black background (for example).

THE PROJECT

index.html to structure RPG webpage/app
style.css used to style RPG webpage/app

jQuery (this section will probably change as I progress deeper into the project)

Declared variables and arrays:

- Your characters array to store characters
  - Define in object:
        - name
        - health points
        - attack power
        - enemy attack back
        - image of character

- Enemies avaiable to attack array to store enemies
- Fight section array to store fighter section
- Defender array to store defender

Functions:

- Game start

- Game reset

- You win function

- You lose function with "battle again" reset?

- Set player location/style on HTML

- click function to select your player

- function to move non-selected players to "Enemies available to attack"

- click function to select your enemy

- function to move your selected enemy to "defender" 

- click function to select attack

- function to describe what happens with each attack and counter attack (IE, so and so attacked you for 8 health points)

- function to store player attack levels

- function to increment player attack level by 6 (for example) after each attack

- function to decrement player attack levels

- function to decrement counter attack levels

EXTRA EFFECTS:

- Audio
- Lightbox/alert when you enter the game describing what's going on
    - Find Star Wars scroll intro box
- Use animate.css to find some cool effects


