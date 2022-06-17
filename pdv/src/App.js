//CSS
import "./App.css";
import "./Components/Cadastro.css";

//Components

import React, { useEffect, useState } from "react";

const url = "http://localhost:3000/user";

function App() {
  const [cadastro, setCadastro] = useState([]);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  // funções de envio
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFone = (e) => {
    setFone(e.target.value);
  };

  const handleUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url);
      const users = await res.json();

      setCadastro(users);
    }
    fecthData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const users = {
      name,
      email,
      fone,
      usuario,
      password,
    };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    });

    console.log(users, res);
  }

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <table className="container">
          <div className="context">
            <label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu Nome"
                value={name}
                onChange={handleName}
              />
            </label>

            <label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleEmail}
              />
            </label>
            <label>
              <input
                type="number"
                name="fone"
                placeholder="Digite seu telefone"
                value={fone}
                onChange={handleFone}
              />
            </label>
            <label>
              <input
                type="text"
                name="usuario"
                placeholder="Crie um usuario"
                value={usuario}
                onChange={handleUsuario}
              />
            </label>

            <label>
              <input
                type="text"
                name="password"
                placeholder="Crie uma senha"
                value={password}
                onChange={handlePassword}
              />
            </label>
            <button type="submit" className="btn">
              Cadastrar
            </button>
          </div>
        </table>
      </form>
    </div>
  );
}

export default App;
