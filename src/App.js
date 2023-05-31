import React from 'react';

function displayUserIp() {
  fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    console.log(`Your IP address is: ${ipAddress}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
} 

function App() {
  displayUserIp();

  return (
    <div >
      <h1 style={{textAlign:"center"}}>Hello Paola</h1>
      <h2 style={{textAlign:"center"}}>Today's Gospel</h2>
      <p style={{textAlign:"center"}}>Peter began to say to Jesus, <br/>
            'We have given up everything and followed you." <br/>
            Jesus said, "Amen, I say to you, <br/>
            there is no one who has given up house or brothers or sisters <br/>
            or mother or father or children or lands <br/>
            for my sake and for the sake of the Gospel <br/>
            who will not receive a hundred times more now in this present age: <br/>
            houses and brothers and sisters <br/>
            and mothers and chizldren and lands, <br/>
            with persecutions, and eternal life in the age to come. <br/>
            But many that are first will be last, and the last will be first."</p>
    </div>
  );
  
}
export default App;