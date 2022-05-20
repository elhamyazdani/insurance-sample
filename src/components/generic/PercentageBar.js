import '../../assets/scss/generic/PercentageBar.scss'

export default function PercentageBar ({ percentage, colorClass }) {
  return (
    <div className={`percentage-bar ${colorClass}`}>
      <div className='full-bar' style={{ width: `${percentage}%` }}></div>
    </div>
  )
}
