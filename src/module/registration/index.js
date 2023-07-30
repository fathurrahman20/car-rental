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
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { connect } from "react-redux";
import { postToAPIRegister, setForm } from "../../common/redux/actions/user";

function SignUp(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, password } = props.data.form;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    props.postAPIRegister(props.data.form);
  }

  return (
    <>
      <Container fluid className="sign-up-section">
        <Row className="vh-100">
          <Col md={6} sm={12} className="flex align-self-md-center">
            <div className="sign-up-form ms-md-auto me-md-auto">
              <div className="sign-up-rectangle">
                <img src="/img/Rectangle.png" alt="sign-up" />
                <h4 className="fw-bold sign-up-title">Sign Up</h4>
              </div>
              <CloseButton
                className="close-button"
                onClick={() => navigate("/")}
              />
              <Form
                onSubmit={handleSubmit}
                style={{ backgroundColor: "transparent" }}
              >
                <FormGroup xs={12} md={6}>
                  <Label for="username">Name*</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    value={name}
                    onChange={(e) => props.setform("name", e.target.value)}
                  />
                </FormGroup>
                <FormGroup xs={12} md={6}>
                  <Label for="email">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Contoh: johndee@gmail.com"
                    required
                    value={email}
                    onChange={(e) => props.setform("email", e.target.value)}
                  />
                </FormGroup>
                <FormGroup xs={12} md={6} className="position-relative">
                  <Label for="password">Create Password*</Label>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="6+ karakter"
                    required
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
                <Button type="submit" className="w-100 form-button ">
                  Sign Up
                </Button>
              </Form>
              <p className="text-center">
                Already have an account?{" "}
                <span>
                  <Link to="/login">Sign In here</Link>
                </span>
              </p>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            className="position-relative overflow-hidden sign-up-banner d-none d-md-block"
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

const mapDispatchToProps = (dispatch) => {
  return {
    setform: (formType, formValue) => dispatch(setForm(formType, formValue)),
    postAPIRegister: (data) => dispatch(postToAPIRegister(data)),
  };
};

const mapStateToProps = (state) => ({
  data: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
