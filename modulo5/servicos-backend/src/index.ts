import app from "./app"
import Address from "./endpoints/address";


app.post("/address", Address);
app.post("/full-address", Address);
