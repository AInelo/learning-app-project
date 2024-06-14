import { app } from "./app"
require('dotenv').config();


// creat our serveur
app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`)
})