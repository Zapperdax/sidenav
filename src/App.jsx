import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Analytics,
  Dashboard,
  FileManager,
  Messages,
  Order,
  Saved,
  Settings,
  Users,
  Sidebar,
} from "./components/index";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/fileManager" element={<FileManager />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/saved" element={<Saved />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </Sidebar>
  );
}

export default App;
