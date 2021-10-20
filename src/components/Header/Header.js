import { Breadcrumbs } from "../Breadcrumbs";

function Header() {
    return (        
    <header className="header">
        <div class="logo">
            <a class="logo__link" href="#">
                <img className="logo__img" src="img/logo.png" alt="logo"></img>
            </a>
            <h1 className="logo__title">Online Store</h1>
        </div>
        <Breadcrumbs/>
    </header>)
}

export default Header;