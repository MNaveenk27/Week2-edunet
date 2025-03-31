const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Signup = require('./Models/Signup');
const signin = require('./Models/signin'); 
const Product = require('./Models/Auctiondata');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 
app.use(express.json());

app.get('/sayHello', (req, res) => {
  res.send('naveen');
});
app.post('/signup', async (req, res) => {
    try{
        const signup = await Signup.create(req.body)
        res.status(200).json(signup)
        console.log(req.body);
    } catch(error){
        res.send(500);
    }

    });

app.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }); 
        if (!user) {
            return res.status(401).send('User not found');
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }
        res.status(200).send('Signin successful');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/auctionData', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/auctionData', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect("mongodb+srv://uname:password@cluster0.8zbxz.mongodb.net/")
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((err) => {
        console.error('error ', err);
    });