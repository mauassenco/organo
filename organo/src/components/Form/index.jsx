import "./styles.css"
import TextField from "../TextField"
import DropdownList from "../DropdownList"
import Button from "../Button"
import { useState } from "react"

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [squad, setSquad] = useState('')

    const atSaveForm = (e) => {
        e.preventDefault()
        props.atRegister({
            name,
            position,
            image,
            squad
        })
        setName('')
        setPosition('')
        setImage('')
        setSquad('')
    }

    return (
        <section className="form">
            <form action="" onSubmit={atSaveForm}>
                <h2>Fill in the form with the employee's data</h2>
                <TextField
                    required
                    labelText="Name"
                    placeholder="Type your name"
                    value={name}
                    atChange={value => setName(value)}

                />
                <TextField
                    required
                    labelText="Position"
                    placeholder="Type your position"
                    value={position}
                    atChange={value => setPosition(value)}

                />
                <TextField
                    labelText="Imagem"
                    placeholder="Type image source"
                    value={image}
                    atChange={value => setImage(value)}

                />
                <DropdownList
                    required
                    label="Squad"
                    item={props.squads}
                    value={squad}
                    atChange={value => setSquad(value)}

                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form