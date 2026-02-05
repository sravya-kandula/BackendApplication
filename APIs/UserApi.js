import exp from "express";
//create mini exprsess (seperate route)app
export const userapp = exp.Router();
let users = [];
//create a custom middleware
function middleware1(req, res, next) {
  console.log("middleware -1 is executed");
  next();
}
function middleware2(req, res, next) {
  console.log("middleware -2 is executed");
  next();
}
userapp.use(middleware2);
userapp.use(middleware1);
userapp.get("/users", middleware1, (req, res) => {
  //send users data to res
  res.status(200).json({ message: "all users", payload: users }); //payload.message
});

//post req handling route c
userapp.post("/users", middleware2, (req, res) => {
  //get user resource from req
  let newUser = req.body;
  // console.log("new user", newUser);
  users.push(newUser);
  //send res
  res.status(201).json({ message: "user created" });
});

//put req handling route u
userapp.put("/users/:id", (req, res) => {
  const userid = Number(req.params.id); // get id from URL
  const modifiedUser = req.body; // get user data from body

  let userIndex = users.findIndex((user) => user.id === userid);

  if (userIndex === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  users.splice(userIndex, 1, modifiedUser);
  res.status(200).json({ message: "user modified", modifiedUser });
});

//by keeping ":" it considers as url parameter
userapp.get("/users/:id", (req, res) => {
  const userid = Number(req.params.id);
  const user = users.find((userObj) => userObj.id === userid);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  res.status(200).json({ message: "user", payload: user });
});
//delete
userapp.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  users.splice(userIndex, 1); // delete only 1 element
  res.status(200).json({ message: "user deleted" });
});
