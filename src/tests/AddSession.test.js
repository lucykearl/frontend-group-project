import { render } from "@testing-library/react";
import AddSession from "../components/AddSession";

xdescribe("add session", () => {

  test("the component renders", () => {
    const { asFragment } = render(<AddSession />);

    expect(asFragment()).toMatchSnapshot();
  });

});
