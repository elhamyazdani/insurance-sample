import PercentageBar from '../../generic/PercentageBar'

export default function Disbursement ({ name, amount, percentage, color }) {
  return (
    <div className='policy item'>
      <div className='row'>
        <div className='name'>{name}</div>
        <div className='amount'>
          <div className='num'>{amount}</div>
          <div className='sign'>$</div>
        </div>
      </div>
      <PercentageBar percentage={percentage} colorClass={color} />
    </div>
  )
}
