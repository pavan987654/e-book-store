// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT ;
const cors = require('cors');

mongoose.connect('mongodb+srv://vemanavbs2139:uqrfVdvTjNcslC9H@cluster0.iehxdto.mongodb.net/');

app.use(express.json());
app.use(cors()); 

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	genre: String,
	description: String,
	price: Number,
	image: String,
});

const Book = mongoose.model('Book', bookSchema);

const seedDatabase = async () => {
	try {
		await Book.deleteMany();        

		const books = [
			{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', description: 'A classic novel about the American Dream', price: 20, image: 'https://images.booksense.com/images/021/839/9781954839021.jpg' },
			{ title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Horror', description: 'A powerful story of racial injustice and moral growth', price: 15, image: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg' },
			{ title: 'Vbs the Great', author: 'George Orwell', genre: 'Dystopian', description: 'A dystopian vision of a totalitarian future society', price: 255, image: 'https://www.penguinrandomhouse.co.za/sites/penguinbooks.co.za/files/styles/jacket-large/public/cover/VBS%20-%209781776095445_0.jpg?itok=zE_i9l28' },
			{ title: 'The Great Musician', author: 'F. Scott Fitzgerald', genre: 'Fantasy', description: 'A classic novel about the American Dream', price: 220, image: 'https://rukminim2.flixcart.com/image/850/1000/kqidx8w0/book/q/o/e/world-s-greatest-musicians-original-imag4hpfaw62as3a.jpeg?q=90&crop=false' },
			{ title: 'The Lion King', author: 'Harper Lee', genre: 'Fiction', description: 'A powerful story of racial injustice and moral growth', price: 1115, image: 'https://play-lh.googleusercontent.com/WtGetyWYi08xDNjtsjP3f35F8oFNKvgEyFlbIAqyJXVItcTAbS149CyMHQBrlnTYTXP-=w240-h480-rw' },
			{ title: '1984', author: 'George Orwell', genre: 'Fantasy', description: 'A dystopian vision of a totalitarian future society', price: 125, image: 'https://m.media-amazon.com/images/I/81m-yfhwlfL._AC_UF1000,1000_QL80_.jpg' },
		
		];
		await Book.insertMany(books);
		console.log('Database seeded successfully');
	} catch (error) {
		console.error('Error seeding database:', error);
	}
};

seedDatabase();


app.get('/api/books', async (req, res) => {
	try {
		// Fetch all books from the database
		const allBooks = await Book.find();

		// Send the entire books array 
		res.json(allBooks);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});