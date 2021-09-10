import ShopOne from './../../assets/ShopOne.jpg';
import ShopTwo from './../../assets/ShopTwo.jpg';
import './styles.scss';



const Directory = props => {
    return (
        <div className="directory">
           <div className="wrap">
            <div 
            className="item"
            style={{backgroundImage: `url(${ShopOne})`
            }}>
            <a>Shop Printers</a>
            </div>
            <div 
            className="item"
            style={{backgroundImage: `url(${ShopTwo})`
            }}>
            <a>Shop Computers</a>
            </div>
            </div>
        </div>
    )
}

export default Directory;