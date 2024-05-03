const zod = require("zod");

const todos = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updatetodo = zod.object({
    id : zod.string()
})

const signupBody = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string().min(6),
    userName : zod.string().email(),
})

const login = zod.object({
    password : zod.string().min(6),
    userName : zod.string().email()
})

module.exports ={
    todos,
    updatetodo,
    signupBody,
    login
}