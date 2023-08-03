import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  CloseButton,
} from "reactstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { connect } from "react-redux";
import { postToAPILogin, setForm } from "../../common/redux/actions/user";

function SignIn(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = props.data.form;
  const navigate = useNavigate();
  const tokenCustomer = localStorage.getItem("tokenCustomer");

  useEffect(() => {
    if (tokenCustomer) navigate("/");
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.postAPILogin(props.data.form);
  }

  return (
    <>
      <Container fluid className="sign-in-section">
        <Row className="vh-100">
          <Col md={6} className="flex align-self-md-center">
            <div className="sign-in-form ms-md-auto me-md-auto">
              <div className="fw-bold sign-in-rectangle">
                <img src="/img/login.jpg" alt="sign-in" />
                <h4 className="fw-bold sign-in-title">Welcome Back!</h4>
              </div>
              {window.innerWidth < 768 && (
                <CloseButton
                  className="close-button"
                  onClick={() => navigate("/")}
                  style={{ position: "absolute", top: "30px", right: "10px" }}
                />
              )}
              <Form
                onSubmit={handleSubmit}
                style={{ backgroundColor: "transparent" }}
              >
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Contoh: johndee@gmail.com"
                    value={email}
                    onChange={(e) => props.setform("email", e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="position-relative">
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="6+ karakter"
                    value={password}
                    onChange={(e) => props.setform("password", e.target.value)}
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="position-absolute"
                      style={{ right: "5", bottom: "7" }}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEye
                      className="position-absolute"
                      style={{ right: "5", bottom: "7" }}
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                </FormGroup>
                <Button type="submit" className="w-100 form-button">
                  Sign In
                </Button>
              </Form>
              <p className="text-center">
                Don't have an account?{" "}
                <span>
                  <Link to="/register">Sign Up for free</Link>
                </span>
              </p>
            </div>
          </Col>
          <Col
            md={6}
            className="position-relative overflow-hidden sign-in-banner d-none d-md-block"
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

const mapDispatchToProps = (dispatch) => {
  return {
    setform: (formType, formValue) => dispatch(setForm(formType, formValue)),
    postAPILogin: (data) => dispatch(postToAPILogin(data)),
  };
};

const mapStateToProps = (state) => ({
  data: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
