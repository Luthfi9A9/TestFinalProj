import React from "react";
import Home from "./Routes/Home";
import AddStudent from "./Routes/AddStudent";
import Student from "./Routes/Student";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import { Route, Routes } from "react-router-dom";
// TODO: answer here

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/student" element={<Student />} />
        <Route path=":id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add">
          <Route index element={<AddStudent />} />
        </Route>
        <Route path="student">
          <Route index element={<Student />} />
          <Route path=":id" element={<EditStudent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </> // TODO: replace this
  );
};

export default App;
