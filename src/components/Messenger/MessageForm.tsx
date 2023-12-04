import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
type FormInitialValues = {
  message: string;
  // media: string;
};
const MessageForm = () => {
  const initialValues = {
    message: "",
    // media: "",
  };

  const onMessageSend = (
    values: FormInitialValues,
    actions: FormikHelpers<FormInitialValues>
  ) => {
    console.log(values);

    try {
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const renderError = (message: string) => (
    <span className="h-full bg-red-400 px-8 py-1 rounded">{message}</span>
  );

  return (
    <div className="absolute bottom-0 w-full">
      
      <Formik initialValues={initialValues} onSubmit={onMessageSend}>
        <Form className="flex flex-col gap-3">
          <div>
            <Field
              className="input "
              name="message"
              type="text"
              placeholder="Message..."
            />
            <ErrorMessage name="message" render={renderError} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MessageForm;
