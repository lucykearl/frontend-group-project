import { render } from "@testing-library/react"
import AddSession from "../components/AddSession"

describe('add session', () => {
    const validProps = {
        selectedOptions: {
            id: 1,
            title: "exercise",
            type: "any"
        },
        onSelect: () => {},
    }
    test('the component renders', () => {
        const { asFragment } = render(<AddSession />)

        expect(asFragment()).toMatchSnapshot();
    })

    test('it saves a selected option in state', () => {

    })

    test('it saves more than one exercise in state as required', () => {

    })

    test('it maps more than one AddSessionCard component', () => {

    })
})