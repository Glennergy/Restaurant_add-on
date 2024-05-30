import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import TableEntry from "./components/table/table-entry";

function App() {
  const [table1, setTable1] = useState({
    id: 1,
    description: "Table 1",
    status: 0,
  });

  const [table2, setTable2] = useState({
    id: 2,
    description: "Table 2",
    status: 1,
  });

  const [table3, setTable3] = useState({
    id: 3,
    description: "Table 3",
    status: 2,
  });

  useEffect(() => {
    console.log(table3);
  }, []);

  const changeStatus = (id) => {
    // console.log(tableid);
    // console.log(table[tableid].status);
  };

  return (
    <>
      <div className="top-nav">
        <nav>
          <div>Tables</div>
          <div>Floor</div>
        </nav>
      </div>
      <main className="main">
        <TableEntry description={table1.description} status={table1.status} />
        <TableEntry description={table2.description} status={table2.status} />
        <TableEntry
          description={table3.description}
          status={table3.status}
          setTable3={setTable3}
        />
      </main>
    </>
  );
}

export default App;
