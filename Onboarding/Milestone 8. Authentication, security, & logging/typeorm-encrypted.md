## Using typeorm-encrypted for Data Encryption



###### Why does Focus Bear double encrypt sensitive data instead of relying on database encryption alone?

Database encryption protects the files on disk. But people might gain access to the database through SQL injection or other ways. So make it even more secure, we do double encrypt. This means that even the information in the database is encrypted. They will need the database access and the encryption key to obtain any valuable data. 



###### How does typeorm-encrypted integrate with TypeORM entities?

After we add a Transformer property to a column, it will encrypt and decrypt automatically and we dont need to worry about it. The code we give and get will be normal.



###### What are the best practices for securely managing encryption keys?

Store then in .env and never commit it to code. use randomly generated keys of 32 bytes. You can have different keys for different departments. It is also smart to backup keys since no key = no data. can also change keys periodically. 



###### What are the trade-offs between encrypting at the database level vs. the application level?

Database level: encrypts the physical files on hard drive. when the database is active and running, it will unlock and automatically decrypt, so people who steal the hard drive wont see the information. However, if someone logs in with database credentials, it will unlock. On the other hand, application level: you can only see the information on the app. 

For database level encryption, it is not as secure as anyone with access to the database can see all the information, but because it is not encrypted, we can have queries and searches easily. For application level, because it is even encrypted in the database itself, we cant query and search efficiently. May need to set aside more space to hold hash values for lookups.

Use application level for very very sensitive information where its better to not even let administrators or cloud to access. 





spent a few hours setting this up. problem: needed buffer encoding

encryption practice proof:

https://docs.google.com/document/d/1x\_vsKIrqUa\_eUH7-jtUBuMhlgh5z\_U44z1hbPl\_Vxss/edit?usp=sharing







