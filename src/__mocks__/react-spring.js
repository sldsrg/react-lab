const reactSpring = jest.genMockFromModule('react-spring')

reactSpring.animated = comp => comp

reactSpring.useSpring = props => props.to

module.exports = reactSpring
