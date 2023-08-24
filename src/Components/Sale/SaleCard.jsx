import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addtoReciept } from "../../Feature/Service/recieptSlice";

const SaleCard = ({ pd }) => {
  console.log(pd);
  const dispatch=useDispatch();
  return (
    <div className="mt-1 " onClick={() => dispatch(addtoReciept(pd)) }>
      <Card sx={{ minWidth: 120 }}>
        <CardMedia
          sx={{ height: 100 }}
          image={pd?.photo}
          title={pd?.name}
        />
        <CardContent sx={{height:75}}>
          <Typography  sx={{ color: "#161618" }} variant="h5" component="div">
           {pd?.name.slice(0,5)}
          </Typography>
          <Typography sx={{ color: "#161618" }} variant="p" component="div">
            {pd?.actual_price} MMK
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaleCard;
