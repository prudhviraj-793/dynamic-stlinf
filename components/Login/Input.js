import {Fragment} from 'react'

function Input(props) {
    return (
        <Fragment>
            <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur}/>
        </Fragment>
    )
}

export default Input