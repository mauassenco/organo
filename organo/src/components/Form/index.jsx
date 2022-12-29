import "./styles.css"
import Field from "../Field"
import DropdownList from "../DropdownList"
import Button from "../Button"
import { useState } from "react"

const Form = ({atRegister, squads, atCreateSquad}) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [squad, setSquad] = useState('')
    const [squadName, setSquadName] = useState('')
    const [squadColor, setSquadColor] = useState('')

    const atSaveForm = (e) => {
        e.preventDefault()
        atRegister({
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
                <Field
                    required
                    labelText="Name"
                    placeholder="Type your name"
                    value={name}
                    atChange={value => setName(value)}

                />
                <Field
                    required
                    labelText="Position"
                    placeholder="Type your position"
                    value={position}
                    atChange={value => setPosition(value)}

                />
                <Field
                    labelText="image"
                    placeholder="Type image source"
                    value={image}
                    atChange={value => setImage(value)}

                />
                <DropdownList
                    required
                    label="Squad"
                    item={squads}
                    value={squad}
                    atChange={value => setSquad(value)}

                />
                <Button>
                    Create Card
                </Button>
            </form>
            <form 
                action="" 
                onSubmit={(e) => {
                    e.preventDefault()
                    atCreateSquad({name: squadName, cardColor: squadColor})
                    setSquadName('')
                    setSquadColor('#000')
                }
            }>
                <h2>Fill in the form to create a new squad</h2>
                <Field
                    required
                    labelText="Squad Name"
                    placeholder="Type the squad name"
                    value={squadName}
                    atChange={value => {setSquadName(value)}}                    
                />
                <Field
                    required
                    labelText="Squad color"
                    placeholder="Select a color to squad"
                    value={squadColor}
                    atChange={value => setSquadColor(value)}
                    type='color'
                />
                <Button>
                    Create Squad
                </Button>
            </form>
        </section>
    )
}

export default Form