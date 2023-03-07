import '@testing-library/jest-dom';
// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Card from './Card';


describe('Testing Card Component', () => {

    const mockProp = {
        id: 1,
        name: 'John',
        email: 'Doe@gmail.com'
    }

    it('Renders Correctly with No Props', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('Displaying correct title', () => {

        render(<Card id={mockProp.id} name={mockProp.name} email={mockProp.email} />)
        expect(screen.getByTestId('name-h2-element')).toHaveTextContent(mockProp.name);
    });
});

