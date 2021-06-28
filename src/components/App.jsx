import React from "react";

function Card(props) {
  return (
    <body>
      <div className="header">
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img" src={props.imgURL} alt="avatar_img" />
          </div>
          <div className="bottom">
            <p className="info">{props.phone}</p>
            <p className="info">{props.email}</p>
          </div>
        </div>
      </div>
    </body>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
    </div>
  );
}

export default App;
