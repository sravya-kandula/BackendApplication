//create HTTP server
// import express module
import exp from "express";
import { userapp } from "./APIs/UserApi.js";
import { productapp } from "./APIs/ProductApi.js";

//create server
const app = exp();
//assign port number


//body parser middleware
app.use(exp.json());
// mount routers
app.use("/user-api", userapp);
app.use("/product-api", productapp);

//to parse json data from request body
//forward request to userapp when path
app.listen(3000, () => console.log("HTTP server listening in port 3000.."));