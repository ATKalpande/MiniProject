import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CourseCard(props) {
 function handleClick(){
  alert("Course enroll")
 }
  return (
    <Card  style={{ width: '18rem',border:"none" }}>
      <Card.Img variant="top"   src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Card.Text>
         {props.duration}
        
        </Card.Text>
        <Card.Text className=" text-bold">
        {props.fees}
          </Card.Text>        
        {/* <Button  variant="primary">Enroll Course</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CourseCard;