import '../../../assets/scss/page/content/Content.scss'
import Promotion from './Promotion'
import Wallets from './Wallets'

export default function Content () {
  return (
    <div className='content'>
      <Promotion />
      <Wallets />
    </div>
  )
}
