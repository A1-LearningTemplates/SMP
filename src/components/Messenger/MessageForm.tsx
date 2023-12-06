import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
type FormInitialValues = {
  content: string;
  // media: string;
};
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { Id } from "../../../convex/_generated/dataModel";

const MessageForm = ({
  receiverId,
  senderId,
}: {
  receiverId: Id<"users">;
  senderId: Id<"users">;
}) => {
  const createMessage = useMutation(api.messages.createMessage);
  const initialValues = {
    content: "",
    // media: "",
  };

  const onMessageSend = async (
    values: FormInitialValues,
    actions: FormikHelpers<FormInitialValues>
  ) => {
    console.log(values);

    try {
      const message = {
        content: values.content,
        media: "",
        receiverId: receiverId,
        senderId: senderId,
      };
      const id = await createMessage(message);
      if (id) {
        actions.resetForm();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderError = (message: string) => (
    <span className="h-full bg-red-400 px-8 py-1 rounded">{message}</span>
  );

  return (
    <div className="w-full py-3">
      <Formik initialValues={initialValues} onSubmit={onMessageSend}>
        <Form className="flex flex-col gap-3">
          <div>
            <Field
              className="input "
              name="content"
              type="text"
              placeholder="Message..."
            />
            <ErrorMessage name="content" render={renderError} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MessageForm;
