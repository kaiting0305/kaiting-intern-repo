### CI CD Reflection

Continuous integration: automatically testing code and checking it when pushing to repository

Continuous deployment: automatically deploying the code to production after it passes the tests and checks





for every commit, husky will make checks locally with eslint and prettier. It will try to autofix if possible of block commits if fails to pass the test and can't autofix. 



for every push or pr, GitHub actions will make a virtual machine and perform checks on all the code. It will show whether it passes or fails the tests. 



###### What is the purpose of CI/CD?

The purpose of CI and CD is having an automatic system that catches bugs and bad code with minimum work. This will make sure the codebase is clean and up to par. Manually testing and deploying code would be very time-consuming. 



###### How does automating style checks improve project quality?

Of course, sometimes a programmer may forget to use prettier or other formatter. It will block commits if Eslint cannot autofix it. This will make sure all the code in the codebase has good quality stylewise. 



###### What are some challenges with enforcing checks in CI/CD?

Setting up is a nuance. It took me several attempts and a bit confusing. Linters may also flag valid code. ESLint and Prettier might disagree on certain things. Each push may also take longer time to complete because checks and tests are being made. 





###### How do CI/CD pipelines differ between small projects and large teams?

Honestly the system works similarly, but just on a larger scale. In larger teams, longer build time, more dependencies, more and stricter tests. 



Proof of Husky installation, configuration, and experimentation:

https://docs.google.com/document/d/1oenP4wSwTARm1shS2Qt57ZiPoObSkM11IbCaqvkqWIc/edit?usp=sharing

