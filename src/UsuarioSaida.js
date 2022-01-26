import './App.css';
import React from "react";

class UsuarioSaida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let usuario = this.props.textUsuario;

    return (
        <div className="Saída" style={{width: '50%'}}>
          <div style={{padding:'20px',marginTop:'50px',borderRadius:10,backgroundColor:'#9edcef',color:'black'}}>
            <p>Login: {usuario}</p>
          </div>
          <div style={{padding:'20px',marginTop:'50px',borderRadius:10,backgroundColor:'#9edcef',color:'black'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
    );
  }
}

export default UsuarioSaida;
