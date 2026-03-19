const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let events = [];

// Create Event
app.post('/create-event', (req, res) => {
    const event = req.body;
    events.push(event);
    res.json({ message: 'Event created', event });
});

// Get Events
app.get('/events', (req, res) => {
    res.json(events);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});