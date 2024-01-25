import Express from "express";

const app = Express();

app.get("/", (req,res) => {
    res.json({
    message:"first api"
})    
})
app.get("/login", (req, res) => {
    res.json({
        message: "login api"
    })
});
app.post("/register", (req, res) => {
    res.send({
        message: "this is post api  for register"
    })
});
app.delete("/delete", (req, res) => {
    res.send({
        message:"this is delete api "
    })
})
app.listen(3001, () => console.log("Server is running on port 3001"));
