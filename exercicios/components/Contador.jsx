import integracao1 from "@/pages/css/integracao1";
import { Component } from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec() {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    renderForm() {
        return (
            <>
                <input type="number" min={1} max={1000} value={this.state.passo} onChange={(event) => this.setState({ passo: parseInt(event.target.value) })} />
                <button style={{ width: "100px" }} onClick={() => this.inc()}>+</button>
                <button style={{ width: "100px" }} onClick={() => this.dec()}>-</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador (Usando Classe)</h1>
                <p>{this.state.numero}</p>
                {this.renderForm()}
            </div>
        )
    }
}