import React, { useState } from "react";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import api from "../../../services/api";

function Profile() {
  const navigate = useNavigate();
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const [usuario, setUsuario] = useState(() => {
    const userStorage = localStorage.getItem("@Ipem:user");
    return userStorage ? JSON.parse(userStorage) : null;
  });

  const formatarNomeExibicao = (nome) => {
    if (!nome) return "";
    const partes = nome.trim().split(" ");
    if (partes.length === 1) return partes[0];
    return `${partes[0]} ${partes[partes.length - 1]}`;
  };

  const handleProfileClick = () => {
    if (!usuario) {
      navigate("/login");
    } else {
      setDropdownAberto(!dropdownAberto);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("@Ipem:token");
    localStorage.removeItem("@Ipem:user");
    delete api.defaults.headers.Authorization;
    setUsuario(null);
    setDropdownAberto(false);
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="profile-container">
      <div className="user-profile-trigger" onClick={handleProfileClick}>
        <div className="user-icon">
          {usuario?.foto_perfil ? (
            <img
              src={usuario.foto_perfil}
              alt="Usuário"
              className="user-avatar-img"
            />
          ) : (
            <FaUser color="white" />
          )}
        </div>

        <div className="user-info-text">
          {usuario ? (
            <>
              <span className="welcome-text">
                Olá, {usuario.nome.split(" ")[0]}
              </span>
              <span className="account-text">Minha Conta ▼</span>
            </>
          ) : (
            <span className="account-text">Acessar Sistema</span>
          )}
        </div>
      </div>
      {dropdownAberto && usuario && (
        <div className="login-dropdown">
          <div className="user-details-header">
            <p className="user-full-name">
              {formatarNomeExibicao(usuario.nome)}
            </p>
          </div>
          <hr className="divider" />
          <Link to="/perfil" onClick={() => setDropdownAberto(false)}>
            <button className="login-btn secondary">Meu Perfil</button>
          </Link>
          <button className="login-btn logout-style" onClick={handleLogout}>
            Sair do Sistema
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
