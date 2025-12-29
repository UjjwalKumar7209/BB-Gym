import Navbar from "./Navbar";

export default function adminPage() {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-[87.25vh] text-white p-3">
        <div className="card p-3 bg-[#ccfd06] text-black inline-flex flex-col gap-2 m-3">
          <p>Name: Ujjwal Kumar</p>
          <p>Age: 19</p>
          <p>email: u@gmail.com</p>
          <button className="bg-red-500 m-auto px-3 py-1 rounded-md">Delete</button>
        </div>
        <div className="card p-3 bg-[#ccfd06] text-black inline-flex flex-col gap-2 m-3">
          <p>Name: Ujjwal Kumar</p>
          <p>Age: 19</p>
          <p>email: u@gmail.com</p>
          <button className="bg-red-500 m-auto px-3 py-1 rounded-md">Delete</button>
        </div>
        <div className="card p-3 bg-[#ccfd06] text-black inline-flex flex-col gap-2 m-3">
          <p>Name: Ujjwal Kumar</p>
          <p>Age: 19</p>
          <p>email: u@gmail.com</p>
          <button className="bg-red-500 m-auto px-3 py-1 rounded-md">Delete</button>
        </div>
      </div>
    </>
  );
}
