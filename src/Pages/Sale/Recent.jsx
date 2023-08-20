import React from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import ManageOverview from "../../Components/ManageOverview";

const Recent = () => {
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
      <ManageOverview tableType={"Sale Overview"}/>
      {/* sort filter tablename component */}

    </>
  );
};

export default Recent;
