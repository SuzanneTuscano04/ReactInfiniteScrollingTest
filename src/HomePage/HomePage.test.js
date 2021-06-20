import {act, fireEvent, render} from '@testing-library/react';
import HomePage from './HomePage';

test('renders HomePage component', () => {
    const {getByText, getByTestId} = render(<HomePage/>);
    const listOfUserText = getByText('List Of Users');
    expect(listOfUserText).toBeInTheDocument();
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    const logoutButton = getByTestId('logoutButton');
    expect(logoutButton).toBeTruthy();
    act(() => {
        fireEvent.click(logoutButton);
    })
});
