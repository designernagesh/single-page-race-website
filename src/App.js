import Contact from "./components/contact/Contact";
import Handling from "./components/handling/Handling";
import Navbar from "./components/navbar/Navbar";
import Options from "./components/options/Options";
import Power from "./components/power/Power";
import Speed from "./components/speed/Speed";

function App() {
  return (
    <>
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Options />
      <Contact />
    </>
  );
}

export default App;
