# reactContactLisr
Created with CodeSandbox
This simple React app consist of a reuseable card component which can be easily utilized in certain situations where repetitive elements are present.

Constructing this app helped me to better learn and practice the following:
1) Creating and styling components
2) Using props

A brief overview of the relevant React code is below:

For this app a contacts list was provided with some relevant contact information and an image URL included. From the specified data in the contacts list a Card function was made.
```React
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
```

Next the Cards were added to the App function which is then exported to the index.js file. You can add as many cards as you want, two are shown here.
```React
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
   
    </div>
  );
}

export default App;
```

Then render:
```React
ReactDOM.render(<App />, document.getElementById("root"));
```

***End Walkthrough
