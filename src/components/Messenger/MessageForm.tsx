import { Formik, FormikHelpers, Form, Field } from "formik";
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

  return (
    <div className="absolute bottom-0 w-full ">
      <Formik initialValues={initialValues} onSubmit={onMessageSend}>
        <Form className="h-full">
          <div className="h-full">
            <Field
              className="input h-full"
              name="content"
              type="text"
              placeholder="Message..."
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MessageForm;
