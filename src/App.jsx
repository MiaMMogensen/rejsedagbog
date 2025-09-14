import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./data/rejser";

export default function App() {
  const entryElements = entryData.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
