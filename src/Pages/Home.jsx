import { Image } from "primereact/image";
import { Button } from 'primereact/button'

// import Fundo from '../assets/Images/fundo_figma.png'
// import Satelite from '../assets/Images/satelite.png'
// import Tempo from '../assets/Images/tempo.png'
// import Registro from '../assets/Images/registro.png'


// import Logo from "../assets/Images/Logo.png";
// import Nome from "../assets/Images/agrohistName.svg";
import { useState } from "react";
// import Card from "../assets/components/Card";

const Home = () => {

const [count, setCount] = useState(20)

return (
    <div className="flex w-full h-full flex-column ">

        <div about="NAVBAR" className="flex w-full justify-content-between flex-column align-items-center ">
            <div className="w-full flex justify-content-between ">

            <div className=" h-6rem flex ">
                <div className="flex m-auto mt-3 ml-4 ">
                    <div className="align-items-start ">
                        {/* <Image src={Logo} alt="Image" width="50" /> */}
                    </div>
                    <div className="align-items-end">
                    </div>
                </div>
            </div>
            <div className=" mt-3 mr-3 gap-1">

            <Button label="Entrar" severity="success" text raised className="mr-3 "/>
            <Button label="Cadastra" severity="success" className="opacity-60" />

            </div>
        </div>

        <div about="Texto do meio" className="mb-7 ">
            <div className="flex flex-column align-items-center">
            <span className="text-6xl " style={{fontWeight:"1000", color:"#259073", textShadow:"1px 1px 2px black"}}>AGROHIST</span>
            <h1 className=" text-4xl mb-7 " style={{fontWeight:"1000", color:"#259073", textShadow:"1px 1px 2px black"}} >UMA OPÇÃO INTEGRADA PARA MELHOR ATENDER O SEU NEGÓCIO</h1>
            </div>

        </div>

        <div className="mb-7"><Button onClick={() => setCount(count => count + 1)} label={`Quem somos ${count}`} severity="success" className="opacity-80 " /></div>
        
        </div>

        <div about="CARDS" className="flex w-full justify-content-evenly">
        </div>

        <div about="Footer" className="w-full h-2rem opacity-70 fixed bottom-0 left-0 " style={{backgroundColor:"#22c55e"}}>
            
        </div>

    </div>
	);
};
export default Home;