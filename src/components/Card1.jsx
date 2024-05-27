import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import "./Card1.css"
function Card1(props) {
  return (
    <Card className="c" style={{ width: '18rem' }}>
      <Card.Img variant="top" width={"286px"} height={"381px"}  src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.email}
        </Card.Text>
        <Card.Text>
         {props.phone}
        </Card.Text>
        <Button variant="primary"><Link to="/pages/courses/Pgdac"></Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;