import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
import Error404 from "./Error404";
import Panel from "./Panel";

function App() {
  const [nameAndSurname, setNameAndSurname] = useState("Kate Bundy");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SignIn setNameAndSurname={setNameAndSurname} />}
        />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route
          path="/panel/*"
          element={<Panel nameAndSurname={nameAndSurname} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
