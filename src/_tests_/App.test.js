import { render } from '@testing-library/react';
import App from '../Components/App';

describe("App", () => {
    const { asFragment } = render(<App />)

    it('mounts App component to the virtual DOM', () => {
        expect(asFragment()).toMatchSnapshot();
    });
}) ;