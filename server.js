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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});