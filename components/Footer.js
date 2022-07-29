import { SiNextdotjs } from "react-icons/si";

function Footer() {
	return (
		<div className="w-full h-16 bg-gray-900 flex justify-center items-center">
			<h1 className="text-xl text-indigo-300 mr-2">Made with</h1>{" "}
			<a target="_blank" href="https://nextjs.org" rel="noreferrer">
				<SiNextdotjs size={25} className="text-gray-300 ml-2" />
			</a>
			{/* <h1 className="text-xl text-blue-900 ml-2">
				<a
					href="#"
					className="cursor-pointer font-semibold text-indigo-500 hover:text-black"
				>
					Pedro Brandão
				</a>
			</h1> */}
		</div>
	);
}

export default Footer;
