import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const SaleCard = () => {
  return (
    <div className="mt-5 ">
      <Card sx={{ minWidth: 200 }}>
        <CardMedia
          sx={{ height: 150 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&usqp=CAU"
          title="green iguana"
        />
        <CardContent >
          <Typography
            sx={{ color: "#161618" }}
            
            variant="h5"
            component="div"
          >
            Apple
          </Typography>
          <Typography
            sx={{ color: "#161618" }}
            
            variant="p"
            component="div"
          >
            1000 mmk
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaleCard;
