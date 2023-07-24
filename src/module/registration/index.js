import {
    Button,
    CloseButton,
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

  export default function SignUp() {
  const [formData, setFormData] = useState({
      username: "",
      password: "",
      createpassword: "", 
    });
    const [showPassword,] = useState(false);
    const { username, email, createpassword } = formData;
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
        .post("https://api-car-rental.binaracademy.org/customer/auth/register", {
          usernamename: username,
          email: email,
          createpassword: createpassword,
        })
        .then((response) => {
          console.log(response.statusText);
          if (response.status === 201) {
            navigate("/");
          }
        })
        .catch((e) => {
          console.info(e);
        });
    }
    return (
      <>
        <Container fluid className="sign-up-section">
          <Row className="vh-100">
            <Col md={6} sm={12} className="flex align-self-md-center">
              <div className="sign-up-form ms-md-auto me-md-auto">
                <div className="sign-up-rectangle">
                <img src="/img/Rectangle.png" alt="sign-up" style={{ marginTop: "29px"}} />
                {window.innerWidth < 768 && (
                  <CloseButton
                  className="close-button"
                  onClick={() => navigate("/")} style={{ position: "fixed", top:"30px", right: "10px"}}/>
                )}
                <h4 className="fw-bold sign-up-title">Sign Up</h4>
                </div>
                <Form onSubmit={handleSubmit} style={{ backgroundColor : "transparent"}}>
                  <FormGroup xs={12} md={6}>
                    <Label for="username">Name*</Label>
                    <Input
                      id="username"
                      name="username"
                      type="username"
                      placeholder="Nama Lengkap"
                      value={username}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup xs={12} md={6}>
                    <Label for="email">Email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type={showPassword ? "text" : "email"}
                      placeholder="Contoh: johndee@gmail.com"
                      value={email}
                      onChange={handleChange}
                    />
                    </FormGroup>
                     <FormGroup xs={12} md={6}>
                    <Label for="createpasssword">Create Password*</Label>
                    <Input
                      id="createpassword"
                      name="createpassword"
                      type={showPassword ? "text" : "createpassword"}
                      placeholder="6+ karakter"
                      value={createpassword}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button 
                  onClick={() => handleChange ()}
                  type="submit" className="w-100 form-button ">
                    Sign Up
                  </Button>
                </Form>
                <p className="text-center">
                  Already have an account? <span>Sign In here</span>
                </p>
              </div>
            </Col>
            <Col
              md={6} sm={12}
              className="position-relative overflow-hidden sign-up-banner d-none d-md-block" style={{ padding : "20px"}}
            >
              <div className="position-absolute sign-up-image overflow-hidden">
                <h3 className="mb-4 text-white fw-semibold">Binar Car Rental</h3>
                <img src="/img/signUp.png" alt="sign-up-banner" />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  