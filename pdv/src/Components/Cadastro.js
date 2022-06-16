import { useState } from "react";

const Cadastro = (user) => {
  const [name, setName] = useState(user ? user.name : "");

  const [email, setEmail] = useState(user ? user.email : "");
  const [fone, setFone] = useState(user ? user.fone : "");
  const [usuario, setUsuario] = useState(user ? user.usuario : "");
  const [password, setPassword] = useState(user ? user.password : "");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro realizado com sucesso");
    console.log(name, email, fone, usuario, password);
    // limpar formulario

    setName("");
    setUsuario("");
    setEmail("");
    setFone("");

    setPassword("");
  };
  return (
    <div>
      <h2>...</h2>
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
};

export default Cadastro;
