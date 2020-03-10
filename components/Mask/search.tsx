import React, { useState } from 'react'
import styled from '@emotion/styled'
import Card from '@/components/Card'
import { InlineIcon } from '@iconify/react'
import bxSearch from '@iconify/icons-bx/bx-search'

const SearchForm = styled.form`
  margin: 20px 0;
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  }
  input {
    border: 0;
    background: transparent;
    outline: none;
    padding: 20px 30px;
    font-size: 16px;
    width: 100%;
    -webkit-appearance: none;
  }
  button {
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    outline: none;
    padding: 20px 30px;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const SearchResult = styled.div`
  margin: 15px 0;
  div {
    cursor: pointer;
  }
`

const MaskSearch = (): JSX.Element => {
  const [keyword, setKeyword] = useState('')
  const [data, setData] = useState(null)

  const searchAction = () => {
    if (keyword !== '') {
      fetch('https://dapi.kakao.com/v2/local/search/keyword.json?query=' + keyword, {
        method: 'get',
        headers: {
          Authorization: 'KakaoAK 1b4a73d6cb2add7318c6c956f2c4022e',
        },
      })
        .then(function(res) {
          return res.json()
        })
        .then(function(json) {
          console.log(json)
          setData(json)
        })
    }
  }

  const formOnSubmit = e => {
    e.preventDefault()
    searchAction()
  }

  const DataCard = ({ data }) => (
    <div
      style={{
        marginBottom: '10px',
      }}
    >
      <Card>{data.address_name}</Card>
    </div>
  )

  const SearchResultContainer = (): JSX.Element => {
    if (data !== null) {
      if (data.documents && data.documents.length > 0) {
        return (
          <SearchResult>
            {data.documents.map((row, i) => {
              return <DataCard data={row} key={i} />
            })}
          </SearchResult>
        )
      } else {
        return (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            검색 결과가 없거나, 오류입니다.
          </div>
        )
      }
    } else {
      return <></>
    }
  }

  return (
    <>
      <SearchForm onSubmit={formOnSubmit}>
        <input
          placeholder="주소 검색"
          value={keyword}
          onChange={(e): void => {
            setKeyword(e.target.value)
          }}
        />
        <button onClick={formOnSubmit}>
          <InlineIcon icon={bxSearch} />
        </button>
      </SearchForm>
      <SearchResultContainer />
    </>
  )
}

export default MaskSearch
