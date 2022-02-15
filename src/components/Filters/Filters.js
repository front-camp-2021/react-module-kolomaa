import Filter from './Filter/Filter';
import styles from './Filters.css'
function Filters({ filters }) {
    return (
        <aside className="filter">
            <div className="filter__header">
                <h3 className="filter__header-title">Filters</h3>
                <button className="button button_white button_icon">
                    <img src="images/icons/chevrons-right.svg" alt="Toggle Filter" />
                </button>
            </div>
            <div className="filter__body">
                {
                    Object.keys(filters).map((item) => (
                        <Filter filter={filters[item]} title={item}/>
                    ))
                }
            </div>
            <button className="button button_primary filter__clearButton">Clear all filters</button>
        </aside>
    );
}

export default Filters;