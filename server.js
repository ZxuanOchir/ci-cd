const app = require('./app');
const port = process.env.port || 3000;
app.listen(3000, () => console.log(`server runnig on ${port}`));
