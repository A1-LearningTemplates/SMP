import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
type FormInitialValues = {
  title: string;
  body: string;
  media: string;
};
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { addPost } from "../../features/posts/postsSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
const AddPost = () => {
  const [media, setMedia] = useState("");
  const { user } = useAuth0();
  const userId = useAppSelector((state) => state.user.userId);

  const createPost = useMutation(api.posts.createPost);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const dispatch = useAppDispatch();
  const initialValues = {
    title: "",
    body: "",
    media: "",
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
    const date = new Date().getTime();
    const postData = {
      ...values,
      media: "https://admired-ptarmigan-167.convex.cloud/api/storage/" + media,
      userId,
    };
    const _id = await createPost(postData);
    const newPost = {
      _id,
      ...postData,
      media: "https://admired-ptarmigan-167.convex.cloud/api/storage/" + media,
      _creationTime: date,
      user: {
        _id: userId,
        is_active: true,
        email: user?.email || "",
        picture: user?.picture || "",
        nickname: user?.nickname || "",
      },
    };
    dispatch(addPost(newPost));
    actions.resetForm();
    setMedia("")
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
              rows={6}
            />
            <ErrorMessage name="body" render={renderError} />
          </div>
          <div>
            <input
              type="file"
              onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
                const files = event.target.files;
                if (files?.length === 0) {
                  return;
                }
                const postUrl = await generateUploadUrl({});
                // Step 2: POST the file to the URL
                const result = await fetch(postUrl, {
                  method: "POST",
                  headers: { "Content-Type": files![0].type },
                  body: files![0] ? files![0] : null,
                });
                const { storageId } = await result.json();
                // Step 3: Save the newly allocated storage id to the database
                setMedia(storageId);
              }}
            />
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
