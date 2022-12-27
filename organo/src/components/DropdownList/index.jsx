import "./styles.css"

const DropdownList = (props) => {

  const atType = (e) => {
    props.atChange(e.target.value)
  }

  return (
    <div className="dropdown-list">
      <label htmlFor="">{props.label}</label>
      <select required={props.required} name="" id="" value={props.value} onChange={atType}>
        {props.item.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropdownList

