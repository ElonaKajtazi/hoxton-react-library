import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./Input";
// Instructions
// - Start a new project ✅
// - Create components, similar to the Button component Nico built during the lecture. ✅
//   - Button: should return a button styled however you like. Make it use a few useful custom props similar to how Nico used them during the lecture - like size or variant. ✅
//     - Input: returns a label and an input under it, both customizable.
//   - CheckboxGroup: a group of checkboxes. The component should take:
//     - an array of items and render a list of checkboxes based on them. (Think what should go into the array!)
//     - an onSelect: selecting a checkbox should run the function. Make sure you can check which checkbox you selected.
//     - RadioGroup: A group of radio buttons. Same idea as the checkbox group:
//         - takes a list of items and renders radio buttons for each of them
//     - onSelect which runs the function we pass to the component.
// - Test your components by using them in App and giving them some test data.

// We will later run a session and show you how you can publish your code online and use in other projects!

// Tips
// - Try to avoid using too many divs when building your components, since it will make your code less reusable. You can always style the container in the place where you use the component (or check out the challenge)
// - Use the React.Fragment or <> </> if you need to reutnrn more than one child
// - Don't forget to thoroughly test your components. You don't need to go crazy - console.log'ing the values or setting a piece of state (and testing it) should give you an idea.
// - You are welcome to look at other component libraries for inspiration
function App() {
  const [move, setMove] = useState(true);
  return (
    <div className="App">
      {/* <h1>It's nice here...</h1>
      {move ? (
        <h1> Why are we going back.. </h1>
      ) : (
        <h1>Cool, lets go forward</h1>
      )} */}
      {/* <div className="buttons-container">
        <Button
          onClick={() => {
            alert("hello hello");
          }}
          size="small"
          secondary
        >
          HELLO
        </Button>
        <Button
          onClick={() => {
            setMove(true);
          }}
          size="medium"
        >
          PREVIOUS
        </Button>
        <Button
          onClick={() => {
            setMove(false);
          }}
          size="large"
        >
          NEXT
        </Button>
      </div> */}
      <form>
        <Input question={"Name:"} type={"text"} name={"name"} />
        <Input question={"Age:"} type={"number"} name={"age"} />
        <Input question={"Email:"} type={"email"} name={"email"} />

        <Button size="small">SUBMIT</Button>
      </form>
    </div>
  );
}

export default App;
