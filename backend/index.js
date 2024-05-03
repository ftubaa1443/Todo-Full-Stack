const express = require("express");
const { todos, updatetodo, signupBody, login } = require("./type");
const { todo, todouser, User, } = require("./db/db");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { Jwt_secret_key } = require("./jwt");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.post("/signup", (req, res) => {

  const response = signupBody.safeParse(req.body);
  if(!response.success){
    return res.status(401).json({
      msg: "Unauthorized",
    })
  }

  const user = User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    userName: req.body.userName,
  });

  res.status(201).json({
    users: user
  })
 
});

app.post("/login" ,async (req,res) =>{

     const response = login.safeParse(req.body)

     if(!response.success){
        return res.status(403).json({
            msg: "Inputs are not valids"
        })
     }

     const exist = await  User.findOne({
           password : req.body.password,
           userName : req.body.userName 
     })
     if(!exist){
         return res.status(403).json({
            msg: " user not found in our db "
         })
     }
     
     const id = exist._id
     const token = jwt.sign({
      id
     },Jwt_secret_key )

     res.json({
       msg: token
     })
})


app.post("/todos", async (req, res) => {
  const response = todos.safeParse(req.body);

  if (!response.success) {
    return res.status(403).json({
      msg : "invalid inputs",
    });
  }

   todo.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(201).json({
    msg : "createdTodo",
  });
});

app.get("/todo", async (req, res) => {
  const response = await todo.find({});
  res.status(200).json({
    data: response,
  });
});

app.put("/completed", (req, res) => {
  const success = updatetodo.safeParse(req.body);
  if (!success) {
    res.status(403).json({
      msg: "invalid inputs",
    });
  }

  todo.update({
    _id: req.body.id,
  });

  res.status(203).json({
    msg: "successfully updated",
  });
});

app.listen(PORT);
