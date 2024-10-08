import React from "react";
import "./Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            numPhone: ''
        }
    }

    handleChange = (event) => {
        //console.log(event.target);
        const { id, value } = event.target;
        console.log(id);

        this.setState({
            [id]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onHandleSubmit(this.state);
    }

    render() {
        const name = this.state.name;
        const email = this.state.email;
        const numPhone = this.state.numPhone;

        return (
            <aside>
                <h2>Insira novos leads</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>

                <form>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" placeholder="Ex.: Rodrigo" onChange={this.handleChange} value={name} />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" placeholder="Ex.: user@mail.com" onChange={this.handleChange} value={email} />
                    </div>

                    <div>
                        <label htmlFor="numPhone">Celular:</label>
                        <input type="text" id="numPhone" placeholder="Ex.: 11 99433-1684" onChange={this.handleChange} value={numPhone} />
                    </div>

                    <button onClick={this.handleSubmit}>Cadastrar</button>
                </form>

            </aside>
        );
    }
}

export default Form;