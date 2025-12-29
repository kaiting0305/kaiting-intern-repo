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







##### Write reflections in git\_understanding.md for each of the following commands:

What does each command do?

When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)?

What surprised you while testing these commands?



###### git checkout main -- <file>

Restore a specific file from main without affecting other changes. 

This could be really  useful when you mess up and need to obtain the original working code from main without touching anything else. Only accessing this specific file will keep all the other files same as what you have been working on. Lets say you work on a task and accidentally deleted a file or want to restart again from the original starting point from main for a specific file. With this git command, you can specifically only grab the specific file you want and keep all the other files where you already made changes on. 

What surprised me was you would get the file from main in the current version, not the version when u obtained all the other files. So if you get all the files and make a branch, then someone merges into main, if you use this command, you will get the file version after the merge, not before. 



###### git cherry-pick <commit>

Apply a specific commit from another branch without merging the whole branch.

This could be used when there is an urgent bug that needs to be fixed. It is fixed in a certain branch, but you do not want to merge the rest of the files from that branch, only the file that solves the urgent bug. So you only merge the one specific file from that branch. 

What surprised me was how similar is it with merge. Basically the same and can have merge conflicts. 



###### git log

View commit history and understand how changes evolved.

Can be used in a lot of ways. Used to determine which changes have occurred, by who, and the reasoning (commit messages). If there is a new code that has an error or something you would like to know more about, you can use git log to see who made the change and discuss with the person. 

Im surprised that there are countless options to use after this command. Eg: git log --oneline, git log -p<file>, etc. And they can be used on top of one another. eg: git log --oneline -- graph --all





###### git blame <file>

See who last modified each line in a file and when.

Can be used when you want more information from a line of code. Who do I ask if i want to ask about this line of code. 

Surprised cuz it only shows who last changed it and not who wrote it. A person can only change a tiny little thing and not be the person who wrote the code, but they will be the one who appears when using git blame. 



Picture proof:

https://docs.google.com/document/d/1\_NRM78tuslT1FKoqg8h3CCQ\_0HpBiyq8HqRtRoAitoc/edit?usp=sharing





###### What does git bisect do?

git bisect helps to find which commit among a lot of commits is the 'first bad one'. It finds the one where the code doesn't work using binary search. This will be a lot faster than going through it one by one manually. 



###### When would you use it in a real-world debugging situation?

Lets say the codebase was working on Monday. Most people went on holiday and when they returned on Friday, they found the code isn't working. There has been a total of 100 commits between Monday and Friday. To find out exactly which commit was the one that disabled the codebase, we can run git bisect to find out the first 'bad' commit. This checks it in binary search. It checks the 50th commit, then 25th (or 75th) .... until it finds the one its looking for. 



###### How does it compare to manually reviewing commits?

Manually finding commits will take a lot of time. Especially when the file is a large file. Since it is binary, it is exponential. Searching through 100 commits will take about 7 searches before finding the right one. It also does it a lot faster as it is automatic. 





###### What makes a good commit message?

A good commit message is one that is not vague to the point where other contributors can not understand what is happening. It is not too specific and cause other contributors to have to understand the code you have written. It should be in human language and inform what problem is solved/ what feature has been added/ what bug has been fixed/ etc. 



###### How does a clear commit message help in team collaboration?

A clear commit message help keep the codebase clear. Who has done what, and exactly what have they done. Other contributors will be able to understand other peoples work without having to ask more about it to the person who committed and wont have to try to figure out what the other person has done. Keeps the communication clean, clear, and effective. 



###### How can poor commit messages cause issues later?

It may cause miscommunication, misunderstanding, or waste time in communicating. A commit message that says "fixed bug" may cause misunderstanding and confusion. Exactly which bug was fixed? maybe other people wanted to fix a bug in allowing user to calculate results with invalid inputs but the bug you fixed was about pop up alert errors. It may cause misunderstanding. Maybe ur code did fix it, but later after 2 months, your team realize the code has a small issue, but because the bug was never described, they dont know where to search to debug. 



picture proof:

https://docs.google.com/document/d/1YOBJZh0asRUftgCDFp0yVGpM-7dl4SJgrxyBYl1aPO0/edit?usp=sharing



###### 

###### Why are PRs important in a team workflow?

PRs are important in a team because other people can check your work before actually merging it into main. Especially for new members, they might be making mistakes more, or not have work up to company standard, or have non-uniformed code, the team might make them make a few changes before accepting it into the codebase. It double-checks code for bugs, security reasons, code styles. It also shows decisions on why the code was changed in this way. It shows history of feedback and can be easier to look back on. 



###### What makes a well-structured PR?

A well structured PR should have a clear title, detailed description: what changed, why, how did they test, and screenshots and demos. 1 PR should cover 1 feature, not a lot of different changes at a time. It should have good commit messages. include tests or links to related issues. 



###### What did you learn from reviewing an open-source PR?

I learned that there is a lot more in a PR than what I believed. My own PR in my practice was only just one line. "making edits to practice pull requests". Short simple. I didn't think too much about it. I didn't expect a PR in a professional environment to have a lot more. I looked at a PR from react and saw that included in someones PR, they included problem description, buggy code behavior plus exact lines of code, code analysis, solution with a few lines of exact code with reasoning, verified results with automated tests, and impact. It was a lot more than I expected. 



picture proof: 

https://docs.google.com/document/d/1IdQns1fvSabbui5WopYV2xipsTBG6RIugUSfBNuNvSQ/edit?usp=sharing



