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
  
  test("renders App", async () => {

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
  })
  
