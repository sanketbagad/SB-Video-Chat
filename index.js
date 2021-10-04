const app = require("express")()
const server = require("http").createServer(app)
const cors = require(cors)

const io = require("socket.io")(server, {
    cors: {
        origin:"*",
        methods: ["GET", "POST"]
    }
})

app.use(cors())

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Server is running")
})

io.on("connection", (socket) => {
    socket.emit("me", socket.id)

    socket.on("disconnect", () => {
        socket.broadcast.emit("callended")
    })

    socket.on("calluser", ({ userToCall, sighnalData, from, name }) => {
        io.to(userToCall).emit("calluser", {signal: sighnalData, from, name })
    })

    socket.on("answercall", (data) => {
        io.to(data).emit("call accepted", data.signal)
    })
})

server.listen(PORT, () => {
    console.log("The server listening on port")
})



