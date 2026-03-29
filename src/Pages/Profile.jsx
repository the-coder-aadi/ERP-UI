
import { FaTachometerAlt, FaBook, FaChartBar, FaUser, FaCamera, FaArrowLeft, FaEllipsisV  } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
function Profile() {
    return(
<div className="h-screen grid grid-cols-[0.2fr_1fr] 
max-[1250px]:grid-cols-[0.3fr_1fr] 
max-[1130px]:grid-cols-[0.4fr_1fr] 
max-[900px]:grid-cols-[0.4fr_1fr] 
max-[768px]:grid-cols-1">

<div className="hidden max-[768px]:flex items-center justify-between max-[400px]:px-3 max-[400px]:py-5  px-6 py-7 ">


  <div className="flex items-center gap-4">
<FaArrowLeft className="text-xl cursor-pointer" />
    <span className="text-[18px] font-semibold">Profile</span>
  </div>

  <FaEllipsisV className="text-xl opacity-70 cursor-pointer" />

</div>

  <div className="bg-[#f1f1f1] text-black flex flex-col max-[768px]:hidden ">

    <div className="text-[1.5rem] font-bold mt-[26px] mb-[20px] ml-[20px] 
    max-[900px]:mt-[30px] max-[900px]:mb-[15px]">
      Vidya Mono
    </div>

    <ul className="flex flex-col gap-[18px] mt-[20px] ml-[20px] 
    max-[900px]:mt-[15px]">

      <li className="flex gap-[12px] items-center text-[1rem] [will-change:contents] transition-all duration-300  hover:-translate-x-[5px] text-black/55 cursor-pointer px-[10px] py-[8px] rounded-[5px] w-fit transition ">
        <FaTachometerAlt /> Dashboard
      </li>

      <li className="flex gap-[12px] items-center text-[1rem] transition-all duration-300   hover:-translate-x-[5px] text-black/55 cursor-pointer px-[10px] py-[8px] rounded-[5px] w-fit transition ">
        <FaBook /> Academics
      </li>

      <li className="flex gap-[12px] items-center text-[1rem] transition-all duration-300   hover:-translate-x-[5px] text-black/55 cursor-pointer px-[10px] py-[8px] rounded-[5px] w-fit transition ">
        <FaChartBar /> Reports
      </li>

      <li className="flex gap-[12px] items-center text-[1rem] transition-all duration-300   hover:-translate-x-[5px] text-black/200 cursor-pointer px-[10px] py-[8px] rounded-[5px] w-fit transition ">
        <FaUser /> Profile
      </li>

    </ul>
  </div>

  <div className="grid gap-[10px] 
  grid-cols-[minmax(150px,0.5fr)_minmax(200px,1fr)] 
  max-[1130px]:grid-cols-1 
  pb-[60px] md:pb-0">

    <div className="flex items-start p-[20px] max-[1130px]:justify-center">

      <div className="mt-[30px]">

        <div className="w-[160px] h-[160px] max-[768px]:w-[135px] max-[768px]:h-[135px] 
        mx-auto mb-[15px] rounded-[10px] bg-[#e3e3e3] text-black text-[37px] font-bold 
        flex justify-center items-center overflow-hidden 
        shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
          AS
        </div>

        <label className="flex items-center gap-[8px] text-[13.3px] text-black/70 cursor-pointer 
        mt-[26px] mb-[28px] ml-[40px] 
        max-[1130px]:justify-center max-[1130px]:ml-0">
          <FaCamera /> Change Photo
        </label>

        <h2 className="text-[20px] font-medium mt-[24px] mb-[4px] ml-[37px] 
        max-[1130px]:text-center max-[1130px]:ml-0">
          Arjun Sharma
        </h2>

        <p className="text-[12.8px] text-black/70 ml-[37px] 
        max-[1130px]:text-center max-[1130px]:ml-0">
          Student ID: #2024-8812
        </p>

        <p className="text-[12.8px] text-black/70 ml-[37px] 
        max-[1130px]:text-center max-[1130px]:ml-0">
          B.Tech Computer Science • Year 3
        </p>

      </div>
    </div>
<div className="max-w-4xl p-5 md:p-8 mb-4  text-[#4A4A4A] font-sans">
  <section className="mb-10">
    <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">
      Personal Information
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-[12px] font-semibold tracking-wider uppercase text-[#434343db]">Full Name</label>
        <input 
          type="text" 
          defaultValue="Arjun Sharma" 
          className="bg-[#F4F4F4] px-4 py-3  text-[#000000] rounded-sm border-1 border-[#c6c6c67b] focus:ring-1 focus:ring-gray-200 outline-none text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[12px] font-semibold tracking-wider uppercase text-[#434343db]">Email Address</label>
        <input 
          type="email" 
          defaultValue="arjun.sharma@university.edu" 
          className="bg-[#f3f4f3] px-4 py-3 text-[#000000] rounded-sm border-1 border-[#c6c6c67b] focus:ring-1 focus:ring-gray-300 outline-none text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[12px] font-semibold tracking-wider uppercase text-[#434343db]">Phone Number</label>
        <input 
          type="text" 
          defaultValue="+91 98765 43210" 
          className="bg-[#F4F4F4] px-4 py-3 text-[#000000] rounded-sm border-1 border-[#c6c6c67b] focus:ring-1 focus:ring-gray-300 outline-none text-sm"
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label className="text-[12px] font-semibold tracking-wider uppercase text-[#434343db]">Date of Birth</label>
        <div className="relative">
          <input 
            type="text" 
            defaultValue="14 August 2002" 
            
            className="w-full bg-[#EBEBEB] px-4 py-3 text-[#000000] rounded-sm border-1 outline-none  focus:ring-1 focus:ring-gray-300  border-[#c6c6c67b] text-sm  "
          />
    <span className="absolute right-4 top-[50%] -translate-y-1/2 text-gray-400">
      <HiOutlineLockClosed className="h-4 w-4" />
    </span>
        </div>
      </div>
    </div>
  </section>

  <section className="mb-10">
    <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">
      Change Password
    </h2>
    
    <div className="flex flex-col gap-6 max-w-md">
      <div className="flex flex-col gap-2">
        <label className="text-[12px] font-semibold tracking-wider uppercase text-[#434343db]">Current Password</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          className="bg-[#F4F4F4] px-4 py-2.5 text-[#000000]  rounded-sm border-1 border-[#c6c6c67b] focus:ring-1 focus:ring-gray-300 outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[12px] font-semibold tracking-wider uppercase text-[#434343db]">New Password</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          className="bg-[#F4F4F4] px-4 py-2.5 text-[#000000] rounded-sm border-1 border-[#c6c6c67b] focus:ring-1 focus:ring-gray-300 outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[12px] font-semibold tracking-wider uppercase text-[#434343db]">Confirm New Password</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          className="bg-[#F4F4F4] px-4 py-2.5 text-[#000000] rounded-sm border-1 border-[#c6c6c67b] focus:ring-1 focus:ring-gray-300 outline-none"
        />
      </div>
    </div>
  </section>

  <div className="flex justify-end items-center gap-8 mt-12">
    <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors cursor-pointer">
      Cancel
    </button>
    <button className="bg-[#1A1A1A] cursor-pointer text-white px-5 py-2 md:px-9 md:py-3 rounded-sm text-sm font-semibold hover:bg-[#000000c2] transition-all duration-300  hover:-translate-y-[2px]">
      Save Changes
    </button>
  </div>
</div>

          </div>


<div className="footer-navbar flex md:hidden fixed bottom-0 left-0 w-full bg-white ">
  <ul className="footer-menu flex justify-around items-center py-3 max-[350px]:py-2  w-full">
    <li className="flex flex-col items-center text-gray-400 ">
      <FaTachometerAlt className="text-xl mb-1 max-[350px]:text-[17px]" />
      <span className="text-xs max-[350px]:text-[11px]">Dashboard</span>
    </li>

    <li className="flex flex-col items-center text-gray-400 ">
      <FaBook className="text-xl mb-1 max-[350px]:text-[16px]" />
      <span className="text-xs max-[350px]:text-[11px]">Academics</span>
    </li>

    <li className="flex flex-col items-center text-gray-400 ">
      <FaChartBar className="text-xl mb-1 max-[350px]:text-[17px]" />
      <span className="text-xs max-[350px]:text-[11px]">Reports</span>
    </li>

    <li className="flex flex-col items-center text-gray-700 ">
      <FaUser className="text-xl mb-1 max-[350px]:text-[17px]" />
      <span className="text-xs max-[350px]:text-[11px]">Profile</span>
    </li>
  </ul>
</div>
        </div>
    )
}
export default Profile