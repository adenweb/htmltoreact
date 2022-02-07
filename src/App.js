import React, {useState} from "react";
import "./globals.css";
import Header from "./header";
import TopCardList from "./top-card-list";
import Overview from "./overview";
import Switch from "./switch";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode"
  return (
    <main className="{mainClass}">
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
