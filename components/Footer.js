import { AiFillThunderbolt } from "react-icons/ai";

function Footer() {
	return (
		<div className="w-full h-16 bg-gray-900 flex justify-center items-center">
			<h1 className="text-xl text-indigo-300 mr-2">Made by</h1>{" "}
			<AiFillThunderbolt className="text-yellow-300" />
			<h1 className="text-xl text-blue-900 ml-2">
				<a
					href="#"
					className="cursor-pointer font-semibold text-indigo-500 hover:text-black"
				>
					Pedro Brandão
				</a>
			</h1>
		</div>
	);
}

export default Footer;