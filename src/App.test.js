import {render} from '@testing-library/react';
import App from './App';

test('renders App component', () => {
    const {getByText} = render(<App/>);
    const welcomeText = getByText('Welcome!!');
    expect(welcomeText).toBeInTheDocument();
});
