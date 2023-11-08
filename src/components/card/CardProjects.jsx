import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProjets({ imagen, titulo, texto, url }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    newWindow.focus();
  };

  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="bg-dark text-white">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Button
          variant="success"
          onClick={() => {
            openInNewTab(url);
          }}
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProjets;
