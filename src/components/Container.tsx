import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  padding: 0 5px;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1300px) {
    max-width: 1240px;
  }
`

export default Container
