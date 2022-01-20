import styles from './Breadcrumbs.css'

function Breadcrumbs() {
    return (
        <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__home"></a>
            </li>
            <li className="breadcrumbs__item">
                <a href="/eCommerce" className="breadcrumbs__link">eCommerce</a>
            </li>
            <li className="breadcrumbs__item">
                <span className="breadcrumbs__current">Electronics</span>
            </li>
        </ul>
    );
}

export default Breadcrumbs;