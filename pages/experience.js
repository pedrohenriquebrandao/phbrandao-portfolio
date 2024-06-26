import Image from "next/image";
import { FaJava } from "react-icons/fa";
import { SiCss3, SiDocker, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNodedotjs, SiPhp, SiPython, SiReact, SiVuedotjs } from "react-icons/si";
import { Element } from "react-scroll";
import ReactTooltip from 'react-tooltip';
import website1 from "../public/images/brandaoetanan.png";

function Experience() {
	return (
		<div>
			<Element id="Experience" name="Experience">
				<div>
					<div className="w-full my-20 h-auto flex flex-col justify-center items-center">
						<p className="text-sm uppercase text-gray-400">My experience and my stack</p>
						<h1 className="text-indigo-400 text-5xl font-bold text-center">
							Technologies
						</h1>
						<div className="p-5 mt-10">
							<a href="https://github.com/pedrohenriquebrandao" className="flex items-start mb-4">
								<img className="w-full" src="https://github-readme-stats.vercel.app/api?username=pedrohenriquebrandao&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" />
							</a>
							<a href="https://github.com/pedrohenriquebrandao" className="flex items-start">
								<img className="w-full" src="https://github-readme-stats.vercel.app/api/top-langs/?username=pedrohenriquebrandao&layout=compact&langs_count=7&theme=tokyonight" />
							</a>
						</div>

						<div className="grid grid-rows-3 grid-flow-col gap-2 justify-between text-center mx-20 my-10 md:gap-10">
							<div data-for='html5-tooltip' data-tip='HTML5' className="flex justify-center items-center cursor-pointer" >
								<SiHtml5 className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='html5-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='css3-tooltip' data-tip='CSS3' className="flex justify-center items-center cursor-pointer">
								<SiCss3 className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='css3-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='javascript-tooltip' data-tip='Javascript' className="flex justify-center items-center cursor-pointer">
								<SiJavascript className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='javascript-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='java-tooltip' data-tip='Java' className="flex justify-center items-center cursor-pointer">
								<FaJava className="md:w-20 md:h-20 w-16 h-16  text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='java-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='php-tooltip' data-tip='PHP' className="flex justify-center items-center cursor-pointer">
								<SiPhp className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='php-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='python-tooltip' data-tip='Python' className="flex justify-center items-center cursor-pointer">
								<SiPython className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='python-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='react-tooltip' data-tip='React' className="flex justify-center items-center cursor-pointer">
								<SiReact className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='react-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='laravel-tooltip' data-tip='Laravel' className="flex justify-center items-center cursor-pointer">
								<SiLaravel className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='laravel-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='nodejs-tooltip' data-tip='Node.js' className="flex justify-center items-center cursor-pointer">
								<SiNodedotjs className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='nodejs-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='mysql-tooltip' data-tip='MySQL' className="flex justify-center items-center cursor-pointer">
								<SiMysql className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='mysql-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='docker-tooltip' data-tip='Docker' className="flex justify-center items-center cursor-pointer">
								<SiDocker className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='docker-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />

							<div data-for='vue-tooltip' data-tip='Vue.js' className="flex justify-center items-center cursor-pointer">
								<SiVuedotjs className="md:w-20 md:h-20 w-16 h-16 text-gray-400 md:m-3 p-1 hover:text-black" />
							</div>
							<ReactTooltip id='vue-tooltip' textColor='white' backgroundColor='#4f46e5' place="bottom" />
						</div>
					</div>
				</div>
			</Element>
			<Element id="Portfolio" name="Portfolio">
				<div className="w-full my-10 h-auto flex flex-col justify-center items-center">
					<p className="text-sm uppercase text-gray-400">Some of my projects</p>
					<h1 className="text-indigo-400 text-5xl font-bold text-center">
						Portfolio
					</h1>
				</div>
				<div className="w-full p-8">
					<div className="w-full flex gap-4 overflow-x-auto border border-indigo-400 p-8">
						<div>
							<p className="text-xl text-gray-400 pb-2">
								Brandão & Tanan Advocacia
							</p>
							<div className="">
								<a href="https://www.brandaoetanan.com.br/" target="_blank" rel="noreferrer">
									<Image
										src={website1}
										alt="Brandão & Tanan"	
									/>
								</a>
							</div>
						</div>
						{/* <div>
							<p className="text-xl text-gray-400">
								Buscador de Repositórios do GitHub
							</p>
							<div className="border border-indigo-400">
								<a href="https://pedrohenriquebrandao.github.io/gh-repos/" target="_blank" rel="noreferrer">
									<Image
										src={website2}
										alt="GH Repos"

									/>
								</a>
							</div>
						</div> */}
					</div>
				</div>
			</Element>
		</div>
	);
}

export default Experience;
