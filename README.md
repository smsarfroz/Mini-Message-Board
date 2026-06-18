<img width="1461" height="693" alt="image" src="https://github.com/user-attachments/assets/b7b6c23b-6398-4396-b43b-8f2884ea52cd" />

# Mini Message Board

A simple and fun message board where anyone can share their thoughts! Leave a message, see what others have said.

## Features

- View all messages on the homepage
- Add new messages with author name and text
- Click on any message to view its details
- Timestamps show when each message was added
- Clean and simple design

## Tech Stack

- Node.js & Express
- EJS for templating
- CSS for styling

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Run `npm start`
4. Visit `http://localhost:3000`

## How It Works

Messages are stored in memory (array) for simplicity. Each message contains:
- Author name
- Message text
- Timestamp of when it was added

When you submit a new message through the form, it gets added to the array and you're redirected back to the homepage where you can see your message alongside others.

## What I Learned

- Setting up an Express server with EJS templating
- Handling GET and POST requests
- Working with form data using express.urlencoded()
- Rendering dynamic content with EJS
- Basic routing in Express
- Passing data between routes and views

---

Made with ❤️ as part of The Odin Project curriculum
=======

