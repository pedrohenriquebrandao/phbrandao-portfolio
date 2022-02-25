import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {MdOutlineMail} from "react-icons/md";
import {BsDownload} from "react-icons/bs";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="fixed z-20 bg-gray-900 w-full">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className="ml-8 font-light text-xl cursor-pointer text-gray-400">
								{`<`}Pedro <span className="text-blue-500 font-bold">Brandão{` />`}</span>
								</h1>
							</div>
							
							<div className="flex justify-center items-center flex-shrink-1">
								<div className="cursor-pointer hidden md:block">
								<div className="inline-flex items-center px-3 py-2 mr-1 gap-1 rounded px-4 py-2 leading-5 text-primary-100 ">
								<MdOutlineMail className="text-gray-400" size={25}/> <p className="text-gray-400">phbrandao@outlook.com</p>
								<a target="_blank" href="cv_pedro.pdf" className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 mb-0 ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									<BsDownload className="mr-3" size={20}/>
									<p className="text-sm uppercase text-gray-200">Download CV</p>
								</a>
							</div>
								</div>
								
							</div>
						</div>
						<div className="mr-14 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white w-full"
							>
								<div className="flex-wrap justify-center inline-flex items-center px-4 py-4 gap-1 rounded px-2 py-2 leading-5 text-primary-100 ">
								<MdOutlineMail className="text-gray-400" size={25}/> <p className="text-gray-400">phbrandao@outlook.com</p>
								<a target="_blank" href="cv_pedro.pdf" className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 mb-0 ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									<BsDownload className="mr-2" size={20}/> 
									<p className="text-sm uppercase text-gray-200">Download CV</p>
								</a>
							</div>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;