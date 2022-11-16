import { deleteContact} from 'redux/contactsApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter} from 'redux/contacts/contactsSelectors';
import { Item, BtnDelete, ListFilter } from "./ContactsList.styled";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    
    const getVisibleContacts = () => {
    return contacts.filter(todo =>
      todo.name.toLowerCase().includes(filter.toLowerCase())
    );
        
  };
    // const handleDelete = () => dispatch(deleteContact(id));
    const filterContacts = getVisibleContacts();
    // console.log(filterContacts);
    // console.log(filter);
    
    return (
        <Item>
            {filterContacts?.map(({ id, name, number }) => (
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
