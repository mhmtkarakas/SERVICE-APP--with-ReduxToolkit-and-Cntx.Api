import { Col, Row, Form, Button } from "react-bootstrap";
import { useContext, useRef, useState } from "react";
import useApi from './../../hooks/useApi';
import { toast } from 'react-toastify';
import { AuthTokenContext } from './../../context/auth-token-context-provider/index';
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

export default function LoginPage() {
  const api = useApi();
  const authTokenContextValue = useContext(AuthTokenContext)
  const dispatch = useDispatch();
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
  
 // console.log(email, password);

  // 2-useRef hook yontemi
  const emailRef = useRef();
  const passwordRef = useRef();
 // console.log(emailRef.current?.value);
 // console.log(passwordRef.current?.value);

  // 3- Formu json a cevirerek datanin alinmasi
  const onFormSubmit = (event) => {
    event.preventDefault();

    //toast('Form submit oluyor');
   

    // Burada formu komple json a cevirerek inputlardaki datalari almis olacagiz
    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());

    console.log(">>formJson datasi", formJson);
    api.post('auth/login',formJson)
    .then((response)=>{
      console.log('>>api response',response);
      
      // Api den cevap geldiginde token bilgisini context e gonder.
      //kullanici bilgisini de state e gonder
      authTokenContextValue.setToken(response.data.data.token);
  
      dispatch(setUserData(response.data.data.userData))

      toast.success('Giris Basarili', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    .catch((err)=>{
      console.log('error',err);
      toast.error('Giris yapilamadi Lutfen bilgilerinizi kontrol ediniz!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <Row className="justify-content-center">
          <Col sm="12" lg="4">
            <div className="form-group mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
              />
            </div>

            <div className="form-group mb-3">
              <Form.Label>Sifre</Form.Label>
              <Form.Control
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
              />
            </div>

            <div className="form-group mb-3">
              <Button variant="primary" className="w-100" type="submit">
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
