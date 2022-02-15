import Card from './Card/Card';
import styles from './CardList.css'

function CardList({ items }) {
    return (
        <div className="product-list">
            {items.map((item) => (
                <Card
                    key={item.id}
                    {...item}
                />))}
        </div>
    )
}

export default CardList;