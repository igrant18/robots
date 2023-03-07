import '@testing-library/jest-dom';
// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CardList from './CardList';

describe('CardList Component Tests', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            email: 'john@gmail.com'
        }
    ];
    
    it('Renders Correctly with No Props', () => {
        const tree = renderer.create(<CardList robots={mockRobots} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});