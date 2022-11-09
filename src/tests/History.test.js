import { render } from "@testing-library/react";
import History from "../components/History";

describe("history", () => {
  test("the component renders", () => {
    const { asFragment } = render(<History />);

    expect(asFragment()).toMatchSnapshot();
  });
});
