import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
type CardProps = {
  primary?: boolean
}
export const Card = styled.section<CardProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.primary ? '#0c4aa8' : '#eeeeee')};
  margin: 0.1rem;
  border: 1px solid #eeeeee;
  border-radius: 0.4rem;
  color: ${(props) => (props.primary ? '#eeeeee' : '#1c2237')};
  flex: 1;
  min-width: 20rem;
  min-height: 20rem;
  justify-content: space-between;
  font-size: 1.2rem;
`

export const CardHeader = styled.div`
  padding: 0.6rem 0.4rem;
  background-color: #101522;
  color: #a9b3c1;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  font-size: 18px;
  letter-spacing: 1.4px;
`

export const CardBody = styled.div`
  padding: 0.4rem;
  flex: 1;
`

export const CardFooter = styled.div`
  padding: 0.5rem 0.1rem;
  text-align: center;
  background-color: #dedede;
`

export const CardFooterLink = styled(Link)`
  text-decoration: none;
  color: #4b59f7;

  &:hover {
    color: #0467fb;
  }
`
