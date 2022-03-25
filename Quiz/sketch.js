var title, q1, state, q1o1, q1o2, q1o3, q1o4, next;
function setup() {
  createCanvas(windowWidth - 6, windowHeight);
  title = createElement("h1", "QUIZ");
  state = 1;
  q1 = createElement("h1");
  q1o1 = createButton("Grandfather");
  q1o2 = createButton("Mother");
  q1o3 = createButton("Father");
  q1o4 = createButton("Other");

  q2o1 = createButton("Economic");
  q2o2 = createButton("Cultural");
  q2o3 = createButton("Racial");
  q2o4 = createButton("No bias is involved it was the obvious action to do as the woman was not fitting the cut");

 
  next = createButton("NEXT");
  previous = createButton("PREVIOUS");
}

function draw() {
  title.position(width / 2 - 50, 0);
  q1.html("q");
  q1.position(width / 2 - 600, 80);
  q1.style("font-size", "20px");

  q1o1.position(width / 2 - 600, 200);

  q1o1.style("width", "600px");
  q1o1.style("height", "50px");
  q1o2.position(width / 2 - 600, 280);
  q1o2.style("width", "600px");
  q1o2.style("height", "50px");
  q1o3.position(width / 2 - 600, 360);
  q1o3.style("width", "600px");
  q1o3.style("height", "50px");
  q1o4.position(width / 2 - 600, 440);
  q1o4.style("width", "600px");
  q1o4.style("height", "50px");

  q2o1.position(width / 2 - 600, 200);

  q2o1.style("width", "600px");
  q2o1.style("height", "50px");
  q2o2.position(width / 2 - 600, 280);
  q2o2.style("width", "600px");
  q2o2.style("height", "50px");
  q2o3.position(width / 2 - 600, 360);
  q2o3.style("width", "600px");
  q2o3.style("height", "50px");
  q2o4.position(width / 2 - 600, 440);
  q2o4.style("width", "600px");
  q2o4.style("height", "50px");

  next.position(width / 2 - 50, 540);
  next.style("width", "200px");
  next.style("height", "50px");

  previous.position(width / 2 - 50, 600);
  previous.style("width", "200px");
  previous.style("height", "50px");
  next.mousePressed(() => {
    if (state <= 2) {
      state++;
      q1o1.style("backgroundColor", "white");
      q1o2.style("backgroundColor", "white");
      q1o3.style("backgroundColor", "white");
      q1o4.style("backgroundColor", "white");
      q2o1.style("backgroundColor", "white");
      q2o2.style("backgroundColor", "white");
      q2o3.style("backgroundColor", "white");
      q2o4.style("backgroundColor", "white");
    }
  });

  previous.mousePressed(() => {
    if (state >= 1) {
      state--;
      q1o1.style("backgroundColor", "white");
      q1o2.style("backgroundColor", "white");
      q1o3.style("backgroundColor", "white");
      q1o4.style("backgroundColor", "white");
      q2o1.style("backgroundColor", "white");
      q2o2.style("backgroundColor", "white");
      q2o3.style("backgroundColor", "white");
      q2o4.style("backgroundColor", "white");
    }
  });
  if (state === 1) {
    q1.html(
      "A man is going for a job interview at a big company’s office. His father is driving him to the headquarters. While arriving, he gets a call from the company’s CEO saying 'good luck, son.' (Who is the CEO?)<br>"
    );
    q2o1.hide()
    q2o2.hide()
    q2o3.hide()
    q2o4.hide()

    q1o1.show()
    q1o2.show()
    q1o3.show()
    q1o4.show()
    q1o1.mousePressed(() => {
      q1o1.style("backgroundColor", "red");
    });
    q1o2.mousePressed(() => {
      q1o2.style("backgroundColor", "red");
    });
    q1o3.mousePressed(() => {
      q1o3.style("backgroundColor", "red");
    });
    q1o4.mousePressed(() => {
      q1o4.style("backgroundColor", "green");
    });
  }
  if (state === 2) {
    q1.html(
      "A woman walked into a mall wearing average clothes. She went to the most expensive shop available to buy clothes and bags. As she enters, she is immediately driven away by the cashier, who had a scornful look on his face and treated the women with little to no respect. The woman calls her mother, the owner of the store, and tells her what occurred, and the cashier was fired immediately. (What type of stereotypical bias did the cashier have?)"
    );
    q1o1.hide()
    q1o2.hide()
    q1o3.hide()
    q1o4.hide()

    q2o1.show()
    q2o2.show()
    q2o3.show()
    q2o4.show()
    q2o1.mousePressed(() => {
      q2o1.style("backgroundColor", "green");
    });
    q2o2.mousePressed(() => {
      q2o2.style("backgroundColor", "red");
    });
    q2o3.mousePressed(() => {
      q2o3.style("backgroundColor", "red");
    });
    q2o4.mousePressed(() => {
      q2o4.style("backgroundColor", "red");
    });
  }
  if (state === 3) {
    q1.html("END");
    q1.position(width / 2 - 50, height / 2 - 50);
    q1o1.hide();
    q1o2.hide();
    q1o3.hide();
    q1o4.hide();
    q2o1.hide()
    q2o2.hide()
    q2o3.hide()
    q2o4.hide()
    next.hide();
  }
}
