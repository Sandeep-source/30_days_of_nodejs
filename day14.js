const express = require('express')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000
const cache = {};
let cacheExpiration = 60 * 1000; 

function cachingMiddleware(req, res, next) {
  const url = req.originalUrl || req.url;
  
  if (cache[url] && cache[url].expirationTime > Date.now()) {
    console.log(`Cache hit for ${url}`);
    res.send(cache[url].response);
  } else {
    console.log(`Cache miss for ${url}`);
    const originalSend = res.send;
    res.send = (body) => {
      cache[url] = {
        response: body,
        expirationTime: Date.now() + cacheExpiration
      };
      originalSend.call(res, body);
    };
    next();
  }
}

app.get('/test', cachingMiddleware, (req, res) => {
  res.send('Response from server');
});

app.get('/',cachingMiddleware,(req,res)=>{
    res.send("Welcome to express server")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

// Make a request, cache the response, and make the same request again within the cache expiration time
// This should log "Cache hit for /test"
// The response should be the cached response
// Uncomment the following lines to test
/*
request.get('http://localhost:3000/test', (err, res, body) => {
  console.log(body);
  setTimeout(() => {
    request.get('http://localhost:3000/test', (err, res, body) => {
      console.log(body);
    });
  }, 30 * 1000); // Wait for 30 seconds, cache should still be valid
});
*/

// Make a request, cache the response, wait for cache expiration, and make the same request again
// This should log "Cache miss for /test" twice
// The response should be the new response, not the cached one
// Uncomment the following lines to test
/*
request.get('http://localhost:3000/test', (err, res, body) => {
  console.log(body);
  setTimeout(() => {
    request.get('http://localhost:3000/test', (err, res, body) => {
      console.log(body);
    });
  }, 61 * 1000); // Wait for cache to expire (61 seconds)
});
*/
