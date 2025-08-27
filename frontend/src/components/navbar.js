import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { clearTokens } from '../services/auth';
import { FaWhatsapp } from 'react-icons/fa'; // Importar ícono

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearTokens();
    navigate('/login');
  };


  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Institución montevera
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-3">
          <a
            href="https://chat.whatsapp.com/HHAHqLhfDkeEXuNnTOjCN3"
            target="_blank"
            rel="noopener noreferrer"
            title="Unirse al grupo de WhatsApp"
            style={{ color: '#25D366', fontSize: '1.5rem' }}
          >
            <FaWhatsapp />
          </a>

          <Button variant="outline-danger" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Menu;
