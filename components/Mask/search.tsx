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
  return (
    <>
      <Card>
        <SearchForm>
          <input
            placeholder="주소 검색"
            value={keyword}
            onChange={e => {
              setKeyword(e.target.value)
            }}
          />
          <button>
            <InlineIcon icon={bxSearch} />
          </button>
        </SearchForm>
      </Card>
    </>
  )
}

export default MaskSearch
