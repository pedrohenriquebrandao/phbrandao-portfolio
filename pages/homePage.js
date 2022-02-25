import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";
import { Element } from "react-scroll";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiSpotify } from "react-icons/si";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex flex-row container content-center text-center md:mx-20 md:pt-40 pt-28">
					<div className="w-96 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-20 mt-10">
						<h1 className="font-bold text-gray-400 text-7xl text-left mb-5">
							Olá, eu sou <span className="text-indigo-500">Pedro</span>
						</h1>
						<p className="text-gray-400 text-2xl text-left mb-5">
							<h1>Desenvolvedor Fullstack</h1>
						</p>
						
						<div className="inline-flex">
						<a target="_blank" href="https://www.instagram.com/pedro.brnd_/" className="flex justify-center items-center cursor-pointer" rel="noreferrer" >
							<SiInstagram size={50} className=" text-gray-400 md:m-3 p-1 hover:text-rose-400" />
						</a>
						<a target="_blank" href="https://www.linkedin.com/in/pedrohenriquebrandao/" className="flex justify-center items-center cursor-pointer" rel="noreferrer">
							<SiLinkedin size={50} className="  text-gray-400 md:m-3 p-1 hover:text-blue-500" />
						</a>
						<a target="_blank" href="https://github.com/pedrohenriquebrandao" className="flex justify-center items-center cursor-pointer" rel="noreferrer">
							<SiGithub size={50} className="  text-gray-400 md:m-3 p-1 hover:text-gray-200" />
						</a>
						<a target="_blank" href="https://open.spotify.com/user/12167099723?si=006361058c934503" className="flex justify-center items-center cursor-pointer" rel="noreferrer">
							<SiSpotify size={50} className="  text-gray-400 md:m-3 p-1 hover:text-green-400" />
						</a>
						</div>
						

						
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
