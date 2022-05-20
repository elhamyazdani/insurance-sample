import Wallet from './Wallet'
import '../../../assets/scss/page/content/Wallets.scss'

const AMOUNTS = ['1000', '2500', '2500']

export default function Wallets () {
  return (
    <div className='wallets'>
      {AMOUNTS.map((item, index) => (
        <Wallet key={index} amount={item} />
      ))}
    </div>
  )
}
