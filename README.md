# Intern Paths

This was a small project I did with three other attendees of the nwHacks 2019 hackathon! I contributed many of the core ideas in brainstorming, designed UI mockups, and created much of the front end interface with React and Ant Design. I had never used Javascript before this event, let alone React. I worked close with my team members and did my best to ensure clear communication. I learned so much from this event and Jason offered a lot of insight into backend operations using Node.js!

## Run

```bash
# Setup
npm install
cd ./client
npm install
cd ..

# Run development server
docker-compose up -d
npm run dev

# Shutdown
# (ctrl-c to kill server)
docker-compose down
```

## API usage

```javascript
axios.post('/api/jobs', {
    radius: num,
    address: '123 street street, city, country',
    title: 'title',
})
```
