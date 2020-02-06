import React from 'react'
import styled from '@emotion/styled'
import Layout from '@/layouts/main'
import Container from '@/components/Container'

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
`

const FeedPage: React.FC = () => {
  return (
    <>
      <Layout>
        <Jumbotron>
          <Container>
            <h1>코로나인포 피드</h1>
            <p className="description">
              코로나인포에 언제 어떤 정보가 추가되었는지 확인할 수 있습니다. (1분마다 갱신)
            </p>
          </Container>
        </Jumbotron>
      </Layout>
    </>
  )
}

export default FeedPage
