import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddEvent = () => {
  let error;
  const handleSubmit = (event) => {
    event.preventDefault();
    const eventTitle = event.target.eventname.value;
    const imglink = event.target.imglink.value;
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    console.log(eventTitle, imglink);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error}
      <Form.Group className="mb-3" controlId="formBasictext1">
        <Form.Label>Event Title</Form.Label>
        <Form.Control name="eventname" type="text" placeholder="Event Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext2">
        <Form.Label>Image Link</Form.Label>
        <Form.Control name="imglink" type="text" placeholder="Image Link" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddEvent;
