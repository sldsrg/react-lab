import React from 'react'
import { Globals } from '@react-spring/web'
import { cleanup, fireEvent, render, waitForDomChange, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SVGLab from './SVGLab'

describe('SVGLab component', () => {
  beforeAll(() => {
    Globals.assign({
      skipAnimation: true
    })
  })

  afterEach(cleanup)

  it('renders component', () => {
    const { container } = render(<SVGLab />)
    expect(container).toBeDefined()
  })

  it('places blackMan with default coordinates', () => {
    const { getByTestId } = render(<SVGLab />)
    expect(getByTestId('blackMan')).toHaveAttribute('x', '120')
  })

  it("changes blackMan's position after click", async () => {
    const { getByTestId, container } = render(<SVGLab />)
    fireEvent.click(getByTestId('container'))
    await wait()
    fireEvent.click(getByTestId('container')) // ??? first click ignored !!!
    // await waitForDomChange({ container })
    expect(getByTestId('blackMan')).toHaveAttribute('x', '200')
  })
})
