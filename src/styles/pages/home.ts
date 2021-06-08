import styled from 'styled-components'

export const ScrollContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`
export const ScrollItem = styled.div`
  scroll-snap-align: start;
`
