import { render, screen, waitFor } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import App from "../components/App";


  jest.mock("@auth0/auth0-react");
  const mockedUseAuth0 = jest.mocked(useAuth0, true);

  const user = {
    name: "John Doe",
    email: "johndoe@me.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234",
};

  describe("App", () => {
  
  test("renders App with a login button", async () => {

    mockedUseAuth0.mockReturnValue({
      isAuthenticated: false,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      getAccessTokenSilently: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithPopup: jest.fn(),
      isLoading: false,
    });

    render(<App />);
  
    const linkElement = screen.getByText(/Log in/i);
    await waitFor(() => expect(linkElement).toBeInTheDocument())
  });

  test("App content renders when logged in", async () => {

    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      getAccessTokenSilently: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithPopup: jest.fn(),
      isLoading: false,
    });

    window.ResizeObserver = function () {
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      };
    };

    render(<App />);
  
    const linkElement = screen.getByText(/REP/i);
    await waitFor(() => expect(linkElement).toBeInTheDocument())

  })
  })
  
