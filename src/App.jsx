import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-[#F0F2F5] font-sans">
      
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b">
        <div className="text-[#5D57A3] font-black text-2xl tracking-tight">
          chefitout<span className="text-orange-400">.</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-bold text-gray-500">
          <span className="hover:text-[#5D57A3] cursor-pointer transition">Cafés</span>
          <span className="hover:text-[#5D57A3] cursor-pointer transition">Crowd Map</span>
          <span className="hover:text-[#5D57A3] cursor-pointer transition">Rewards</span>
          <button className="bg-[#EFEEF9] text-[#5D57A3] px-6 py-2 rounded-full hover:bg-[#5D57A3] hover:text-white transition">
            Login
          </button>
        </div>
      </nav>

     
      <div className="flex flex-1 overflow-hidden p-6 gap-6">
        
       
        <aside className="w-56 bg-white border-r p-4 shadow-sm rounded-xl">
          <h2 className="text-[#5D57A3] font-bold text-lg mb-8">Café Admin</h2>
          <p className="bg-[#EFEEF9] text-[#5D57A3] p-2 rounded-lg font-bold text-sm">Dashboard</p>
          <p className="text-gray-400 p-2 text-sm mt-2">Orders</p>
        </aside>

       
        <main className="flex-1 space-y-6 overflow-y-auto">
          
          <header className="bg-[#5D57A3] p-4 rounded-xl shadow text-white font-bold">
            Merchant View
          </header>

         
          <div className="flex gap-4">
            <section className="flex-1 bg-white p-5 rounded-xl border shadow-sm">
              <small className="text-gray-400 block text-[10px] font-bold mb-1">STATUS</small>
              <b className="text-[#584b6e] text-xl">Busy</b>
            </section>
            <section className="flex-1 bg-white p-5 rounded-xl border shadow-sm">
              <small className="text-gray-400 block text-[10px] font-bold mb-1">CONFIDENCE</small>
              <b className="text-xl">83%</b>
            </section>
          </div>

          <div className="flex gap-6">
            <article className="flex-1 bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-bold mb-4">Menu</h3>
              <div className="flex justify-between items-center border-t py-4">
                <span className="font-bold">Maggi</span>
                <span className="bg-green-50 text-green-600 text-[10px] px-3 py-1 rounded-full font-bold">AVAILABLE</span>
                <div className="w-10 h-5 bg-green-500 rounded-full relative">
                   <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </article>

            <aside className="w-64 bg-red-50 border border-red-100 p-5 rounded-xl text-center">
              <b className="bg-[#CBB89D] text-white text-[10px] p-1 px-3 rounded-full block mb-4 uppercase tracking-tighter">Urgent Alert</b>
              <button className="w-full bg-[#5D57A3] text-white p-2 rounded-lg text-xs font-bold mb-2 shadow-md">Photo</button>
              <button className="w-full bg-white border border-[#CBB89D] text-[#CBB89D] p-2 rounded-lg text-xs font-bold">Verify</button>
            </aside>
          </div>

          <button className="w-full bg-[#CBB89D] text-white p-4 rounded-2xl font-bold shadow-lg hover:brightness-95 transition">
            CONFIRM STATUS UPDATE
          </button>

        </main>
      </div>
    </div>
  );
}