import { render, screen } from "@testing-library/react";
import App from "../components/App";

xtest("renders REP heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/REP/i);
  expect(linkElement).toBeInTheDocument();
});
