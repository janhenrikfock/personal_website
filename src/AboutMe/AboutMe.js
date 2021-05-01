import React from 'react'
import styled from 'styled-components/macro'

function AboutMe(props, ref) {
  return (
    <AboutMeSection ref={ref}>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </AboutMeSection>
  )
}

const forwardedAboutMe = React.forwardRef(AboutMe)
export default forwardedAboutMe

const AboutMeSection = styled.section``
const Text = styled.p`
  padding: 1em 0;
`
