
import { render, screen } from "@testing-library/react"
import { Router } from "react-router-dom";
import InputFilter from "../components/InputFilter";

test('InputFilter',()=>{
        render(<Router><InputFilter/></Router>);
        const placeholderElementtwo = screen.getByPlaceholderText(/select action type/i);
        const placeholderElementthree = screen.getByPlaceholderText(/select application type/i);
        const placeholderElementfour = screen.getByPlaceholderText(/YYYY-MM-DD/i);
  
        const placeholderElementSix = screen.getByRole("button");
        
        expect(textElement).toBeInTheDocument();
        expect(placeholderElementtwo).toBeInTheDocument();
        expect(placeholderElementthree).toBeInTheDocument();
        expect(placeholderElementfour).toBeInTheDocument();
   
        expect(placeholderElementSix).toBeInTheDocument();

})