import './Breadcrumbs.css';

function Breadcrumbs() {
    return (
        <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="#">
                        <svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1 6.25L8.61984 1L16.2397 6.25V14.5C16.2397 15.3284 15.4816 16 14.5464 16H2.6933C1.75811 16 1 15.3284 1 14.5V6.25Z"
                                stroke="#7E72F2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.68909 16V8H11.5505V16" stroke="#7E72F2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="#">
                        eCommerce
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link breadcrumbs__link--active" href="#">
                        Electronics
                    </a>
                </li>
            </ul>
    </nav>
    )
}

export default Breadcrumbs;