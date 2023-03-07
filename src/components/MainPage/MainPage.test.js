import '@testing-library/jest-dom';
// import React so you can use JSX (React.createElement) in your test
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import MainPage from './MainPage';

let wrapper;
let search;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = render(<MainPage { ...mockProps } />);
});


describe('Main Page Component Tests', () => {
    it('Renders Correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Are Robots Filtered Correctly', async () => {
        await userEvent.type(screen.getByPlaceholderText('Search Robots'), 'test');
        expect(screen.getByPlaceholderText('Search Robots').value).toEqual('test');

        
    });
});

