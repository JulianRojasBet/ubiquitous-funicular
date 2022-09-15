import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
  test('Should render component', () => {
    render(Header, { props : {}});

    const image = screen.getByAltText('SvelteKit');
    expect(image).toBeInTheDocument();
  })
});