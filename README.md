# Run this project in your localmachine...

### Clone this repository

 ```bash
 git clone jec-forge/jec-night-cafe.git
```

### Install node_modules package in both of the folder `frontend` and `backend`

```bash
 cd frontend
 npm install
 cd ../backend
 npm install
```
### Now add your mongoDB url in `.env.config` file in `backend` folder

### Now go to `reservation.jsx` file and add your localmachine url

### Now run the development of both frontend and backend folders, where the data will be stored in MongoDB Atlas.

```bash
 npm run dev
 cd ../frontend
 npm run dev
```
### Now go to your browser and check `localhost:5173` for the frontend and `localhost:4000` for the backend. If it works correctly, then congrats, you are doing great!
