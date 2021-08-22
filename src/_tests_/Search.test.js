import { render } from '@testing-library/react';
import React from 'react';
import Search from '../Components/Search';

describe("Search", () => {
    const { asFragment } = render(<Search />)

    it('mounts App component to the virtual DOM', () => {
        expect(asFragment()).toMatchSnapshot();
    });
}) ;