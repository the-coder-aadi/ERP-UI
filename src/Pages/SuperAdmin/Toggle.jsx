function Toggle({ isOn, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-11 h-6 flex items-center rounded-full cursor-pointer p-1 
      ${isOn ? "bg-black" : "bg-gray-300"}`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transform duration-300 transition 
        ${isOn ? "translate-x-5" : "translate-x-0"}`}
      ></div>
    </button>
  );
}

export default Toggle;