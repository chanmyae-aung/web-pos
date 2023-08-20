import React, { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import ManageOverview from "../../Components/ManageOverview";
import { Table } from "@mantine/core";
import Pagination from "../../Components/Pagination";

const Recent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <>
      {/* path breadcrumbs */}
      <div>
        <Breadcrumb
          icon={false}
          btnText={"Go to Shop"}
          title={"Recent"}
          firstRoute={"Sale"}
          secondRoute={"Recent"}
        />
      </div>
      {/* path breadcrumbs */}
      {/* sort filter tablename component */}
      <ManageOverview tableType={"Sale Overview"} />
      {/* sort filter tablename component */}
      <main className="border mt-7">
        <Table>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody className="text-[#f5f5f5]">{rows}</tbody>
        </Table>
      </main>
     
      <div className="">
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          last_page={"5"}
        />
      </div>
      <div><p>Total sale this month: 12,000,000 MMK</p></div>
    </>
  );
};

export default Recent;
