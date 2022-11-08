import { render, screen } from "@testing-library/react";
import History from "../components/History";



describe("history", () => {
    const validProps = [
        {
            "Date": "21/10/2022", "Time": "51:42", "Exercises": [{
                "title": "Bicep Curl",
                "weight": "10kg",
                "sets": 4,
                "reps": 10
            }
            ]
        }
    ]

    test("the component renders", () => {
        const { asFragment } = render(<History />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("it renders a table", () => {
        render (<History />);
        expect(screen.findByRole("table")).toBeInTheDocument();
    }
    );
    // // it("renders correct values for props", () => {
    //     const { getByText, getByTestId } = render(
    //         <ForecastSummary
    //           date={validProps.date}
    //           description={validProps.description}
    //           icon={validProps.icon}
    //           temperature={validProps.temperature}
    //           onSelect={validProps.onSelect}
    //         />
    //       );//


    test("it should render date", () => {
        const { getByText } = render(<History  />)
        expect(getByText("21/10/2022")).toHaveClass("history--date")
    });

    xtest("it should return a title", () => {
        const { getAllByText } = render(<History />)
        expect(getAllByText("Bicep Curl, Hammer Curl, Skull Crusher, Upright Row, ", 
         )).toHaveClass("history--exercise--title")
    });

   


    test("it should return a weight", () => { });


    test("it should return the number of sets", () => { });

    test("it should return the number of reps", () => { });
});
