import './App.css';
import React from "react";


class UsuarioEntrada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {setUser: this.props.setTextUsuario};
  }

  render() {
    let usuario = this.props.textUsuario;
    return (
        <div className="Formulario">
          Usuário: <input style={{width:'200px',padding:'7px',borderRadius:8}} type="text" value={usuario} onChange={(e) => this.state.setUser(e.target.value)}/>
        </div>
    );
  }
}

export default UsuarioEntrada;
