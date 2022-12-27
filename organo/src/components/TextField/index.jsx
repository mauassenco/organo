import "./styles.css"

const TextField = (props) => {

    const atType = (e) => {
        props.atChange(e.target.value)
    }

    return (
        <div className="text-field">
            <label htmlFor="">{props.labelText}</label>
            <input
                value={props.value} 
                onChange={atType} 
                required={props.required} 
                type="text"  
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField