import { deleteContact, fetchContacts } from 'components/API/contactsApi';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter} from 'redux/contacts/contactsSelectors';
import { Item, BtnDelete, ListFilter } from "./ContactsList.styled";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    // const error = useSelector(selectError);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
    
    const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(todo =>
      todo.name.toLowerCase().includes(normalizedFilter)
    );
  };

    // const handleDelete = () => dispatch(deleteContact(id));
    
    return (
        <Item>
            {getVisibleContacts().map(({ id, name, number }) => (
                <ListFilter key={id}><span>{name}: </span>{number}
                <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>Delete</BtnDelete></ListFilter>
            ))}
        </Item>
    )
}


// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//     deleteContacts: PropTypes.func.isRequired, 
// }
