import React, { useState } from 'react'
import styled from '@emotion/styled'
import Card from '@/components/Card'
import { InlineIcon } from '@iconify/react'
import bxSearch from '@iconify/icons-bx/bx-search'

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #efefef;
  input {
    border: 0;
    background: transparent;
    outline: none;
    padding: 20px 25px;
    font-size: 18px;
    width: 100%;
    -webkit-appearance: none;
  }
  button {
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    outline: none;
    padding: 20px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const MaskSearch = (): JSX.Element => {
  const [keyword, setKeyword] = useState('')

  const searchAction = () => {
    fetch('https://dapi.kakao.com/v2/local/search/address.json?query=' + keyword, {
      method: 'get',
      headers: {
        Authorization: 'KakaoAK 1b4a73d6cb2add7318c6c956f2c4022e',
      },
    })
      .then(function(res) {
        return res.json()
      })
      .then(function(json) {
        console.log(JSON.stringify(json))
      })
  }

  const formOnSubmit = e => {
    e.preventDefault()
    searchAction()
  }

  return (
    <>
      <Card>
        <SearchForm onSubmit={formOnSubmit}>
          <input
            placeholder="주소 검색"
            value={keyword}
            onChange={e => {
              setKeyword(e.target.value)
            }}
          />
          <button onClick={formOnSubmit}>
            <InlineIcon icon={bxSearch} />
          </button>
        </SearchForm>
      </Card>
    </>
  )
}

export default MaskSearch
