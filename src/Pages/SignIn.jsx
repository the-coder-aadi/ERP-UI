import { useNavigate } from "react-router-dom";


function SignIn() {
  let navigate = useNavigate();

  return (

    <div className="flex h-screen items-center justify-center">


      <div className="flex w-[420px] flex-col gap-[28px]  rounded-[8px]  px-[35px] py-[40px] max-[450px]:w-[90vw] max-[450px]:gap-[18px] max-[450px]:px-[20px] max-[450px]:py-[30px]" style={{
        backgroundColor: "#ffffff",
        border: "2px solid rgba(0, 0, 0, 0.07)"
      }}>

        <div className="mb-[16px]">
          <h1 className=" mb-[6px] text-[24px]  text-xl tracking-tight  antialiased font-bold text-[#111]">Vidya Mono</h1>
          <p className="m-0 text-[15px]  text-[#555555e9] ">
            Modern Educational ERP
          </p>
        </div>


        <div className="relative flex flex-col">
          <label htmlFor="institutionId" className="mb-[6px] w-fit text-[14px] font-medium text-[#333]">
            Institution ID or Email
          </label>

          <input
            type="text"
            id="institutionId"
            placeholder="Enter your ID or email"
            className="rounded-[6px]  border border-[#c6c6c6] px-[12px] py-[8px] text-[15px] bg-[#f3f4f3] transition-all duration-300 focus:border-[#00000060] focus:shadow-[0_0_5px_rgba(0,0,0,0.1)] focus:outline-none"
          />
        </div>

        <div className="relative flex flex-col">
          <label htmlFor="password" className="mb-[6px] w-fit text-[14px] font-medium text-[#333]">
            Password
          </label>

          <input
            type="password"
            id="password"
            className="rounded-[6px] border border-[#c6c6c6] px-[12px] py-[8px] text-[15px]  bg-[#f3f4f3] transition-all duration-300 focus:border-[#00000060] focus:shadow-[0_0_5px_rgba(0,0,0,0.1)] focus:outline-none"
          />
          <div className="flex justify-end">
            <p className="mt-[5px] w-fit cursor-pointer text-[12px] font-medium text-black/70 transition-colors duration-200 hover:text-[#0056b3]">
              Forgot Password?
            </p>
          </div>
        </div>

        <button
          className="m-0 cursor-pointer font-bold border-none rounded-[6px] [will-change:contents] bg-[#000] py-[12px] px-0 text-[15px]  text-[#ffffffda]  transition-all duration-300 hover:bg-[#333] hover:-translate-y-[2px]"
          style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}
          onClick={() => navigate("/profile")}
        >
          Sign in
        </button>

        <div className="flex w-full justify-center leading-[23px]">
          <p className=" text-center text-[12.2px] text-[#474747]/60 !tracking-widest ">
            Contact your administrator if you don't have access
          </p>
        </div>

      </div>
    </div>
  );
}

export default SignIn;