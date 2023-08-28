import React, { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import ManageOverview from "../../Components/ManageOverview";
import { Table } from "@mantine/core";
import Pagination from "../../Components/Pagination";
import { useRecordedVoucherQuery } from "../../Feature/API/saleApi";
import Cookies from "js-cookie";

const Recent = () => {
  const token = Cookies.get("token");

  const recordedVoucher = useRecordedVoucherQuery(token);
  console.log(recordedVoucher?.currentData?.data);
  const oldData = recordedVoucher?.currentData?.data;

  const [currentPage, setCurrentPage] = useState(1);

  const totals=oldData?.map((eachData)=>eachData?.net_total)
  console.log(totals);
  

  return (
    <>
      {/* path breadcrumbs */}
      <div>
        <Breadcrumb
        showBtn={true}
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
              <th>Customer</th>
              <th>Phone</th>
              <th>Voucher No.</th>
              <th>Total</th>
              <th>Tax</th>
              <th>Net Total</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody className="text-[#f5f5f5]">
            {oldData?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.customer}</td>
                  <td>{data.phone}</td>
                  <td>{data?.voucher_number}</td>
                  <td>{data.total}</td>
                  <td>{data.tax}</td>
                  <td>{data.net_total}</td>
                  <td>{data?.user}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </main>

      <div className="">
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          last_page={"5"}
        />
      </div>
      <div>
        <p className="flex gap-3">
          <span>Total sale this month: </span>
          <span>{totals?.reduce((pv,cv)=>pv+cv,0)} MMK</span></p>
      </div>
    </>
  );
};

export default Recent;
