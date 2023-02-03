
import PropTypes from "prop-types";



const  MyPhonebookFilter = ({handleChange}) => {
    return (
        <div >
            <label>Find contacts by name</label>
            <input name="filter" onChange={handleChange} placeholder ="Find contact"></input>
        </div>
    )
}

export default  MyPhonebookFilter;

 MyPhonebookFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
}