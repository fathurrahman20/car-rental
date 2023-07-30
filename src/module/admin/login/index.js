import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
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
import { connect } from "react-redux";
import {
  postToAPILoginAdmin,
  setForm,
} from "../../../common/redux/actions/user";

function LoginAdmin(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = props.data.form;
  function handleSubmit(e) {
    e.preventDefault();
    props.postAPILoginAdmin(props.data.form);
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
                      required
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
                      required
                      value={password}
                      onChange={(e) =>
                        props.setform("password", e.target.value)
                      }
                    />
                    {showPassword ? (
                      <AiFillEyeInvisible
                        className="position-absolute"
                        style={{ right: "5", bottom: "6" }}
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      />
                    ) : (
                      <AiFillEye
                        className="position-absolute"
                        style={{ right: "5", bottom: "6" }}
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
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

const mapDispatchToProps = (dispatch) => {
  return {
    setform: (formType, formValue) => dispatch(setForm(formType, formValue)),
    postAPILoginAdmin: (data) => dispatch(postToAPILoginAdmin(data)),
  };
};

const mapStateToProps = (state) => ({
  data: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);
