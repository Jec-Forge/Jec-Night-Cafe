import app from "./app.js";
import reservationRoute from "./routes/reservationRoute.js";

app.use(reservationRoute);


app.listen(process.env.PORT, () =>{
    console.log(`Server Running on port ${process.env.PORT}`);
})