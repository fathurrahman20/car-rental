import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { API } from "../../common/API";
 
export default function LoginAdmin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("running");
    API.post("admin/auth/login", formData)
      .then((response) => {
        console.log(response.data.role);
        if (response.data.role !== "Admin")
        if (response.data.role === "Admin" && response.status === 201) {
          localStorage.setItem("tokenAdmin", response.data.access_token);
          //   props.setToken(localStorage.getItem("token"));
          navigate("/admin");
        }
        console.info("respons", response);
      })
  }
  return (
    <>
      <Container fluid className="login-admin-container">
        <Row className="vh-100">
          <Col md={7} className="bg-login-admin"></Col>
          <Col md={5} className="form-login-admin my-md-auto">
            <div className="sign-in-admin-form ms-md-auto me-md-auto">
              <div className="sign-in-rectangle">
              <img src="/img/login.jpg" alt="sign-in" />
              <h4 className="fw-bold sign-in-title">Welcome, Admin BCR</h4>
              </div>
              <div className="form">
              <Form onSubmit={handleSubmit} style={{ backgroundColor: "transparent"}}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Contoh: johndee@gmail.com"
                    required
                    value={email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="position-relative">
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="6+ karakter"
                    required
                    value={password}
                    onChange={handleChange}
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="position-absolute"
                      style={{ right: "5", bottom: "6" }}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="position-absolute"
                      style={{ right: "5", bottom: "6" }}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </FormGroup>
                <Button type="submit" className="w-100 form-button">
                  Sign In
                </Button>
              </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}