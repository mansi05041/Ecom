import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container, InputGroup } from 'react-bootstrap';
import NavbarImplementation from '../components/navbar/Navbar';

function AddProduct() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        name: yup.string().required('Product name is required'),
        description: yup.string().required('Desccription is required'),
        category: yup.string().required('Category is required'),
        brand: yup.string().required('Brand is required'),
        price: yup.number().required('Price is required').positive('Price must be positive'),
        releaseDate: yup.date().required('Release Date is required'),
        image: yup.mixed().required('Image is required'),
        quantity: yup.number().required('Quantity is required').min(1, 'Qunatity must be at least 1'),
        available: yup.bool().required('Availabilty is required'),
    });

    return (
        <>
            <NavbarImplementation />
            <Container className='mt-5'>
                <h2 className='text-center p-3'>Add New Product</h2>
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        name: '',
                        description: '',
                        category: '',
                        brand: '',
                        price: '',
                        releaseDate: '',
                        available: false,
                        quantity: '',
                        image: null,
                    }}
                >
                    {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    md="6"
                                    controlId="validationFormik101"
                                >
                                    <Form.Label className='fw-bold'>Product name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group
                                    as={Col}
                                    md="4"
                                    controlId="validationFormik102"
                                >
                                    <Form.Label className='fw-bold'>Category</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="category"
                                        value={values.category}
                                        onChange={handleChange}
                                        isValid={touched.category && !errors.category}
                                        isInvalid={!!errors.category}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                                    <Form.Label className='fw-bold'>Brand</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="brand"
                                        value={values.brand}
                                        onChange={handleChange}
                                        isValid={touched.brand && !errors.brand}
                                        isInvalid={!!errors.brand}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.brand}
                                    </Form.Control.Feedback>

                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    md="4"
                                    controlId="validationFormik103"
                                >
                                    <Form.Label className='fw-bold'>Price</Form.Label>
                                    <InputGroup>
                                    <InputGroup.Text className='bg-dark text-light'>₹</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        isValid={touched.price && !errors.price}
                                        isInvalid={!!errors.price}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.price}
                                    </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationFormik104"
                                >
                                    <Form.Label className='fw-bold'>Release Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="releaseDate"
                                        value={values.releaseDate}
                                        onChange={handleChange}
                                        isValid={touched.releaseDate && !errors.releaseDate}
                                        isInvalid={!!errors.state}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.releaseDate}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationFormik105"
                                >
                                    <Form.Label className='fw-bold'>Quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="quantity"
                                        value={values.quantity}
                                        onChange={handleChange}
                                        isValid={touched.quantity && !errors.quantity}
                                        isInvalid={!!errors.quantity}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.quantity}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="validationFormik107">
                                <Form.Label className='fw-bold'>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    isValid={touched.description && !errors.description}
                                    isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='fw-bold'>Upload Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    onChange={(e) => setFieldValue('image', e.target.file[0])}
                                    isInvalid={!!errors.image}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.image}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    name="available"
                                    label="Available"
                                    checked={values.available}
                                    onChange={handleChange}
                                    isValid={touched.available && !errors.available}
                                    isInvalid={!!errors.available}
                                />
                                <Form.Control.Feedback type="invalid">{errors.available}</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Button type="submit" className='btn btn-lg btn-dark d-block mx-auto col-md-2'>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    );
}

export default AddProduct;