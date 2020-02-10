import React from 'react'
import styled from '@emotion/styled'
import Container from './Container'

const Jumbotron = styled.div`
  background: #f1f1f1;
  padding: 35px 0;
  line-height: 1.6;
  h1 {
    font-size: 1.7rem;
    font-weight: 700;
  }
  p.description {
    font-size: 1rem;
  }
  @media (max-width: 992px) {
    padding: 35px 10px;
  }
`

interface JumboProps {
  title?: string
  desc?: string
}

const JumbotronComponent = ({ title, desc }: JumboProps): JSX.Element => (
  <>
    <Jumbotron>
      <Container>
        <h1>{title}</h1>
        <p className="description">{desc}</p>
      </Container>
    </Jumbotron>
  </>
)

export default JumbotronComponent
