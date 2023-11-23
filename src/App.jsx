import { createRoot } from "react-dom/client";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Welcome />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
