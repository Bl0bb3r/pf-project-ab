# PF-PROJCET-AB

I set up some scripts which should make the running process easier - as soon as repo cloned, running "npm run dev" should install and run application.
If this is not the case and npm installs have to be made, inside the normal project scope eg. "~/Documents/Andreas/Repos/pf-project-ab" run "npm i" and afterwards use 
"cd client/" and do an "npm i" here aswell. After this is done. Simply running the script "npm run dev" deploys a session running both backend and front end (OBS, if this is not desired, the two single start scripts are still there. To see theese look in package.json under scripts -> "npm run server" runs server and "npm run client" runs client.) Server is hosted on port localhost:5000 and front end is hosted on localhost:3000.

I realize it was a requirement to split the backend and the frontend and that would still be the correct way. It would be solved by inserting the backend into its own folder
just like we have the client folder for the frontend.
So everything that is not in the "client" folder is backend 

Security wise - there is a mongoURI for mongodb in the keys.js, which has my username and password included for this my Atlas databases - this could have been encrypted, but as 
the application is intended for running local it will be fine. (this is the only project that is connected to any of the databases on that account)

Enjoy and cheers,
Andreas
