import {FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate()
    return(
<div className="h-screen flex flex-col ">

 
  <header className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 py-4 border-b-2 border-[#eeeeee]">
   
    <div className="cursor-pointer  material-symbols-outlined" style={{fontSize:"28px"}}>
      menu
    </div>

   
    <div className=" font-light text-zinc-500 gap-5  material-symbols-outlined" style={{fontSize:"27px", display:"flex",alignItems:"center"}}>
      <span className="cursor-pointer">notifications</span>
      <FaUser className="text-[22px] cursor-pointer"/>
    </div>

    
  </header>



  <div className="flex flex-1 overflow-hidden  ">

  
<aside className="w-[280px] bg-[#ececec] flex-shrink-0 flex flex-col justify-between p-5 max-[800px]:hidden">

  
  <div>
    
    <div className="flex items-center gap-3 mb-8">
      <span className="material-symbols-outlined bg-black text-white p-2 rounded-sm ">
        shield_person
      </span>

      <div>
        <h2 className="text-sm font-semibold text-black">Super Admin</h2>
        <p className="text-xs text-gray-600">Global Console</p>
      </div>
    </div>

    
<ul className="flex flex-col gap-3">

  
  <li>
    <div className="flex items-center gap-3 bg-white px-4 py-[10px] rounded-sm -mx-2">
      <span className="material-symbols-outlined opacity-90" style={{ fontSize: "21px" }}>
        dashboard
      </span>
      <span className="text-sm font-medium text-black/80">
        Dashboard
      </span>
    </div>
  </li>

  
  <li className="flex items-center gap-3 text-sm text-black/65  cursor-pointer px-2 py-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      corporate_fare
    </span>
    Institutions
  </li>

  <li className="flex items-center gap-3 text-sm text-black/65 cursor-pointer px-2 py-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      subscriptions
    </span>
    Plans
  </li>

  <li className="flex items-center gap-3 text-sm text-black/65 cursor-pointer px-2 py-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      history_edu
    </span>
    Logs
  </li>

  <li className="flex items-center gap-3 text-sm text-black/65 cursor-pointer px-2 py-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      settings
    </span>
    Settings
  </li>

</ul>
  </div>

  
  <div className="border-t-2 border-[#e4e4e4] pt-4">
    <p className="text-[11px] text-gray-500 mb-2 font-medium">SYSTEM STATUS</p>

    <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
      <span className="text-xs text-gray-600">All systems operational</span>
    </div>
  </div>

</aside>

   
  <main className="flex-1 overflow-y-auto p-6 ">

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-3 lg:gap-0">

  
  <div>
    <h1 className="text-md font-semibold text-black">
      Good morning, Admin
    </h1>
    <p className="text-[13px] text-gray-600 mt-1">
      Here's what's happening across your 142 institutions today.
    </p>
  </div>

<div className="flex flex-row flex-wrap gap-2 items-center">
  
  <button className="flex items-center gap-2 border-2 border-[#dddddd] cursor-pointer px-3 py-[6px] text-[13px] rounded-md hover:bg-gray-100 transition">
    <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
      download
    </span>
    Export Report
  </button>

  
  <button className="flex items-center gap-2 bg-black cursor-pointer text-white px-3 py-[6px] text-[13px] rounded-md hover:bg-gray-700 transition" onClick={()=> navigate("/super-admin/institutions-mng")}>
    <span className="material-symbols-outlined" style={{ fontSize: "16px" }} >
      add
    </span>
    New Institution
  </button>
</div>

</div>

 <div className="grid  grid-cols-4 max-[1023px]:grid-cols-2 max-[450px]:grid-cols-1 gap-4">

 <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between max-[1023px]:h-[155px] h-[165px] shadow-sm hover:shadow-md transition-shadow">
        <div>
          <h2 className="text-[26px] font-semibold text-[#1a1c1c] leading-none">142</h2>
          <p className="text-[12px] font-semibold text-gray-500 mt-3 tracking-wider uppercase">Total Institutions</p>
        </div>
        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full w-fit">
          <span className="material-symbols-outlined " style={{fontSize:"17px"}}>trending_up</span>
          <span className="text-[12px] font-bold">4%</span>
        </div>
      </div>
  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between max-[1023px]:h-[155px] h-[165px] shadow-sm hover:shadow-md transition-shadow">
        <div>
          <h2 className="text-[26px] font-semibold text-[#1a1c1c] leading-none">128</h2>
          <p className="text-[12px] font-semibold text-gray-500 mt-3 tracking-wider uppercase">Active This Month</p>
        </div>
        <div className="bg-gray-100 text-gray-500 px-[10px]  rounded-full w-fit">
          <span className="text-[13px] font-semibold text-gray-400 " >90.1% rate</span>
        </div>
      </div>
  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between max-[1023px]:h-[155px] h-[165px] shadow-sm hover:shadow-md transition-shadow">
        <div>
          <h2 className="text-[26px] font-semibold text-[#1a1c1c] leading-none">48,203</h2>
          <p className="text-[12px] font-semibold text-gray-500 mt-3 tracking-wider uppercase">Total Students</p>
        </div>
     <div className="flex items-center gap-1 bg-green-50 text-green-600 px-[10px] py-1 rounded-full w-fit">
  <span className="flex items-center gap-1 text-[12px] font-bold">
    <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
      add
    </span>
    1.2k new
  </span>
</div>
      </div>

      
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between max-[1023px]:h-[155px] h-[165px] shadow-sm hover:shadow-md transition-shadow">
        <div>
          <h2 className="text-[26px] font-semibold text-[#1a1c1c] leading-none">₹1.2M</h2>
          <p className="text-[12px] font-semibold text-gray-500 mt-3 tracking-wider uppercase">Revenue</p>
        </div>
        <div className="flex items-center gap-[6px] bg-green-50 text-green-600 px-[10px] py-[1px]  rounded-full w-fit border border-green-100">
          <span className="material-symbols-outlined text-[16px]" style={{fontSize:"16px"}}>payments</span>
          <span className="text-[12px] font-bold">On track</span>
        </div>
      </div>

</div>
<div>

  
  <div className="flex items-center justify-between mt-12">
    <h2 className="text-[17px] font-medium text-[#000000ed]">
      Recent Institutions
    </h2>

    <span className="text-[13px] font-medium text-gray-500 cursor-pointer hover:text-black transition">
      VIEW ALL
    </span>
  </div>

  <div className="border-b border-gray-200 mt-4"></div>

</div>

<div className="bg-white border border-[#ececec]  rounded-lg sm:mb-2 mb-18 mt-6 overflow-hidden ">

  <div className="overflow-x-auto max-[520px]:overflow-x-auto custom-scroll ">

    <table className="min-w-[600px] w-full">

    
      <thead className="bg-[#f9f9f8]">
        <tr className="text-left text-[12px]  text-gray-500 uppercase tracking-wider">
          <th className="py-5 px-6">Institution Name</th>
          <th className="py-3 px-3">Type</th>
          <th className="py-3 px-3">Plan</th>
          <th className="py-3 px-3">Status</th>
        </tr>
      </thead>

  
      <tbody className="text-sm text-gray-800">

       
        <tr className="border-b-2 border-gray-100 hover:bg-gray-50 transition cursor-pointer">
          <td className="py-4 px-3 flex items-center gap-3 font-semibold">
            <div className="w-9 h-9 bg-gray-100 rounded-sm flex items-center justify-center text-xs font-semibold text-gray-500">
              XA
            </div>
            St. Xavier's Academy
          </td>

          <td className="py-4 px-2 ">
            <span className="bg-gray-100 text-gray-600 font-semibold text-xs px-2 py-1 rounded">
              School
            </span>
          </td>

          <td className="py-4 px-3">
            <span className="border-[#e1e1e1] border-2 text-xs px-2 py-1 rounded">
              Pro
            </span>
          </td>

          <td className="py-4 px-3 flex items-center gap-2 text-gray-800">
            Active
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </td>
        </tr>

      
        <tr className="border-b-2 border-gray-100 hover:bg-gray-50 transition cursor-pointer">
          <td className="py-4 px-3 flex items-center gap-3 font-semibold">
            <div className="w-9 h-9 bg-gray-100 rounded-sm flex items-center justify-center text-xs font-semibold text-gray-500">
              GC
            </div>
            Greenwood College
          </td>

          <td className="py-4 px-2">
            <span className="bg-gray-100  font-semibold text-gray-600 text-xs px-2 py-1 rounded">
              College
            </span>
          </td>

          <td className="py-4 px-3">
            <span className=" text-xs px-2 py-1 border-[#e1e1e1] border-2 rounded">
              Pro
            </span>
          </td>

          <td className="py-4 px-3 flex items-center gap-2 text-gray-800">
            Active
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </td>
        </tr>

    
        <tr className="border-b-2 border-gray-100 hover:bg-gray-50 transition cursor-pointer">
          <td className="py-4 px-3 flex items-center gap-3 font-semibold">
            <div className="w-9 h-9 bg-gray-100 rounded-sm flex items-center justify-center text-xs font-semibold text-gray-500">
              PS
            </div>
            Peakside Primary
          </td>

          <td className="py-4 px-2">
            <span className="bg-gray-100 text-gray-600 font-semibold text-xs px-2 py-1 rounded">
              School
            </span>
          </td>

          <td className="py-4 px-3">
            <span className="text-xs  bg-gray-100 text-gray-400  text-xs px-2 py-1 rounded">
              Free
            </span>
          </td>

          <td className="py-4 px-3 flex items-center text-gray-800 gap-2">
            Maintenance
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          </td>
        </tr>

   
        <tr className="hover:bg-gray-50 transition cursor-pointer">
          <td className="py-4 px-3 flex items-center gap-3 font-semibold">
            <div className="w-9 h-9 bg-gray-100 rounded-sm flex items-center justify-center text-xs font-semibold text-gray-500">
              VI
            </div>
            Vanguard Institute
          </td>

          <td className="py-4 px-2">
            <span className="bg-gray-100 text-gray-600 font-semibold text-xs px-2 py-1 rounded">
              College
            </span>
          </td>

          <td className="py-4 px-3">
            <span className="border-[#e1e1e1] border-2 text-xs px-2 py-1 rounded">
              Pro
            </span>
          </td>

          <td className="py-4 px-3 flex text-gray-800 items-center gap-2">
            Active
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>

</main>

  </div>
   <div className="footer-navbar flex sm:hidden fixed bottom-0 left-0 w-full bg-white ">
          <ul className="footer-menu flex justify-around items-center py-3 max-[350px]:py-2  w-full">
            <li className="flex flex-col items-center text-[#151515]  from-white to-[#f1f1f1]">
                 <span className="material-symbols-outlined opacity-90" style={{ fontSize: "21px" }}>
        dashboard
      </span>
              <span className="text-xs font-medium max-[350px]:text-[11px] ">HOME</span>
            </li>
  
            <li className="flex flex-col items-center text-gray-500 ">
              <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      corporate_fare
    </span>
              <span className="text-xs max-[350px]:text-[11px] font-medium">UNITS</span>
            </li>
  
            <li className="flex flex-col items-center text-gray-500 ">
                <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      subscriptions
    </span>
              <span className="text-xs max-[350px]:text-[11px] font-medium">PLANS</span>
            </li>
  
            <li className="flex flex-col items-center text-gray-500 ">
                 <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      history_edu
    </span>
              <span className="text-xs max-[350px]:text-[11px] font-medium">LOGS</span>
            </li>
                       <li className="flex flex-col items-center text-gray-500 ">
  <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      settings
    </span>
              <span className="text-xs max-[350px]:text-[11px] font-medium">SET</span>
            </li>
          </ul>
        </div>

</div>
    )
}
export default Dashboard