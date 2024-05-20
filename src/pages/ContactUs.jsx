import Container from "react-bootstrap/Container";
import { Header } from "../components/Header";
import FormComp from "../components/FormCom";

export function ContactUs(){
    return(
        <>
      
      <Container>
          <Header title="This is contact" />

      </Container>
      
        <Container className="border border-dark p-4 bg-secondary w-50" style={{ height: '600px' }} >
            <FormComp/>
        </Container>

        </>
    )
}