# sshkey push output
```bash 
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ touch gitignore
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ touch .gitignore
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ cat .gitignore
/node_modules
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git add .
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git commit -m
 "another commit"
[master cb74e96] another commit
 6 files changed, 83 insertions(+), 25 deletions(-)
 create mode 100644 .gitignore
 create mode 100644 routes/users.js
 rewrite sampletwo.js (98%)
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git branch -M main
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git remote add origin git@github.com:poojag7277/sampleExample.git
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/sdvm8/.ssh/id_rsa): 
Created directory '/home/sdvm8/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/sdvm8/.ssh/id_rsa
Your public key has been saved in /home/sdvm8/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:yDEj10i9XoqUJX5VpzP8G45YtSRqV4mfVirzZ9Tef/A sdvm8@DESKTOP-8
The key's randomart image is:
+---[RSA 3072]----+
|      ..   .. .  |
|     ..oo .. + . |
|    ..*+.o  B = .|
|     ++=o .. X =.|
|     .o+Soo = O o|
|      . o. + B.=.|
|          . . +o=|
|               oE|
|                o|
+----[SHA256]-----+
sdvm8@DESKTOP-8:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ cat /home/sdvm8/.ssh/id_rsa.pub
ssh-rsa key generated here and will be copied and applied in the ssh key section of the github settings account
