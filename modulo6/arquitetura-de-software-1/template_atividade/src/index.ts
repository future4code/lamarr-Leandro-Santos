import {app} from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.get("/test", async function(){
   console.log("endpoint teste")
})

app.post("/createUser", userController.createUser)

app.post("/allUsers", userController.getUsers)
