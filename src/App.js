import { useState } from "react";
import Charts from "./routes/chart/Charts.js";
import Sidebar from "./routes/table/sidebar/sidebar.js";
import Table from "./routes/table/Table.js";

// impoting json data
import JSON from "./stackline_frontend_assessment_data_2021.json";

function App() {
  const [data] = useState(JSON);
  return (
    <div className="flex flex-wrap bg-gray-100 justify-center pt-6">
      <div className="shadow-xl min-h-screen w-full md:w-3/12 p-5 bg-white">
        <Sidebar data={data} />
      </div>

      <div className="shadow-xl ml-4 w-full md:w-8/12">
        <div className=" bg-white p-5 mb-5 shadow-xl">
          <Charts data={data} />
        </div>
        <div className=" bg-white p-5 mt-5 shadow-xl">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
