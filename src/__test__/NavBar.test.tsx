

import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('NavBar component', () => {
  it('renders navbar buttons correctly', () => {
    // Render the NavBar component
    render(<NavBar />);

    // Check that navbar buttons are rendered correctly
    const aiToolsButton = screen.getByText('AI tools');
    expect(aiToolsButton).toBeTruthy();

    const upgradeButton = screen.getByText('Upgrade to premium');
    expect(upgradeButton).toBeTruthy();

    const profileButton = screen.getByText('Mohd Aqib');
    expect(profileButton).toBeTruthy();
  });
});