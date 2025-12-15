### Git Understanding



###### What is the difference between staging and committing?

Staging is when you prepare to make changes. you select all the files that can be saved. They are ready to be saved.

Committing is actually saving the files. there iwll also be a commit history.



###### Why does Git separate these two steps?

programmers may make a lot of changes on two different tasks and want to commit into two different commits. With staging and committing, the programmer can stage only the files they want to save together under one task with a commit, then stage the next batch. This will make the commit history much more clear.



###### When would you want to stage changes without committing?

When you are not done with the work and want to commit only when you finish everything, you can just stage the files you are confident in. Only until you finish all your changes on a particular task, then you can commit everything all at once.







###### Reflect on why teams use branches instead of pushing directly to main in git\_understanding.md:

###### Why is pushing directly to main problematic?

Constant clashes with other team members. If u have a problem, everyone who pulls gets problem. Main is often what clients use. U change it and mess up, the entire software is down. Harder to track each individual change. 



###### How do branches help with reviewing code?

Makes it clear on who did what changes. Keeps changes between different people separated. Can review and solve merge conflicts more clearly. Allows other people to review before actually adding into codebase.



###### What happens if two people edit the same file on different branches?

On different branches, nothing will happen. they each have their own version. Only when merging will there be a merge conflict (if edited on the same line.) Branches help make it clear which changes are made to which version of code. 

