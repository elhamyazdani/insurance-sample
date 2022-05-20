import '../../../assets/scss/page/content/Promotion.scss'
import vector from '../../../assets/images/promotion.png'
import background from '../../../assets/images/promotion-back.png'

export default function Promotion () {
  const code = 'NEWBIE20'
  function copyHandler () {
    navigator.clipboard.writeText(code)
    alert('Copied the text: ' + code)
  }

  return (
    <div className='promotion'>
      <div className='vector'>
        <img src={vector} alt='' />
      </div>
      <div
        className='background'
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className='detail'>
        <div className='title'>20% Safe On Your First Account</div>
        <div className='code-wrapper'>
          <div className='code'>{code}</div>
          <div className='copy-link' onClick={copyHandler}>
            Copy Code
          </div>
        </div>
      </div>
    </div>
  )
}
