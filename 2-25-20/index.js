const app = require('./src/app').app;

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`warmup is up on ${PORT}`)
})
