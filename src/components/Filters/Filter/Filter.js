function Filter({ filter, title }) {
    return (
        <div className="filter__item">
            <h5 className="filter__item-title">{title}</h5>
            {filter.map((item) => (
                <div className="filter__item-group">
                    <input type="checkbox" className="filter__item-checkbox" id={item} />
                    <label className="filter__item-label" for={item}>{item}</label>
                    <span className="filter__item-count">1920</span>
                </div>
            ))}

        </div>
    );
}

export default Filter;