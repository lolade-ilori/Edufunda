import  ContentSvg  from '../assets/svg/content-img.svg';

function LeftPage() {
  return (
    <div className="leftpage-signup">
        <header>
            <div className="logo-container">
                {/* <img src="" className="icon" /> */}
                <span>Edufunda</span>
            </div>
        </header>

        <div className="content">
            <div className="img-content">
                <img src={ContentSvg} width={450}/>
            </div>

            <div className="text-content">
                <h1>assignment solution</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content</p>
            </div>
        </div>
    </div>
  )
}

export default LeftPage