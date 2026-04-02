import {FaUser } from "react-icons/fa";
import { useState } from "react";
import Toggle from "./Toggle";

function InstitutionsMng() {
     const [data, setData] = useState([
    { id: 1, active: true },
    { id: 2, active: true },
    { id: 3, active: false },
  ]);

  const handleToggle = (id) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item
    );
    setData(updated);
  };
    return(
        <div className="h-screen flex flex-col">
           <header className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 py-4 border-b-2 border-[#eeeeee]">
             
<div className="flex items-center max-[400px]:gap-3 gap-4">
<div className="w-8 h-8 rounded-xl bg-surface-container max-[400px]:w-[25px] max-[400px]:h-[25px] max-[400px]:rounded-[8px] flex items-center justify-center overflow-hidden">
<img alt="Logo" data-alt="Scholastic circular minimalist institution logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgoZgG36jLHZ3g9AiLgh69RkOw9qKE_tlzLBsS5Cd13hUrkdMjLblrcSy6z5ck_OXKSYIFD4o5HmxIZHv5Pg8YZjuZs7L-Ohrp2AZ-asNo7dl5dE5P0cdwkP6qW44B7Kgh01uppUkJEAPANdwetjambUhwTSVUARNVSzfgnyUJknIio_P89PWbeeWYPcL-m_8vdzcqRR8GPjnYN8SKc6rX_O6eq3Tgvy39NYSvyazrrh3rHUhLrHoFySn9B7FH1Z0K2CLHOv55rDI"/>
</div>
<h1 className="text-lg font-bold tracking-tighter text-[#18181B] max-[400px]:text-[16px] dark:text-[#FAFAF9]">Scholastic</h1>
</div>
          
             
              <div className=" font-light text-zinc-500 gap-5 max-[400px]:gap-4  material-symbols-outlined" style={{fontSize:"27px", display:"flex",alignItems:"center"}}>
                <span className="cursor-pointer max-[400px]:text-[23px]">notifications</span>
                <FaUser className="text-[22px] cursor-pointer max-[400px]:text-[19px]"/>
              </div>
          
              
            </header>
            <div className="flex flex-1 overflow-hidden  ">
<aside className="w-[280px] bg-[#ececec] flex-shrink-0 flex flex-col max-[750px]:hidden justify-between p-5 max-[800px]:w-[230px]">

  
  <div>
    
    <div className="flex flex-col  gap-1 mb-6">

     <p className="font-medium text-[#8d8d8d] mb-1 text-[11px]">NAVIGATION</p>
        <h2 className="text-sm font-semibold text-black">Institution Admin</h2>
        <p className="text-xs text-gray-500">ID: 2024-001</p>

    </div>

    
<ul className="flex flex-col gap-2">



  
  <li className="flex items-center gap-3 text-sm text-black/65  cursor-pointer px-4 py-[10px] hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 rounded-sm -mx-2">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      Dashboard
    </span>
    Dashboard
  </li>

  <li>
    <div className="flex items-center cursor-pointer gap-3 shadow-sm bg-white px-4 py-2.5 rounded-sm -mx-2  ">
      <span className="material-symbols-outlined opacity-90" style={{ fontSize: "21px" }}>
        corporate_fare
      </span>
      <span className="text-sm font-medium text-black/80">
        Institution
      </span>
    </div>
  </li>

  <li className="flex items-center gap-3 text-sm text-black/65 cursor-pointer px-4 py-[10px] hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 rounded-sm -mx-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      event_available
    </span>
    Atendence
  </li>

  <li className="flex items-center gap-3 text-sm text-black/65 cursor-pointer px-4 py-[10px] hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 rounded-sm -mx-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      account_balance_wallet
    </span>
    Fees
  </li>

  <li className="flex items-center gap-3 text-sm text-black/65 cursor-pointer px-4 py-[10px] hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 rounded-sm -mx-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      description
    </span>
    Exams
  </li>

    <li className="flex items-center gap-3 text-sm text-black/65 cursor-pointer px-4 py-[10px] hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 rounded-sm -mx-2 ">
    <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      settings
    </span>
    Settings
  </li>

</ul>
  </div>

  
</aside>

<main className="flex-1 overflow-y-auto p-6 ">
<div className="flex max-[580px]:flex-col max-[580px]:items-start max-[580px]:gap-3 max-[580px]:mb-8  flex-row items-center justify-between mb-10 gap-8 ">

  
  <div>
    <h1 className="text-xl font-semibold text-black">
      Institutions
    </h1>
    <p className="text-[13.5px] text-gray-600 mt-1">
     Manage educational partners and their platform access.
    </p>
  </div>

<div className="flex flex-row flex-wrap gap-2 items-center">
  

  
  <button className="flex items-center gap-2 bg-black cursor-pointer text-white px-3 py-[8px] text-[13px] rounded-md hover:bg-gray-700 transition" onClick={()=> navigate("/super-admin/institutions-mng")}>
    <span className="material-symbols-outlined" style={{ fontSize: "16px" }} >
      add
    </span>
    Add institution
  </button>
</div>

</div>

<div className="flex max-[580px]:flex-wrap  items-center gap-3">

  {/* Search Bar */}
  <div className="flex items-center bg-[#f5f5f5] border border-[#e5e5e5] rounded-md px-3 py-2 
w-full max-w-md 
focus-within:border-[#c8c7c7] transition">

  <span className="material-symbols-outlined text-gray-400 text-[20px] mr-2">
    search
  </span>

  <input
    type="text"
    placeholder="Search institutions..."
    className="w-full outline-none text-[15px] text-gray-700 placeholder:text-gray-500 bg-transparent"
  />
</div>

  {/* Type Filter */}
{/* Type Filter */}
<div className="relative bg-white border border-[#e5e5e5] gap-2 px-4 py-2 rounded-md cursor-pointer max-[330px]:w-full shrink-0">
  
   <select className="appearance-none w-full bg-transparent text-sm font-semibold text-gray-600 outline-none cursor-pointer pr-6">
   <option>Type: All</option>
<option>University</option>
<option>K-12 School</option>
<option>Vocational</option>
  </select>

  {/* Custom Arrow */}
  <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-gray-500">
    expand_more
  </span>
</div>

{/* Plan Filter */}
<div className="relative bg-white border border-[#e5e5e5]  px-4 py-2 rounded-md cursor-pointer max-[330px]:w-full shrink-0">
  
  <select className="appearance-none w-full bg-transparent text-sm font-semibold text-gray-600 outline-none cursor-pointer pr-6">
    <option>Plan: All</option>
    <option>Free</option>
    <option>Pro</option>
  </select>

  {/* Custom Arrow */}
  <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-gray-500">
    expand_more
  </span>
</div>

</div>

<div className="bg-white border border-[#ececec]  rounded-lg sm:mb-2 max-[750px]:mb-18 mt-6 overflow-hidden ">

  <div className="overflow-x-auto max-[550px]:overflow-x-auto  ">

    <table className="min-w-[800px] w-full">

    
      <thead className="border-b-2 border-[#f6f6f6]">
        <tr className="text-left text-[12px]  text-gray-500 uppercase tracking-wider">
          <th className="py-5 px-6">NAME & <br />CITY</th>
          <th className="py-3 px-3">TYPE</th>
          <th className="py-3 px-3">ADMIN EMAIL</th>
          <th className="py-3 px-3">STUDENTS</th>
           <th className="py-3 px-3">PLAN</th>
            <th className="py-3 px-3">STATUS</th>
        </tr>
      </thead>

  
      <tbody className="text-sm text-gray-800">

       
        <tr className="border-b-2  border-gray-100 hover:bg-gray-50  transition cursor-pointer">
          <td className="py-4 text-[#3a3a3a] px-6 flex flex-col font-semibold">
            Modern <br />
            Academy <br />
            <span className="text-gray-600 font-light text-[13px] block">Banglore</span>
          </td>

     <td className="py-4 px-2">
  
  <span className="block bg-[#ececec] px-2 py-1 w-fit rounded text-[10px] font-bold uppercase tracking-wider mb-1">
    K-12
  </span>

  <span className="block bg-[#ececec] px-2 py-1 w-fit rounded text-[10px] font-bold uppercase tracking-wider">
    SCHOOL
  </span>

</td>

   <td className="py-4 px-3">
            <span className=" text-[14.5px] text-[#464646]  ">
              admin@modernacademy.in
            </span>
          </td>

            <td className="py-4 px-3">
            <span className=" text-[15.5px] text-[#252525]  ">
              1,240
            </span>
          </td>


          <td className="py-4 px-3">
            <span className="border-[#d9d9d9] bg-[#efefef] border-2 text-xs px-2 py-1 rounded">
              PRO
            </span>
          </td>

<td className="py-4 px-3">

  <Toggle
    isOn={data[0].active}
    onToggle={() => handleToggle(1)}
  />
</td>


          <td className="py-4 px-3">
            <button >
<span className="material-symbols-outlined opacity-70" data-icon="more_vert" >more_vert</span>
</button>
          </td>

    
        </tr>

      
        <tr className="border-b-2 border-gray-100 hover:bg-gray-50 transition cursor-pointer">
          <td className="py-4 px-6 flex flex-col text-[#3a3a3a] font-semibold">
            St.Xavier <br />
            Tech <br />
            <span className="text-gray-600 font-light text-[13px] block">Mumbai</span>
          </td>

          <td className="py-4 px-2">
            <span className=" bg-[#ececec] px-2 py-1 w-fit rounded text-[10px] font-bold uppercase tracking-wider mb-1">
    VOCATIONAL
  </span>
          </td>

          <td className="py-4 px-3">
          <span className=" text-[14.5px] text-[#464646]  ">
              contact@stxavier.edu
            </span>
          </td>

        <td className="py-4 px-3">
            <span className=" text-[15.5px] text-[#252525]  ">
             440
            </span>
          </td>

  <td className="py-4 px-3">
            <span className="border-[#d9d9d9] bg-[#efefef] border-2 text-xs px-2 py-1 rounded">
              FREE
            </span>
          </td>


 <td className="py-4 px-3">
  <Toggle
    isOn={data[1].active}
    onToggle={() => handleToggle(2)}
  />
</td>

       <td className="py-4 px-3">
            <button >
<span className="material-symbols-outlined opacity-70" data-icon="more_vert">more_vert</span>
</button>
          </td>


        </tr>

    
        <tr className="border-b-2 border-gray-100 hover:bg-gray-50 transition cursor-pointer">
          <td className="py-4 text-[#3a3a3a] px-6 flex flex-col font-semibold">
            Global <br />
            Univercity <br />
            <span className="text-gray-600 font-light text-[13px] block">New Delhi</span>
          </td>

          <td className="py-4 px-2">
                  <span className=" bg-[#ececec] px-2 py-1 w-fit rounded text-[10px] font-bold uppercase tracking-wider mb-1">
    UNIVERCITY
  </span>
          </td>

          <td className="py-4 px-3">
           <span className=" text-[14.5px] text-[#464646]  ">
              office@globaluni.org
            </span>
          </td>

            <td className="py-4 px-3">
            <span className=" text-[15.5px] text-[#252525]  ">
             4,890
            </span>
          </td>
  <td className="py-4 px-3">
            <span className="border-[#d9d9d9] bg-[#efefef] border-2 text-xs px-2 py-1 rounded">
              PRO
            </span>
          </td>
  <td className="py-4 px-3">
  <Toggle
    isOn={data[2].active}
    onToggle={() => handleToggle(3)}
  />
</td>

          <td className="py-4 px-3">
            <button >
<span className="material-symbols-outlined opacity-70" data-icon="more_vert">more_vert</span>
</button>
          </td>

        </tr>

  

      </tbody>
    </table>
  </div>
</div>

</main>

            </div>

             <div className="footer-navbar flex min-[750px]:hidden fixed bottom-0 left-0 w-full bg-white ">
          <ul className="footer-menu flex justify-around items-center py-3 max-[350px]:py-2  w-full">
            <li className="flex flex-col items-center text-[#151515]  from-white to-[#f1f1f1]">
                 <span className="material-symbols-outlined opacity-60" style={{ fontSize: "21px" }}>
        grid_view
      </span>
              <span className="text-xs text-gray-500 font-medium max-[350px]:text-[10px] ">HOME</span>
            </li>
  
            <li className="flex flex-col items-center text-gray-900 ">
              <span className="material-symbols-outlined " style={{ fontSize: "21px" }}>
      menu_book
    </span>
              <span className="text-xs max-[350px]:text-[10px] font-medium">ACADEMIC</span>
            </li>
  
            <li className="flex flex-col items-center text-gray-500 ">
                <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      payments
    </span>
              <span className="text-xs max-[350px]:text-[10px] font-medium">FINANCE</span>
            </li>
  
            <li className="flex flex-col items-center text-gray-500 ">
                 <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      group
    </span>
              <span className="text-xs max-[350px]:text-[10px] font-medium">PEOPLE</span>
            </li>
                       <li className="flex flex-col items-center text-gray-500 ">
  <span className="material-symbols-outlined opacity-80" style={{ fontSize: "21px" }}>
      more_horiz
    </span>
              <span className="text-xs max-[350px]:text-[10px] font-medium">MORE</span>
            </li>
          </ul>
        </div>

        </div>
    )
}
export default InstitutionsMng