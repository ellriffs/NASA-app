import { render } from '@testing-library/react';
import SearchResults from '../Components/SearchResults';

describe("SearchResults", () => {
    const { asFragment } = render(<SearchResults />)

    it('mounts Search Results component to the virtual DOM', () => {
        expect(asFragment()).toMatchSnapshot();
    });
}) ;