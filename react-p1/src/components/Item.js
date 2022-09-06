import PropTypes from "prop-types"

function Item({brand, release}) {
    return (
        <>
            <li>{brand} - {release} </li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    release: PropTypes.number,
}

Item.defaultProps = {
    brand: "none",
    release: 0
}

export default Item