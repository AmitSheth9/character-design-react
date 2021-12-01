import {screen, render} from '@testing-library/react'
import Display from './Display'

it('should display the Display component', () => {
    const {container} = render(<Display head='dog' middle='fancy' />)
    const head = screen.getByAltText(/h/);
        
    expect(head).toBeInTheDocument();
    expect(container).toMatchSnapshot();
        


})