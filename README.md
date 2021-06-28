# reactContactList
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

Next the Cards were added to the App function which is then exported to the index.js file. You can add as many cards as you want, two are shown here. If the contact list data is organized, it may be possible to retrieve the data as shown in the first Card.
```React
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
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

If you have more than a few cards, then it would make the most sense to use an array method in keeping with DRY principles. This would involve having a contact list, or whatever data, to be formatted as an array of objects. In that situation a function createCard() can be created which takes in a single contact, for this example, as a parameter. The card can be populated by assigning the property names identicle to how they appear on the data being used - contact data in this case.  ***key must be used in this method using a unique property on the contact list to differentiate between the objects inside of the array and components rendered to the page.
```React
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}
```

Now the Map method can be used to map over each contact inside of the contacts array. For each element inside of the array, a card will then be created with the data inserted.
```React
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}
```

Then, regardless of the manner in which you decide to produce the cards, you finally render:
```React
ReactDOM.render(<App />, document.getElementById("root"));
```

***End Walkthrough
