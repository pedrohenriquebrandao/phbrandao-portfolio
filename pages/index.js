import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "./homePage";
import Experience from "./experience";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className={"container", styles.fonts, "bg-gray-800"}>
			<Head>
				<title>Pedro Brandão</title>
				<meta name="description" content="Pedro Brandão fullstack developer dev vercel" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar />
			<HomePage />
			<Experience/>
			<Footer />
		</div>
	);
}
