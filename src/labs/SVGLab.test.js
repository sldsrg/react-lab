import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SVGLab from './SVGLab'

describe('SVGLab component', () => {
  afterEach(cleanup)

  it('renders component', () => {
    const { container } = render(<SVGLab />)
    expect(container).toBeDefined()
  })

  it('places blackMan with default coordinates', () => {
    const { getByTestId } = render(<SVGLab />)
    expect(getByTestId('blackMan')).toHaveAttribute('x', '120')
  })

  it("changes blackMan's position after click", () => {
    const { getByTestId } = render(<SVGLab />)
    fireEvent.click(getByTestId('container'))
    expect(getByTestId('blackMan')).toHaveAttribute('x', '200')
  })
})
