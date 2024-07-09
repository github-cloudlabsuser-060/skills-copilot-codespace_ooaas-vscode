
#este codigo se corre en pantalla temrinal y se indica
# python3 gamePiedraPapeltijera.py


#make the code for this game, The player can choose rock, paper, or scissors, and invalid inputs are handled gracefully. After each round, display whether the player won, lost, or tied. Allow the player to play again after each round and display their score at the end of the game. Inputs are converted to lowercase for consistency. 
# Import the random module
import random
# Create a list of play options
t = ["rock", "paper", "scissors"]
# Assign a random play to the computer
computer = t[random.randint(0,2)]
# Set player to False
player = False
computer_wins = 0
player_wins = 0
ties = 0
while True:
    # Set player to True
    player = input("rock, paper, scissors? ")
    if player == computer:
        print("Tie!")
        ties += 1
    elif player == "rock":
        if computer == "paper":
            print("You lose!", computer, "covers", player)
            computer_wins += 1
        else:
            print("You win!", player, "smashes", computer)
            player_wins += 1
    elif player == "paper":
        if computer == "scissors":
            print("You lose!", computer, "cut", player)
            computer_wins += 1
        else:
            print("You win!", player, "covers", computer)
            player_wins += 1
    elif player == "scissors":
        if computer == "rock":
            print("You lose...", computer, "smashes", player)
            computer_wins += 1
        else:
            print("You win!", player, "cut", computer)
            player_wins += 1
    else:
        print("That's not a valid play. Check your spelling!")
    # player was set to True, but we want it to be False so the loop continues
    player = False
    computer = t[random.randint(0,2)]
    print("Computer wins: ", computer_wins, " Player wins: ", player_wins, " Ties: ", ties)

    again = input("Do you want to play again? (yes/no) ")
    if again == "no":
        break
    else:
        continue

import random