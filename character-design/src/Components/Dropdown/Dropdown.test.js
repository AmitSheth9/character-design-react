import {screen, render} from '@testing-library/react'
import Dropdown from './Dropdown'

it.only('should render Dropdown component', () => {
    const {container} = render(<Dropdown />);
    const selectHead = screen.getByLabelText(/Head/);
    const selectMiddle = screen.getByLabelText(/Middle/);
    const selectBottom = screen.getByLabelText(/Bottom/);
    const selectInput = screen.getByLabelText(/Add a catchphrase:/);

    expect(selectHead).toBeInTheDocument();
    expect(selectMiddle).toBeInTheDocument();
    expect(selectInput).toBeInTheDocument();
    expect(container).toMatchSnapshot();

});