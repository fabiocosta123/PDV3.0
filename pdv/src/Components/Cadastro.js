import React, { useEffect, useState } from "react";

const url = "http://localhost:3000/usuarios";

const Cadastro = () => {
  const [user, setUser] = useState([]);
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

      setUser(users);
    }
    fecthData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    clearForm();
    const cadastro = {
      name,
      email,
      fone,
      user,
      password,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cadastro),
    });

    console.log(cadastro, res);
  }

  //limpar Formulário
  const clearForm = () => {
    setName("");
    setEmail("");
    setFone("");
    setUsuario("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table className="container">
          <div className="context">
            <label>
              <h2>Cadastro de Usuário</h2>
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
};
export default Cadastro;
