import React, { forwardRef } from 'react'
import { JssProvider } from 'react-jss'
import { create as createJss } from 'jss'
import jssPreset from 'jss-preset-default'
import Frame, { FrameContextConsumer } from 'react-frame-component'

const FrameWithJss = forwardRef((props, ref) => {
  const { children } = props
  const initialContent = `<!DOCTYPE html>
  <html>
    <head>
      <style></style>
    </head>
    <body>
      <div id="mountHere">
      </div>
    </body>
  </html>`
  return (
    <Frame
      ref={ref}
      style={{ width: '49%', height: '100%' }}
      initialContent={initialContent}
      mountTarget='#mountHere'
    >
      <FrameContextConsumer>
        {({ document }) => {
          const jss = createJss({
            ...jssPreset(),
            insertionPoint: document.head.firstChild
          })
          return <JssProvider jss={jss}>{children}</JssProvider>
        }}
      </FrameContextConsumer>
    </Frame>
  )
})

export default FrameWithJss
