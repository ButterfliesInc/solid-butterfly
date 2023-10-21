import { useState } from 'react'
import styles from './Card.module.css';
import ContactsForm from '../../ContactsForm';
import Backdrop from '../Backdrop';



// @ts-ignore
const Card = (props) => {
    const [ editContact, setEditContact] = useState(false)

    const onClickHandler = () => {
        console.log("hello " + props.key)
        setEditContact(true)
    }

    const closeContactHandler= () => {
        console.log("hello " + props.key)
        setEditContact(true)
    
    }
    return (
        <div key={props.key} draggable='true' className={styles.card} onDrag={props.onDragHandler} onContextMenu={props.onContextMenuHandler} onClick={onClickHandler}>
            {props.children}
            { editContact && <ContactsForm onCancel={props.onCancel} onUpdate={props.onUpdate} /> }
            { editContact && <Backdrop onCancel={closeContactHandler} /> }
        </div>
    )
}

export default Card;
