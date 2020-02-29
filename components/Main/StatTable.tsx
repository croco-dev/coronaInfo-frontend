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
          <h4>오늘 확진자 증가</h4>
          <p className={report.increase_count > 0 ? 'data red' : 'data'}>
            {report.increase_count.toLocaleString()}명
          </p>
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
