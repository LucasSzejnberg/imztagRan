import React, { useState } from 'react';
import './Instagram.css';

const InstagramLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
  });

  const [message, setMessage] = useState('');

  // Definimos el tipo del evento como ChangeEvent<HTMLInputElement>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('¡Has cambiado tu contraseña!');
  };

  return (
    <div className="instagram-login-container">
      <div className="instagram-login-box">
        <h1 className="instagram-logo">Imztagran</h1>
        <form className="instagram-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="currentPassword"
            placeholder="Contraseña actual"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Nueva contraseña"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
};

export default InstagramLogin;
