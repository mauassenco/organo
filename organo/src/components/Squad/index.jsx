import Member from "../Member"
import "./styles.css"

const Squad = (props) => {
    return (
        props.members.length > 0 && (
            <section className="squad" style={{ backgroundColor: props.containerColor }}>
                <h3 style={{ borderColor: props.cardColor }}>{props.name}</h3>
                <div className="members">
                    {props.members.map(member =>
                        <Member
                            key={member.name}
                            name={member.name}
                            position={member.position}
                            image={member.image}
                            squad={member.squad}
                            headerBg={props.cardColor}
                        />
                    )}
                </div>
            </section>
        )
    )
}

export default Squad