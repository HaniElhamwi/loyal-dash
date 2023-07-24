import UpperNav from "@/components/common/upper-nav";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
} from "@mui/material";
import React from "react";

function page() {
  return (
    <Container className="">
      <Card>
        <CardContent>
          <h1>Products</h1>
        </CardContent>
        <CardActions>
          <Button>Click here</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default page;
