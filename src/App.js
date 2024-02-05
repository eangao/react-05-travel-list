// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 12, packed: false },
// ];

import { useState } from "react";

// export default function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <Form />
//       <PackingList />
//       <Stats />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌴 Far Away 💼</h1>;
// }

// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();

//     //     Now the next question
//     // is how do we actually get this data from the form
//     // into this event handler, right?
//     // Because of course the goal
//     // is to do something with this data.
//     // So with this quantity and with this item description.
//     // Well there are multiple ways of doing so.
//     // So we could get that data right from the event object.
//     // So let's just see,
//     // we could like log this event to the console.
//     // So let's see what happens.
//     // So here we get this synthetic base event,
//     // and we will talk about
//     // what this synthetic event is a bit later.
//     // But you see that here we get the target.
//     // So basically the element on which the event was fired.
//     // And then there we have, for example,
//     // the input on which we can see the value.
//     // So test is exactly what we have here, right?
//     // However in React, we usually don't do this.
//     // Instead, we use something called controlled elements.
//     // But that's a topic for a whole new video.
//     // And so let's now take a break and come back in a second.
//     console.log(e);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your 😍 trip? </h3>
//       <select>
//         {/* <option value={1}>1</option>
//         <option value={2}>2</option>
//         <option value={3}>3</option> */}

//         {/* we don't want to write these 20 options over there by hand,
//           right?
//           So instead what we do is to, inside of JavaScript,
//           we will create an array with the numbers from one to 20,
//           and then we will loop over that array,
//           and basically create a list of option elements.
//           So let's do that, and we will use a nice trick,
//           which is called array.from.
//           And it's not really important how this function works.
//           So let's just follow this here.
//           And actually, we will do this all the time in React.
//           So this trick is actually quite important.
//           So as a first parameter here,
//           we can pass in an object with a length property,
//           and set that to 20.

//           So that will then create an empty array with 20 elements.
//           And then as a second part,
//           we can pass in basically something like a map function.
//           So that will receive as a first argument,
//           the current value, and as a second argument, the index.
//           And so here, we are only interested in that index,
//           because we will now return that index,
//           which starts at zero plus one.
//           And so then we get an array, which goes from one to 20.
//           And if we want it,
//           we could just grab this piece of code right here,
//           and run it inside of our console, make it a bit bigger.
//           And yeah, indeed we are missing the key somewhere there,
//           but nevermind, we will fix that in a minute.
//           And so indeed here, we get that array from one to 20.
//           All right.

//           And now all we need to do, is to again use the map method,
//           and loop over this
//           to create our list of these option elements.
//           So again, specifying the value,
//           and now that value is simply numb and we need the key.
//           And that key is also numb.
//           So remember how that when we render a list,
//           we need to give each of the elements a unique key.
//           So the number here is of course, unique.
//           And then here also numb.
//           So give that a safe,
//           which makes this a little bit more legible.
//           And so this option
//           is basically just exactly what we had before here manually.
//           But now we create that dynamically here,
//           automatically from zero to 20.
//           So there it is. */}

//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input type="text" placeholder="Item..."></input>
//       <button>Add</button>
//     </form>
//   );
// }

// function PackingList() {
//   return (
//     <div className="list">
//       <ul>
//         {initialItems.map((item) => (
//           <Item item={item} key={item.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>💼 You have X items on your list, and you already packed X (X%)</em>
//     </footer>
//   );
// }

/////////////////////////////////////////////////////////////
// Controlled Elements
/////////////////////////////////////////////////////////////

