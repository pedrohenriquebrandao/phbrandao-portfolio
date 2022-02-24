import { SiHtml5} from "react-icons/si";
import { SiCss3} from "react-icons/si";
import { SiJavascript} from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { Element } from "react-scroll";

function clients() {
	return (
		<Element id="Clients" name="Clients">
			<div>
				<div className="w-full my-20 h-auto flex flex-col justify-center items-center">
					<p className="text-sm uppercase text-gray-400">Minha experiência</p>
					<h1 className="text-indigo-500 text-6xl font-bold text-center">
						Tecnologias
					</h1>
					
					<div className="grid grid-rows-2 grid-flow-col gap-4 justify-between text-center mx-20 my-10 md:gap-10 gap-2">
						<div title="This is my tooltip" className="flex justify-center items-center cursor-pointer" >
							<SiHtml5 className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiCss3 className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiJavascript className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiJava className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiPhp className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiPython className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiReact className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiLaravel className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiNodedotjs className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<SiMysql className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default clients;
