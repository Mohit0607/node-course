const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user === "Mohit"){
        req.user = {name:"Mohit", id:21}
        next()
    }
    else{
        res.status(401).send("Unauthorized")
    }

}

module.exports = authorize