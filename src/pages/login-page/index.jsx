import { Col, Row, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";

export default function LoginPage() {
  /**Bir inputtan data almak icin asagidaki yontemler kullanilabilir.
   * Amatorden profesyonele dogru siralanmistir.
   * 1-useState hooku kullanilarak yapilan
   * 2-useRef hooku kullanilarak yapilan
   * 3-Formu Json a cevirerek datanin alinmasi
   * 4-Formik veya react-hook-form kutuphanelerinin kullanilmasi
   *
   */
  // UseState hook kullanimi

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email,password);

  // 2-useRef hook yontemi
   const emailRef = useRef();
   const passwordRef = useRef();
  return (
    <>
      <form>
        <Row className="justify-content-center">
          <Col sm="12" lg="4">
            <div className="form-group mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
              ref = {emailRef}
              onChange ={e=>setEmail(e.target.value)} 
              type="email" name="email" />
            </div>

            <div className="form-group mb-3">
              <Form.Label>Sifre</Form.Label>
              <Form.Control 
              ref = {passwordRef}
              onChange ={e=>setPassword(e.target.value)}
              type="password" name="password" />
            </div>

            <div className="form-group mb-3">
              <Button variant="primary" className="w-100">
                <i class="fa-solid fa-paper-plane"></i>
                &nbsp;Gonder
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
}
