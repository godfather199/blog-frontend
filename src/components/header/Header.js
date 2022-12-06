import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            {/* <span className="headerTitleSm">React & Node</span> */}
            <span className="headerTitleLg">Blogology</span>
        </div>
        <img
            className="headerImg"
            src="https://dicc.in/blog/wp-content/uploads/2022/01/image-6-min-6-1140x600.png"
            alt=""
      />
    </div>
  )
}

export default Header





