import '../../../assets/scss/page/dashboard/MenuItem.scss'

export default function MenuItem ({
  title,
  image,
  hoverImage,
  active = false
}) {
  return (
    <li className={`menu-item ${active ? 'active' : ''}`}>
      <a href='/'>
        <div className='icon-wrapper'>
          <div className='icon'>
            <img src={image} alt='' />
            <img src={hoverImage} alt='' />
          </div>
        </div>
        <span className='title'>{title}</span>
      </a>
    </li>
  )
}
