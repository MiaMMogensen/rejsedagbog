import Header from "./components/Header";
import { useEffect, useState } from "react";
import Entry from "./components/Entry";

export default function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/data/rejser.json")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  const entryElements = entries.map((entry) => (
    <Entry key={entry.id} entry={entry} />
  ));

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
