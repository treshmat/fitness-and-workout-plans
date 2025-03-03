const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = [];  // Dummy users array for registration

// Registration Endpoint
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    users.push({ name, email, password });
    res.send('Registration Successful');
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.send('Login Successful');
    } else {
        res.send('Invalid credentials');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
