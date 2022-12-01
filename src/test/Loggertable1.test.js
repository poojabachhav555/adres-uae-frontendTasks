import { render, screen } from "@testing-library/react";
import Loggertable1 from "../components/Loggertable1";
import { BrowserRouter } from "react-router-dom";


test('Loggertable1',()=>{
  render(<BrowserRouter><Loggertable1/></BrowserRouter>);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
})