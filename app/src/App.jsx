import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-black text-white min-h-screen w-screen min-w-screen h-screen">
        <div className="bg-img relative bg-cover bg-center w-full h-screen flex-shrink-0" style={{
          backgroundImage: "url('background.png')",
          aspectRatio: "1593.37 / 1024"
        }}>
          
          
          <nav className="navbar flex justify-between items-center absolute top-[95px] left-1/2 transform -translate-x-1/2 p-4 w-[601px] h-[61px] flex-shrink-0 rounded-[28px] opacity-60 bg-[#004040]">
            <ul className="flex w-full justify-between">
              <li className="flex-1 text-center"><a href="#">Home</a></li>
              <li className="flex-1 text-center"><a href="#">About</a></li>
              <li className="flex-1 text-center"><a href="#">Contact Us</a></li>
              <li className="flex-1 text-center"><a href="#">Support</a></li>
            </ul>
          </nav>
        </div>
        <div class="grid sm:grid-cols-12 grid-cols-12 bg-black gap-10 items-center px-10 min-h-screen">
        <div class="col-span-5 flex justify-center">
    <img src="globe.png" alt="Globe Image" class="w-[350px] h-auto" />
  </div>
  <div class="col-span-7 flex flex-col justify-center">
    <h2 class="text-white font-cinzel text-6xl font-bold leading-normal pt-10">
      The Shiny Sphere
    </h2>
    <p class="text-white text-right font-raleway text-2xl font-normal leading-normal ">
      Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. 
      Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. 
      Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede. 
      Fibes fydogt fide men låren. Episkap preskapet synlogi mjuta. Mobilvirus förstärkt verklighet var trira.
    </p>
  </div>
 
  <div class="col-span-7 flex flex-col justify-center py-30">
    <h2 class="text-white font-cinzel text-6xl font-bold leading-normal ">
      Green Potion
    </h2>
    <p class="text-white text-right font-raleway text-2xl font-normal leading-normal">
      Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. 
      Sor kvasikilig i trav. Lan kvasilögisk. Pomyligen bissa sede yrar gigasm. Ysade fenade kawaii. Prelig ode, monogt serar. 
      Hoholedes hypomöment medan kartad polågen mikrotiktigt. Dende veganisera är vinas bästsäljerism. Skynka igisk mar om bemeliga lande. Misa trende plalelingar merade dekas. Regt tylåligen eftersom bede. 
      Fibes fydogt fide men låren. Episkap preskapet synlogi mjuta. Mobilvirus förstärkt verklighet var trira.
    </p>
    
  </div>
  <div class="col-span-5 flex justify-center">
    <img src="potion.png" alt="Globe Image" class="w-[350px] h-auto" />
  </div>
</div>
<div class="bg-black opacity-0.4">

</div>
<footer class="bg-black opacity-0.4">
  <div class="grid-cols-12 flex justify-between items-center">
    <div class=" sm:grid-cols-6 grid-cols-2 gap-20 flex justify-center items-center">
      <img class="px-25 " src="logo.png" ></img>
    </div>
    <div class="text-center  mt-6 md:mt-0 sm:grid-cols-6 grid-cols-2">
        <div class="flex items-center gap-2 ">
          <img class=" ml-100" src="map.png"></img>
          
          <p class="text-gray-400 text-sm  ml-2 mr-40">
            Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
          </p>
        </div>
        
      </div>
</div>



</footer>
</div>
     
    </>
  )
}

export default App
