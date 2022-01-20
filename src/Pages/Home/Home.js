import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import styles from './Home.css';

function Home({ items, category, brands }) {
    return (
        <div className="wrapper">
            <Header />
            <Breadcrumbs />

            <div className="category">
                <div className="category__row">
                    <Filters filters = {{category, brands}}/>
                    <main className="category__products">
                        <Search />
                        <CardList items={items} />
                    </main>
                </div>
            </div>
            <Pagination />
        </div>
    );
}

export default Home;