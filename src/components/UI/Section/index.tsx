import styles from './Section.module.css';

// @ts-ignore
const Section = (props) => {
    return (
        <div draggable='true' className={styles.card} onDrag={props.onDragHandler} onContextMenu={props.onContextMenuHandler}>
            {props.children}
        </div>
    )
}

export default Section;