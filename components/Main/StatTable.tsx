import React from 'react'
import styled from '@emotion/styled'

const StatTable = styled.table`
  width: 100%;
  text-align: center;
  td {
    padding: 10px 20px;
    border: 0;
  }
  h4 {
    font-size: 15px;
    margin-bottom: 3px;
  }
  .data {
    font-weight: 500;
    font-size: 24px;
    &.green {
      color: #27af7d;
    }
    &.red {
      color: #f24147;
    }
  }
`

const StatTableComponent = ({ report }): JSX.Element => (
  <StatTable>
    <tbody>
      <tr>
        <td>
          <h4>증가 인원</h4>
          <p className={report.increase_count > 0 ? 'data red' : 'data'}>
            {report.increase_count}%
          </p>
        </td>
        <td>
          <h4>2차 감염 비율</h4>
          <p className={'data red'}>{report.second_rate}%</p>
        </td>
      </tr>
      <tr>
        <td>
          <h4>사망자 비율</h4>
          <p className={report.death_rate > 0 ? 'data red' : 'data'}>{report.death_rate}%</p>
        </td>
        <td>
          <h4>완치자 비율</h4>
          <p className={'data green'}>{report.cure_rate}%</p>
        </td>
      </tr>
    </tbody>
  </StatTable>
)

export default StatTableComponent
