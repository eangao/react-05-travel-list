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
  function handleSubmit(e) {
    e.preventDefault();

    //     Now the next question
    // is how do we actually get this data from the form
    // into this event handler, right?
    // Because of course the goal
    // is to do something with this data.
    // So with this quantity and with this item description.
    // Well there are multiple ways of doing so.
    // So we could get that data right from the event object.
    // So let's just see,
    // we could like log this event to the console.
    // So let's see what happens.
    // So here we get this synthetic base event,
    // and we will talk about
    // what this synthetic event is a bit later.
    // But you see that here we get the target.
    // So basically the element on which the event was fired.
    // And then there we have, for example,
    // the input on which we can see the value.
    // So test is exactly what we have here, right?
    // However in React, we usually don't do this.
    // Instead, we use something called controlled elements.
    // But that's a topic for a whole new video.
    // And so let's now take a break and come back in a second.
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select>
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}

        {/* we don't want to write these 20 options over there by hand,
          right?
          So instead what we do is to, inside of JavaScript,
          we will create an array with the numbers from one to 20,
          and then we will loop over that array,
          and basically create a list of option elements.
          So let's do that, and we will use a nice trick,
          which is called array.from.
          And it's not really important how this function works.
          So let's just follow this here.
          And actually, we will do this all the time in React.
          So this trick is actually quite important.
          So as a first parameter here,
          we can pass in an object with a length property,
          and set that to 20.

          So that will then create an empty array with 20 elements.
          And then as a second part,
          we can pass in basically something like a map function.
          So that will receive as a first argument,
          the current value, and as a second argument, the index.
          And so here, we are only interested in that index,
          because we will now return that index,
          which starts at zero plus one.
          And so then we get an array, which goes from one to 20.
          And if we want it,
          we could just grab this piece of code right here,
          and run it inside of our console, make it a bit bigger.
          And yeah, indeed we are missing the key somewhere there,
          but nevermind, we will fix that in a minute.
          And so indeed here, we get that array from one to 20.
          All right.

          And now all we need to do, is to again use the map method,
          and loop over this
          to create our list of these option elements.
          So again, specifying the value,
          and now that value is simply numb and we need the key.
          And that key is also numb.
          So remember how that when we render a list,
          we need to give each of the elements a unique key.
          So the number here is of course, unique.
          And then here also numb.
          So give that a safe,
          which makes this a little bit more legible.
          And so this option
          is basically just exactly what we had before here manually.
          But now we create that dynamically here,
          automatically from zero to 20.
          So there it is. */}

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
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
