import express from 'express';

const app = express();

let users = [
    { id: 1, name: 'Virat', email: 'virat@example.com' },
    { id: 2, name: 'Rahul', email: 'rahul@example.com' },
    { id: 3, name: 'Rohit', email: 'Rohit@example.com' }
];


app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome..")
})

// app.get('/test', (req, res) => {
//     res.send("Test... /test")
// })

// app.post('/testingpost', (req, res) => {
//     console.log(req.body)
//     res.send(req.body.name)
// })


app.put('/update-data/:id', (req, res) => {
    const userId = req.params.id;
    const email = req.body.email;
    const name = req.body.name;
    // console.log(email,"email")
    if (!userId || !email || !name) {
        return res.send('User id and email and name is required.')
    }
    const user = users.find((user) => user.id == userId)
    if (!user) {
        return res.send("User not found.")
    }
    user.email = email;
    user.name = name;
    return res.send(user)
})

app.delete('/delete-user/:id', (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        return res.send("User id is required.")
    }

    const userIndex = users.findIndex((user) => user.id == userId)
    if (userIndex == -1) {
        return res.send("User not found.")
    }

    users.splice(userIndex, 1)

    return res.json({ message: "User deleted successfully", users })

})



app.listen('8000', () => { console.log("Listening on port 8000") })

// crud - create -react - update - delete

