import { screen } from '@testing-library/react'

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i)
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument()
})
