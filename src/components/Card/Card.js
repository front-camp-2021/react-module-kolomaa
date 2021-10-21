import { ButtonAdd } from "../Button/ButtonAdd";
import { ButtonWishlist } from "../Button/ButtonWishlist";

function Card() {
    return (
    <section className = "card">
        <div className="card__img-box">
            <img className="card__img" src={images[0]} alt={title}></img>
        </div>
        <div className="card__body">
            <div className="card__box">
                <div className="card__rate-box">
                    <span className="card__rating">{rating}</span>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.69807 1L9.69699 4.94953L14.1671 5.58675L10.9326 8.65931L11.6959 13L7.69807 10.9495L3.70022 13L4.46357 8.65931L1.22906 5.58675L5.69915 4.94953L7.69807 1V1Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <span className="card__price">{price+'$'}</span>
            </div>
            <h3 className="card__name">
                {title}
            </h3>
            <p className="card__description">
                {category} {brand}
            </p>
        </div>
        <div className="card__btn-box btn">
            <ButtonWishlist/>
            <ButtonAdd/>
        </div>
    </section>)
}

export default Card;