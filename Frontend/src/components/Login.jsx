import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg text-center">Login</h3>
              <div className="mt-4 space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 rounded-md outline-none py-1 border"
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 rounded-md outline-none py-1 border"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-pink-600 text-white rounded-md px-3 py-2 hover:bg-pink-800 duration-200"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-4">
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer hover:bg-pink-300 duration-300"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
