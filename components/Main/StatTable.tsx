import React from 'react'
import styled from '@emotion/styled'

const StatTable = styled.table`
  width: 100%;
  text-align: center;
  td {
    padding: 10px 20px;
    border: 0;
    width: 50%;
  }
  h4 {
    font-size: 15px;
    margin-bottom: 3px;
  }
  .data {
    font-weight: 500;
    font-size: 24px;
    span.small {
      font-size: 14px;
    }
  }
  .green {
    color: #27af7d;
  }
  .red {
    color: #f24147;
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
          <h4>격리해제 (완치) 비율</h4>
          <p className={'data green'}>{report.cure_rate}%</p>
        </td>
      </tr>
      <tr>
        <td>
          <h4>확진자 제일 많은 지역</h4>
          <p className={'data'}>
            {report.top_rate_total_location.name}{' '}
            <span className={'small red'}>
              ({report.top_rate_total_location.total.toLocaleString()}명)
            </span>
          </p>
        </td>
        <td>
          <h4>오늘 확진자 제일 증가한 지역</h4>
          <p className={'data'}>
            {report.top_rate_increase_location.name}{' '}
            <span className={'small red'}>
              (+{report.top_rate_increase_location.increase.toLocaleString()}명)
            </span>
          </p>
        </td>
      </tr>
    </tbody>
  </StatTable>
)

export default StatTableComponent
