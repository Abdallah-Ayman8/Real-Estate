import { useFormik } from "formik";
import { formValidationSchema } from "./validation";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideConfirmedPassword,
  hidePassword,
  logIn,
  showConfirmedPassword,
  showPassword,
} from "@/Redux/slices/RealEstate/slicer";
import { useNavigate } from "react-router-dom";
import FormLeftSide from "./FormLeftSide";
// import {
//   deleteData,
//   postData,
//   updateData,
// } from "@/Redux/slices/RealEstate/thunk";

export default function Form() {
  const { showPasswordToUser, showConfirmedPasswordToUser } = useSelector(
    (state) => state.listings,
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
        // dispatch(postData({ data: values }));
        // dispatch(updateData({ url: 215, data: values }));
        // dispatch(deleteData({ id: 215 }));

        formik.resetForm();
        setPreviewImage(null);
        dispatch(logIn());
        navigate("/form/otp", { state: values });
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
    <div className="bg-slate-100 w-full flex justify-center items-center min-h-screen">
      <div className="flex gap-0 p-6 w-full lg:w-fit justify-center items-center">
        <FormLeftSide />
        <form
          onSubmit={formik.handleSubmit}
          className="w-full md:w-[60%] max-w-5xl flex flex-col gap-5 bg-white p-4 rounded-3xl sm:rounded-tl-none sm:rounded-bl-none shadow-2xl"
        >
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Create your account
            </h1>
            <p className="mt-2 text-slate-500">
              Start saving listings and get owner replies fast.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 px-3.5 py-2.5 text-sm placeholder:text-slate-400 text-slate-800"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-600 text-sm">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Abdalla Ayman"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 px-3.5 py-2.5 text-sm placeholder:text-slate-400 text-slate-800"
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-red-600 text-sm">
                  {formik.errors.name}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="username"
              className="text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              id="username"
              name="userName"
              type="text"
              placeholder="Abdalla_Ayman"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 px-3.5 py-2.5 text-sm placeholder:text-slate-400 text-slate-800"
            />
            {formik.touched.userName && formik.errors.userName && (
              <span className="text-red-600 text-sm">
                {formik.errors.userName}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate-700"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+20 100 000 0000"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 px-3.5 py-2.5 text-sm placeholder:text-slate-400 text-slate-800"
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="text-red-600 text-sm">
                {formik.errors.phone}
              </span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-1.5 w-full sm:w-1/2 relative">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={`${showPasswordToUser ? "text" : "password"}`}
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 px-3.5 py-2.5 pr-10 text-sm placeholder:text-slate-400 text-slate-800"
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-600 text-sm">
                  {formik.errors.password}
                </span>
              )}
              {showPasswordToUser ? (
                <button
                  type="button"
                  className="absolute top-9 right-3 cursor-pointer text-slate-400"
                  onClick={() => dispatch(hidePassword())}
                >
                  <Eye className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  className="absolute top-9 right-3 cursor-pointer text-slate-400"
                  onClick={() => dispatch(showPassword())}
                >
                  <EyeOff className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex flex-col gap-1.5 w-full sm:w-1/2 relative">
              <label
                htmlFor="confirm_password"
                className="text-sm font-medium text-slate-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm_password"
                name="confirmPassword"
                type={`${showConfirmedPasswordToUser ? "text" : "password"}`}
                placeholder="••••••••"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 px-3.5 py-2.5 pr-10 text-sm placeholder:text-slate-400 text-slate-800"
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <span className="text-red-600 text-sm">
                    {formik.errors.confirmPassword}
                  </span>
                )}
              {showConfirmedPasswordToUser ? (
                <button
                  type="button"
                  className="absolute top-9 right-3 cursor-pointer text-slate-400"
                  onClick={() => dispatch(hideConfirmedPassword())}
                >
                  <Eye className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  className="absolute top-9 right-3 cursor-pointer text-slate-400"
                  onClick={() => dispatch(showConfirmedPassword())}
                >
                  <EyeOff className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Profile Picture
            </label>
            <input
              id="images"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
              className="hidden"
            />
            <div className="flex justify-between">
              <label
                type="button"
                htmlFor="images"
                className="w-fit flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                Choose Image
              </label>
              {formik.touched.image && formik.errors.image && (
                <span className="text-red-600 text-sm">
                  {formik.errors.image}
                </span>
              )}
              {previewImage && (
                <div className="flex flex-col gap-2 rounded-xl relative">
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 z-9999 cursor-pointer"
                    onClick={() => setPreviewImage(null)}
                  >
                    <X size={16} className="text-red-900" />
                  </button>
                  <img
                    src={previewImage}
                    alt="uploaded image"
                    className="rounded-md w-18"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-4">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 transition text-white font-semibold rounded-xl py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
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
              className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
