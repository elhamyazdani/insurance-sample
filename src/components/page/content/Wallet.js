import Disbursement from './Disbursement'
import '../../../assets/scss/page/content/Wallet.scss'

export default function Wallet ({ amount }) {
  return (
    <div className='wallet-box'>
      <div className='wallet'>
        <div className='balance'>
          <div className='num'>{amount}</div>
          <div className='sign'>$</div>
        </div>
        <div className='title'>Total Value of Disbursement</div>

        <div className='disbursements'>
          <Disbursement
            name='Policy'
            amount='1100'
            percentage='44'
            color='secondary'
          />
          <Disbursement
            name='Claim'
            amount='1400'
            percentage='66'
            color='primary'
          />
        </div>
      </div>
    </div>
  )
}
