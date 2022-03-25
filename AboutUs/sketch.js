var title,description,img,learn,help;
function setup(){
  createCanvas(windowWidth-6,windowHeight-50);
  title=createElement("h1","Our Mission and Vision");

  description=createElement("h2","The website's purpose is to make users aware of their subconscious biases against specific issues and to make them self-aware of these biases in the hopes of changing themselves and making society a better place.<br><br> Our website's goal is to improve society's broad attitude and make communal spaces like work, schools, and other places more livable for everyone, allowing individuals to interact without prejudice of any type.");

 // img=createImg("about.webp")
  learn=createButton("Learn More")
  help=createButton("Help & Support")
}
function draw (){
 
  title.position(width/2 -100 , 20)
  // img.position(width/2 -280 , 120)
  // img.style("width", 150)
  // img.style("height", 150)
  description.position(width/2 -650 , 100)
  learn.position(250,300)
  help.position(width/2 +170,300)
  learn.style("width", "200px");
  learn.style("height", "50px");
  help.style("width", "200px");
  help.style("height", "50px");
 
}