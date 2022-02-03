import { render, screen } from '@testing-library/react'
import HomePage from '../pages/index'
import { createMockRouter } from '../lib/createMockRouter'
import { RouterContext } from 'next/dist/shared/lib/router-context'

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <HomePage />
      </RouterContext.Provider>
    )

    const heading = screen.getByRole('link', { name: 'Home' })

    expect(heading).toBeInTheDocument()
  })
})
