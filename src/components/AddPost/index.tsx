import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface FormInitialValues {
  title: string;
  body: string;
}
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAppDispatch } from "../../features/hooks";
import { addPost } from "../../features/posts/postsSlice";
const AddPost = () => {
  const createPost = useMutation(api.posts.createPost);
  const dispatch = useAppDispatch();
  const initialValues: FormInitialValues = {
    title: "",
    body: "",
  };
  const postSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    body: Yup.string()
      .min(10, "Too Short!")
      .max(300, "Too Long!")
      .required("Required"),
  });
  const onSubmit = async (
    values: FormInitialValues,
    actions: FormikHelpers<FormInitialValues>
  ) => {
    const _id = (await createPost(values)) as string;
    // console.log(_id);

    const newPost = { _id, media: "", ...values };
    dispatch(addPost(newPost));

    actions.resetForm();
  };
  const renderError = (message: string) => (
    <span className="h-full bg-red-400 px-8 py-1 rounded">{message}</span>
  );

  return (
    <div className="w-full border-2 p-2 border-slate-400 rounded shadow">
      <h2 className="text-2xl font-bold text-center pb-2 text-slate-600">
        Create Post
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={postSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col gap-3">
          <div>
            <Field className="input mb-2" name="title" type="text" />
            <ErrorMessage name="title" render={renderError} />
          </div>
          <div>
            <Field
              className="input resize-none "
              as="textarea"
              name="body"
              rows={10}
            />
            <ErrorMessage name="body" render={renderError} />
          </div>

          <button className="btn bg-slate-800" type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddPost;
