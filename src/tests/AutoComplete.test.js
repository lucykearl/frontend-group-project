import React from "react";
import AutoComplete from "../components/AutoComplete";
import { fireEvent, render, screen } from "@testing-library/react"

describe("autocomplete", () => {

    test("the component renders", () => {
      const { asFragment } = render(<AutoComplete />);
  
      expect(asFragment()).toMatchSnapshot();
    });

    test("Add button renders", () => {
        render(<AutoComplete />)

        expect(screen.getByTestId("autocomplete-button")).toHaveClass("button--add")
    })
    
    xtest("add button fires", () => {
        
        
        fireEvent.click(get)
    })
  });