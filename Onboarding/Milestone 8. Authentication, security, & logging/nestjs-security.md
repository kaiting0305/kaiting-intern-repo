## Security Best Practices in NestJS

###### 

###### What are the most common security vulnerabilities in a NestJS backend?

1\. SQL Injection - Attackers insert malicious SQL into queries

2\. XSS (Cross-Site Scripting) - Malicious scripts injected into your app that run in users' browsers (eg: comments). People can use this to steal users information/cookies. 

3\. Authentication bypass - Allowing users to be authenticated without having feedback from database. Weak JWT (JSON web token) implementation, no token expiration, storing passwords in plain text (bcrypt)

4\. Exposed secrets - API keys or database passwords accidentally in committed code or not in .env

5\. CORS (cross origin resource sharing) misconfiguration - Not having origin set to my domain only allowing other poeple to use it, eg: origin: '\*' lets anyone to make requests to API

6\. No rate limiting - Attackers can spam endpoints for brute force attacks or DDoS (distributed denial of service: overwhelming server with excessive amounts of requests it crashes)

7\. Mass assignment - Users can modify fields they shouldn't. eg: isAdmin: true 



###### How does @fastify/helmet improve application security?

Content-Security-Policy: Prevents XSS by controlling what resources the browser can load

X-Frame-Options: Prevents clickjacking. aka having people click in my site without knowing when trying to click something else (site loaded in a malicious iframe(website secretly in another website))

X-Content-Type-Options: Stops browsers from MIME-sniffing, interpreting files as wrong types

Strict-Transport-Security: Forces HTTPS connections

X-DNS-Prefetch-Control: Controls DNS prefetching to prevent privacy leaks. DNS prefetching: browser loads link even though user didnt click for faster access later. 





###### Why is rate limiting important for preventing abuse?

attackers can try infinite amount of attempts to guess password. They can overwhelm servers. Sometimes, lots of requests also means more money spent. Put a limit to prevent high bills. 



###### How can sensitive configuration values be protected in a production environment?

Remember to include them in .env and have .gitignore and not in other code. Use secret managers like AWS Secrets manager. Remember to have encryption. Application level for very sensitive things. Only give access to those who need it and keep a track of who access what secrets. 





rate limiting proof:

https://docs.google.com/document/d/1c7XthhVW3kTRmd2cyHWV8PT\_6P-BalcyX\_41cHBb9ds/edit?usp=sharing



