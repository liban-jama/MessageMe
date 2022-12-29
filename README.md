# MessageMe
![MessageMe Demo](https://i.ibb.co/6wfW5zZ/demo.png)

How to run:

- Clone this repository or fork it.
  - To clone this repository type `git clone https://github.com/liban-jama/MessageMe.git` on your command line
  - To fork this repository, click fork button of this repository then type `git clone https://github.com/<your username>/MessageMe.git`
  
- Inside `backend` folder, create a new file named `.env` which stores informations about server side such as `CONNECTION_URL`, `PORT`, `APPID`, `KEY`, `CLUSTER`, `SECRET`, `USETLS` and `PUSHERID` informations
  
  - store your database URI inside `CONNECTION_URL` variable
  - store your pusher-js key inside `KEY` variable
  - store your pusher-js secret inside `SECRET` variable
  - store your specific pusher-js cluster inside `CLUSTER` variable
  - store your specific pusher-js appid inside `APPID` variable
  - store your specific pusher-js usetls inside `USETLS` variable
  - store your specific pusher-js pusherID inside `PUSHERID` variable - I used port 9000
  - store the specific port you will run server on inside `PORT` variable
  
  - example:
  ```
  CONNECTION_URL = mongodb+srv://admin:<password>@cluster0.8aezk.gcp.mongodb.net/MessageMe?retryWrites=true&w=majority
  PORT = 9000
  APPID = "214124"
  KEY = "ajkbsdgklahdg4232512jbka"
  SECRET = "agjksdlhajk1242jandgj"
  CLUSTER =  "us3"
  USETLS = true
  PUSHERID = asdjkgbaklsvb3245uujba
  ```

- Install all dependencies

  - Client side: on the `frontend` directory type `npm install`(or `yarn`)
  - Server side: on the `backend` directory type `npm install`(or `yarn`)

- Run it on node js:
  - Client side: on the `frontend` directory type `npm run start` (or `yarn`)
  - Server side: on the `backend` directory type `nodemon server.js` (or `yarn`)
