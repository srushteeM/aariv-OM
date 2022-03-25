var title, img, para, h,sign,date;
function setup() {
  createCanvas(windowWidth - 6, windowHeight);
  title = createElement("h1", "Blog");
  h = createElement("h1", "Do not judge a person by there colour");
  img = createImg("image.png");
  para = createElement(
    "h2",
    "I relocated to the Philippines when I was six years old, and for the next three years of my life there, I attended a public school. My classmates gave me an astonished and disdainful look when I initially started school and went there. I was a youngster at the time and didn't comprehend what it meant, so I just ignored it and sat with everyone else in the class, but as time went on, I realized that unless I began the discussion or the instructor pushed others to include me, no one else in the class wanted to connect with me.I noticed everyone's ignorance, but I finally understood why when one of my classmates said because I'm brown and he doesn't want to play with me. I started crying in front of the entire class and was embarrassed to such an extent that I went home and told my mother. Eventually, we became friends, and as of today, we both wish each other on important festivals yearly and reminisce about my time there and he often ends up apologizing about this incident as he realized how big of an issue racism of any form is and that he should have accepted me the way I was as it was something out of my control. My classmate eventually became open-minded but many people in this world aren’t aware of their actions and words and how much harm they cause to other people hence I have made this quiz to make them understand of their bias on different stereotypical situations like gender, color, cultural, economic and etc;<br><br>* I relocated to the Philippines when I was six years old, and for the next three years of my life there, I attended a public school.<br><br>* My classmates gave me an astonished and disdainful look when I initially started school and went there. I was a youngster at the time and didn't comprehend what it meant, so I just ignored it and sat with everyone else in the class, but as time went on, I realized that unless I began the discussion or the instructor pushed others to include me, no one else in the class wanted to connect with me.<br><br>* I noticed everyone's ignorance, but I finally understood why when one of my classmates said because I'm brown and he doesn't want to play with me.<br><br>* I started crying in front of the entire class and was embarrassed to such an extent that I went home and told my mother.<br><br>* Eventually, we became friends, and as of today, we both wish each other on important festivals yearly and reminisce about my time there and he often ends up apologizing about this incident as he realized how big of an issue racism of any form is and that he should have accepted me the way I was as it was something out of my control.<br><br>* My classmate eventually became open-minded but many people in this world are not aware of their actions and words and how much harm they cause to other people hence I have made this quiz to make them understand of their bias on different stereotypical situations like gender, color, cultural, economic and etc;"
  );
  sign = createImg("unnamed.png");
  date=createElement("h3","Date-25/03/2022")
}

function draw() {
  title.position(width / 2 - 50, 0);
  h.position(width / 2 - 250, 70);
  img.position(width / 2 - 300, 160);
  img.style("width", 200);
  img.style("height", 200);
  para.position(120, 170);
  sign.position(width / 2 + 200, 460);
  sign.style("width", 200);
  sign.style("height", 200);
  date.position(width / 2 + 200, 460);
}
