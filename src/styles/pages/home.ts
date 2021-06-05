import styled from 'styled-components'

export const ContainerMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${props => props.theme.colors.background};
  width: 100vw;
  height: 100vh;
`
