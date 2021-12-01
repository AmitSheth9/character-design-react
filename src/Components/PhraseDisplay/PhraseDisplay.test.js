import {render, screen} from '@testing-library/react'
import PhraseDisplay from './PhraseDisplay'

it.only('should render our PhraseDisplay component', () => {
    const {container} = render( <PhraseDisplay phrases={['yay', 'test', 'pow']} />

    );
    expect(container).toMatchSnapshot();
})