import styled from 'styled-components'

interface ContainerProps {
  backgroundColored: boolean
}
export const Container = styled.div<ContainerProps>`
  background-color: ${props =>
    props.backgroundColored ? props.theme.colors.primary : 'transparent'};
  box-shadow: ${props =>
    props.backgroundColored ? props.theme.shadows.shadowMd : 'none'};

  position: sticky;
  top: 0;
  transition: 350ms;
  z-index: 1;
`

export const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  height: 5.6rem;
  justify-content: space-between;
  margin: auto;
  max-width: 980px;
  padding: 0rem 1.6rem;
  width: 100%;
`

export const Logo = styled.img`
  cursor: pointer;
  height: 4.4rem;
  width: 4.4rem;
`
