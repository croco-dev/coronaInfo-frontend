import React, { useState } from 'react'
import styled from '@emotion/styled'
import Card from '@/components/Card'

const StyleSection = styled.div`
  line-height: 1.5;
  .gray {
    color: gray;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
    span {
      font-size: 14px;
      color: red;
    }
  }
  .openBtn {
    width: 30px;
    float: right;
  }
  table {
    width: 100%;
    td {
      padding: 12px 16px;
      border: 1px solid #dedede;
      &:nth-of-type(1) {
        font-weight: 500;
        width: 100px;
        text-align: center;
      }
    }
  }
  .infomation {
    margin-top: 20px;
  }
`
const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  color: #fff;
  font-weight: 500;
  padding: 3px 15px;
  width: 70px;
  margin-bottom: 2px;

  &.one {
    background: var(--main);
  }
  &.two {
    background: #ff5656;
  }
  &.three {
    background: #288850;
  }
`

const Address = styled.span`
  color: #888;
`

const MaskCard = ({ data }) => {
  const [open, setOpen] = useState(false)

  const changeOpen = (): void => {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <>
      <Card>
        <StyleSection>
          <span className="openBtn" onClick={changeOpen}>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" />
              </svg>
            )}
          </span>
          {data.type === '01' && <Tag className="one">약국</Tag>}
          {data.type === '02' && <Tag className="two">우체국</Tag>}
          {data.type === '03' && <Tag className="three">농협</Tag>}
          <h2 className="name">
            {data.name} {data.sold_out === true && <span>일시 품절</span>}
          </h2>
          <Address>{data.addr}</Address>
          {open === true && (
            <>
              <div className="infomation">
                <table>
                  <tbody>
                    <tr>
                      <td>입고 시간</td>
                      <td>
                        {data.stock_t ? (
                          <span>{data.stock_t} (24시간 기준)</span>
                        ) : (
                          <span className={'gray'}>정보 없음</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>입고 수량</td>
                      <td>
                        {data.stock_cnt ? (
                          <span>{data.stock_cnt}</span>
                        ) : (
                          <span className={'gray'}>정보 없음</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>판매 수량</td>
                      <td>
                        {data.sold_cnt ? (
                          <span>{data.sold_cnt}</span>
                        ) : (
                          <span className={'gray'}>정보 없음</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>재고 수량</td>
                      <td>
                        {data.remain_cnt ? (
                          <span>{data.remain_cnt}</span>
                        ) : (
                          <span className={'gray'}>정보 없음</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </StyleSection>
      </Card>
    </>
  )
}

export default MaskCard