// Let's now learn about yet another
// fundamental React concept which is controlled elements.
// So let's take a look what they are
// and how we use controlled elements
// when working with forms in React.
// So to start, what we need to understand is that by default
// these input fields like this input and also this select
// they maintain their own state inside the DOM.
// So basically inside the HTML element itself.
// Now this makes it hard to read their values
// and it also leaves this state right here in the DOM
// which for many reasons is not ideal.
// So in React, we usually like to keep all this state
// in just one central place.
// So inside the React application and not inside the DOM.
// And so in order to do that we use a technique
// called controlled elements.
// And so with this technique
// it is React who controls and owns the state
// of these input fields and no longer the DOM.
// So since we want to now keep this data
// inside the application, what that means
// is that we need some state, right?
// Because that form data of course changes over time
// and we also want to maintain our application
// in sync with it.

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  //   So in order to implement the controlled elements technique,
  // we follow three steps.
  // First we create a piece of state.
  // So let's start with that
  // and we will start here with this actual input element.
  // So with this text field right there.
  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    // And then we also need an ID.
    // Now we could use some library here to generate that ID
    // but let's do it quick and dirty here, just with date.now.
    // So that should just work here in this case.
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    //     So with this we learned how we get now this data
    // out of the form.

    //     And now finally, usually when we submit a form
    // then afterwards, once that submission is done
    // the form should go back to its initial state.
    // So let's also do that.
    // And for that we can simply use our setter functions, right?
    // And so that's the beauty
    // of React being in charge of the form
    // because now all we have to do is to update the state
    // and then this enables React to automatically keep this state
    // in sync with these form elements.
    // So basically that's the whole idea
    // of the controlled elements.
    setDescription("");
    setQuantity(1);

    //     So that worked really, really nicely.
    // So this form is now a lot more real world.
    // It's back to its initial state.
    // And then down here we get the data.
    // But now what do we do with this data?
    // So at some point we will want to actually render
    // this new object here into the user interface.
    // So right here into this packing list, right?
    // So how do you think we will do that?
    // So how can we get this new state?
    // So basically this new object that we just created
    // into this list.
    // And just as a reminder, this list,
    // well, it's even easier to see in the componentry.
    // So we have the form, and here is the list.
    // So we want to get the data from this form
    // into this packing list right here.
    // So do you think that we could do that with props?
    // Well, not really, right?
    // Because these are sibling components.
    // The form is not a parent component of the packing list
    // and therefore we cannot pass props from form
    // into the packing list, right?
    // So because data can only flow down the tree
    // but not up or sideways.
    // So that was one of the important things
    // that we learned about props, remember that?
    // So therefore, if we cannot use props in a simple way
    // we need to find another solution.
    // And so this is where we really need to start
    // thinking more about state and state management.
    // But since this is so important as a React developer,
    // I created an entire separate section
    // about thinking in React and that section is up next.
    // So what we're gonna do now is to take a break
    // in this application and finish this section
    // with a brief summary and a challenge to consolidate
    // our knowledge about how to use state in React.
    // And then after that, we will come back
    // here to this application
    // and then we will really make it work.
    // So then we will be able to pass data
    // basically from the form into the list.
    // So that's going to be a lot of fun.
    // So make sure to finish this section
    // and then right afterwards,
    // let's keep going with this application.
  }

  //   So just to quickly recap,
  // the technique of controlled elements
  // basically consists of three steps.
  // So we define a piece of state, like this description here
  // then we use that piece of state
  // on the element that we want to control.
  // So we basically force the element to always take the value
  // of this state variable.
  // And then finally, of course
  // we need to update that state variable.
  // And we do so here with the on change handler
  // where we then set the description
  // to the current value of that input field.
  // And so with this, it is now this component.
  // So basically it's React who is in charge
  // of the state and really of the entire element.
  // And so that's the reason why this technique
  // is called controlled element.

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}

        //         So we set quantity
        // based on e.target.value,
        // and by the way, this value is coming directly
        // from the option so right from here.
        // So that's why we need to set the value
        // here inside of each option.
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* And so it is this value that each time that we write something, we set as
      the new state of the description, all right? So just to drive this home,
      each time that we type here, we set the state again. So we set it to the
      string that is currently in this input field, which will then re-render
      this view. So this entire form here actually. And so then that new state
      of description will get placed there as the value. So we always need both
      the value and the change here on the input element. */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
