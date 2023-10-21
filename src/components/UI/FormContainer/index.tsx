import styles from './FormContainer.module.css';
import Header from "../Header";

// @ts-ignore
const FormContainer = props => {
    return (
        <div className={styles.formContainer} onDrop={props.onDropHandler}>
            {props.children}
        </div>
    )
}

export default FormContainer;