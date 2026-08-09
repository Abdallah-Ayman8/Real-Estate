import { useFormik } from "formik";
import { formValidationSchema } from "./validation";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import { X } from "lucide-react";
// import useInsertData from "../../Hooks/useInsertData";
// import useDeleteData from "../../Hooks/useDeleteData";

export default function Form() {
  // const { insertData } = useInsertData();
  // const { insertDelete } = useDeleteData();

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      name: "",
      phone: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        // const res = insertData("mobile/real-estates/", values);
        // console.log(res);
        // const deletedata = insertDelete("mobile/real-estates/", 215);
        // console.log(deletedata);
        formik.resetForm();
        setPreviewImage(null);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const [previewImage, setPreviewImage] = useState(null);

  async function handleImageChange(e) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
      fileType: "image/webp",
      initialQuality: 0.8,
    };

    const file = e.currentTarget.files[0];

    if (!file) return;
    try {
      const compressedImage = await imageCompression(file, options);

      setPreviewImage(URL.createObjectURL(compressedImage));

      formik.setFieldValue("image", compressedImage);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex w-full min-h-screen py-8 justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-1/2 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md ring ring-stone-950 focus:outline-none pl-2 py-2"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-600">{formik.errors.email}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md ring ring-stone-950 focus:outline-none pl-2 py-2"
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-600">{formik.errors.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input
            name="userName"
            type="text"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md ring ring-stone-950 focus:outline-none pl-2 py-2"
          />
          {formik.touched.userName && formik.errors.userName && (
            <span className="text-red-600">{formik.errors.userName}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md ring ring-stone-950 focus:outline-none pl-2 py-2"
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className="text-red-600">{formik.errors.phone}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md ring ring-stone-950 focus:outline-none pl-2 py-2"
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-600">{formik.errors.password}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-md ring ring-stone-950 focus:outline-none pl-2 py-2"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <span className="text-red-600">
              {formik.errors.confirmPassword}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label>Profile Picture</label>
          <input
            id="images"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            onBlur={formik.handleBlur}
            className="hidden"
          />
          <label
            type="button"
            htmlFor="images"
            className="w-fit cursor-pointer rounded-md bg-stone-900 px-4 py-2 text-white hover:bg-stone-600"
          >
            Choose Image
          </label>
          {formik.touched.image && formik.errors.image && (
            <span className="text-red-600">{formik.errors.image}</span>
          )}
        </div>
        {previewImage && (
          <div className="flex flex-col gap-2 rounded-xl relative">
            <button
              type="button"
              className="absolute top-2 right-2 z-9999 cursor-pointer"
              onClick={() => setPreviewImage(null)}
            >
              <X size={35} className="text-white" />
            </button>
            <img
              src={previewImage}
              alt="uploaded image"
              className="rounded-xl"
            />
          </div>
        )}
        <div className="w-full flex justify-between items-center">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="px-4 py-2 rounded-xl bg-blue-900 disabled:bg-blue-500 cursor-pointer"
          >
            Submit
          </button>
          <button
            type="reset"
            disabled={formik.isSubmitting}
            onClick={() => {
              formik.resetForm();
              setPreviewImage(null);
            }}
            className="px-6 py-2 rounded-xl bg-blue-900 disabled:bg-blue-500 cursor-pointer"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
