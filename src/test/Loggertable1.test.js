import { render, screen } from "@testing-library/react";
import Loggertable1 from "../components/Loggertable1";
import { Router } from "react-router-dom";


test('Loggertable1',()=>{
  render(<Router><Loggertable1/></Router>);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
})