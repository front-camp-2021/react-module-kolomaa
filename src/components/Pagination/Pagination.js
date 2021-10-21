function Pagination () {
    return (
        <nav className="pagination__content">
            <div className="pagination__prev">
                <a className="page__prev-link" href="#" data-element="nav-prev">
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.09959 13L1.07361 7L7.09959 1" stroke="black" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        
            <div className= "pagination">
                <ul className="pagination__list" data-element="pagination">
                    
                </ul>
            </div>

            <div className="pagination__next">
                <a className="pagination__next-link" href="#" data-element="nav-next">
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.93566 1L7.96164 7L1.93566 13" stroke="black" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
        </div>
    </nav>
    )
}

export default Pagination;