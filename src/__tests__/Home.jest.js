import React from 'react';
import {render} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';
import Home from '../containers/home/containers';

describe('<Home />', () => {
    test('Render without crash', () => {
        const {getByTestId} = render(<Home/>);
        expect(getByTestId('form')).toBeInTheDocument();
    });
});