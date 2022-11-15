// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterForm, LabelFilter, InputFilter } from "./Filter.styled";
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

export default function Filter() {
    const contactIdFilter = nanoid();
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter);

    const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
    return (
        <FilterForm>
            <LabelFilter htmlFor={contactIdFilter}>Find contacts by name</LabelFilter>
            <InputFilter type="text" value={filter} id={contactIdFilter} onChange={changeFilter} />
        </FilterForm>
    )
}

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }