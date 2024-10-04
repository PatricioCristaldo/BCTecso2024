import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mumaLogo from '../assets/isologo.png'

const validationSchema = Yup.object().shape({
  email: Yup.string("Debe ingresar su usuario")
    .email("Debe ingresar un email")
    .required("Usuario es requerido"),
  password: Yup.string()
    // .matches(/^\d+$/, "El password debe ser numérico")
    // .required("Password es requerido"),
});

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    axios
      .post("http://localhost:8080/api/Authentication/token", {
        user: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("Response:", response.data?.token);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="vh-100 justify-content-center align-items-center">
      <Container
        className=" rounded-2 py-4 align-self-center"
        style={{
          maxWidth: "400px",
          paddingTop: "50px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="pt-5 pb-5 d-flex justify-content-center">
          <img src={mumaLogo} alt="Muma isologo"/>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit: formikHandleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={formikHandleSubmit}>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.email && touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Contraseña*"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.password && touched.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-flex flex-row justify-content-between">
                <p>Recordarme</p>
                <p>Olvidaste tu Contraseña?</p>
              </div>
              <div className="justify-content-center w-100 mt-5">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-2 align-self-center w-100 py-2"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-2 align-self-center w-100 py-2"
                  disabled={isSubmitting}
                >
                  Crear cuenta
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Login;
