async function getNewJoke(){

  const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
  console.log(response);
  // response locked hota hai aur non readable format hota hai so hum log yak aur variable banayenge "data"

  const data = await response.json();
  // data convert kar raha hu readable format me so we use awaits 
  console.log(data);

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchLine").innerText = data.punchline;

  
  


}