import React, { useState } from "react";
import api from "../../services/api";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/Modal/Modal";
import "./Login.css";

const Login = () => {
  const { modalConfig, showModal, closeModal } = useModal();
  const [values, setValues] = useState({ email: "", senha: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/usuarios/login", {
        email: values.email,
        senha: values.senha,
      });

      if (response.data.token) {
        localStorage.setItem("@Ipem:token", response.data.token);
        localStorage.setItem("@Ipem:user", JSON.stringify(response.data.user));

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        showModal(`Bem-vindo, ${response.data.user.nome}!`, "success");

        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      }
    } catch (error) {
      showModal(
        error.response?.data?.error || "Erro ao realizar login no sistema.",
        "error",
      );
    }
  };

  return (
    <div className="auth-container">
      <h2>Acesso ao Sistema</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          className="auth-input"
          placeholder="E-mail:"
          required
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="senha"
          type="password"
          className="auth-input"
          placeholder="Senha:"
          required
          value={values.senha}
          onChange={handleChange}
        />
        <button type="submit" className="btn-auth">
          Entrar
        </button>
      </form>
      <Modal config={modalConfig} onClose={closeModal} />
    </div>
  );
};

export default Login;
