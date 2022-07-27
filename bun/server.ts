'use strict';
import express from 'express';

// Initialize server
const app = express();
// Add express middelware(s)

// app.use(compression());
app.use(express.json());

export default app;


// const app = express();



// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));


// app.get('/', (req, res) => {
//   res.send('Server is ok')
// });



// app.listen(3000, () => {
//   console.log(`I am running!!! on ${process.env.PORT}`)
// })

// http.ts
// export default {
//   port: 3000,
//   fetch(request: Request) {
//     console.log('fetching', request.url);
//     return new Response("Hello World");
//   },
// };

// bun ./http.ts
