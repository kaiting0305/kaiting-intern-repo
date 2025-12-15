### AI tools



###### Which AI tools did you try?

I currently use claude. I found out previously that Claude is considered one of the best at coding. I have the pro version (at this moment) and connected claude code to my VScode. I have used Chatgpt before. I have never used GitHub Copilot before. GitHub copilot needs to pay to use. I won't be using it yet and im not to certain if i do need it. I am aware of the student pack, but haven't activated it. 



###### What worked well? What didn’t?



I tested the same code problem to both gpt and claude. They both gave back the correct answer for debugging. 

At this entry level, both AIs work well. 



###### When do you think AI is most useful for coding?

AI is useful for explaining code, debugging, and learning new concepts.





#### APPENDIX

Debugging problem I used: 
obtained from https://robertheaton.com/2019/12/28/pfab6-real-world-debugging-practice/




def blank\_board(width, height):

&nbsp;   """

&nbsp;   This function should return a "2-D array" that

&nbsp;   we can use to represent a 2-D board for a game

&nbsp;   like Tic-Tac-Toe or Battleships. For more on

&nbsp;   using 2-D arrays, see:



&nbsp;   \* https://robertheaton.com/2018/06/12/programming-projects-for-advanced-beginners-ascii-art/

&nbsp;   \* https://robertheaton.com/2018/07/20/project-2-game-of-life/

&nbsp;   \* https://robertheaton.com/2018/10/09/programming-projects-for-advanced-beginners-3-a/

&nbsp;   """

&nbsp;   board = \[]

&nbsp;   row = \[]

&nbsp;   for \_ in range(height):

&nbsp;       for \_ in range(width):

&nbsp;           row.append(None)

&nbsp;       board.append(row)

&nbsp;       return board



if \_\_name\_\_ == "\_\_main\_\_":

&nbsp;   test\_board = blank\_board(4, 3)



&nbsp;   expected\_board = \[

&nbsp;       \[None, None, None, None],

&nbsp;       \[None, None, None, None],

&nbsp;       \[None, None, None, None],

&nbsp;   ]

&nbsp;   # TODO: it looks like there's a bug with our

&nbsp;   # blank-board generating function! We should

&nbsp;   # figure out what it is and fix it so that

&nbsp;   # this test passes.

&nbsp;   if test\_board == expected\_board:

&nbsp;       print("TEST PASSED!!")

&nbsp;   else:

&nbsp;       print("TEST FAILED!!")

