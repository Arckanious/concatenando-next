import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 1.6rem;
  padding: 2rem 1.2rem;
  box-shadow: 0 -4px 5px 0 rgba(0, 0, 0, 0.14),
    0 -1px 10px 0 rgba(0, 0, 0, 0.12), 0 -2px 4px -1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Description = styled.p`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 1.2rem;
`

export const Separator = styled.div`
  margin: 2rem;
  border-top: 4px solid rgba(15, 14, 14, 0.05);
  border-radius: 2px;
  width: 60%;
`
export const LoadButon = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  user-select: none;
  transition: 250ms;
  outline: none;
  height: 5.6rem;
  border-radius: 2.8rem;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0px 2.8rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 30rem;

  &:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgEmail = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`
export const FormTitle = styled.h4`
  font-size: 2rem;
  color: ${props => props.theme.colors.black};
  margin-bottom: 2rem;
`
