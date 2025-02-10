const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();

// Dummy database to store users (in-memory)
const users = {};

// Secret key for signing JWT (keep this secret in production)
// const JWT_SECRET = 'secret-key';
const JWT_SECRET = '44pG1=S<u*6*';

app.use(bodyParser.json());

// Serve login page on the root route
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
});


app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'signup.html'));
});


// Sign-up route (register new users) *** NO HASHING ***
app.post('/signup', (req, res) => {
    const {username, password} = req.body;

    // Check if username already exists
    if (users[username]) {
        return res.status(400).json({message: 'User already exists'});
    }

    // Adding new user - default role: user role
    users[username] = {username, password, role: 'user'};
    res.json({message: 'Sign-up successful. Please log in.', redirect: '/'});
});

// Login route to authenticate user and issue a JWT *** SIGNS JWT WITHOUT ALGORITHM ***
app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const user = users[username];
    if (!user || user.password !== password) {
        return res.status(401).json({message: 'Invalid credentials'});
    }

    // Create a JWT token *** NO ALGORITHM ***
    const token = jwt.sign(
        {username: user.username, role: user.role},
        JWT_SECRET,
        {expiresIn: '1h'}
    );

    res.json({message: 'Login successful', token});
});

// Route to access admin-only data (protected route) *** PRONE TO PROTOTYPE POLLUTION ***
app.get('/admin', (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];  // Extract JWT from request

    if (!token) {
        return res.status(403).json({message: 'No token provided'});
    }

    // VULNERABLE: Decodes JWT WITHOUT verifying signature
    const decoded = jwt.decode(token, {complete: true}).payload;

    // VULNERABLE: Prototype Pollution Exploit Possible
    if (decoded.role !== 'admin') {
        return res.status(403).json({message: 'Access denied'});
    }

    // Admin-only content: The Flag
    res.json({flag: 'ATHACKCTF{trust_is_a_vulnerability}'});
});


// Start the server
const PORT = 2025;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
