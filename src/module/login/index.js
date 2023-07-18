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
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignIn() {
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

    await axios
      .post("https://api-car-rental.binaracademy.org/customer/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.statusText);
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <Container fluid className="sign-in-section">
        <Row className="vh-100">
          <Col md={6} className="flex align-self-md-center">
            <div className="sign-in-form ms-md-auto me-md-auto">
              <img src="/img/login.jpg" alt="sign-in" />
              <h4 className="fw-bold sign-in-title">Welcome Back!</h4>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Contoh: johndee@gmail.com"
                    value={email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="6+ karakter"
                    value={password}
                    onChange={handleChange}
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="position-absolute"
                      style={{ left: "30rem", top: "347px" }}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="position-absolute"
                      style={{ left: "30rem", top: "347px" }}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </FormGroup>
                <Button type="submit" className="w-100 form-button ">
                  Sign In
                </Button>
              </Form>
              <p className="text-center">
                Don't have an account? <span>Sign Up for free</span>
              </p>
            </div>
          </Col>
          <Col
            md={6}
            className="position-relative overflow-hidden sign-in-banner"
          >
            <div className="position-absolute sign-in-image overflow-hidden">
              <h3 className="mb-4 text-white fw-semibold">Binar Car Rental</h3>
              <img src="/img/login-image.jpg" alt="sign-in-banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
