
// Default get method
const response2 = await fetch('https://api.example.com/data')
const data = response2.json();


// this is the post method this code is used to send data to the server and create a new resource. The body of the request contains the data that we want to send to the server in JSON format. The headers specify that the content type of the request is JSON.
const response = await fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John', age: 30 })
});

// this is the patch method this code is used to send data to the server and update an existing resource. The body of the request contains the data that we want to send to the server in JSON format. The headers specify that the content type of the request is JSON.
const response3 = await fetch('https://api.example.com/data', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({age: 30 })
});