import FormScreen from "./components/FormScreen";
import FormFailScreen from "./components/FormFailScreen";
import ConfirmScreen from "./components/ConfirmScreen";
import ErrorScreen from "./components/ErrorScreen";
import { Routes, Route, Link, useNavigate } from "react-router";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<FormScreen />} />
          <Route path="/success" element={<ConfirmScreen />} />
          <Route path="/fail" element={<FormFailScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
