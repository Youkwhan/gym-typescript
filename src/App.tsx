// In our tsconfig, we made @ our absolute path to our src directory
import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import OurClasses from "@/scenes/ourClasses"
import Benefits from "@/scenes/benefits"
import { useState, useEffect } from "react"
import { SelectedPage } from "@/shared/types"

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	)
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true)
				setSelectedPage(SelectedPage.Home)
			}
			if (window.scrollY != 0) {
				setIsTopOfPage(false)
			}
		}
		window.addEventListener("scroll", handleScroll)

		// When component unmounts
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="app bg-gray-20">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<OurClasses setSelectedPage={setSelectedPage} />
		</div>
	)
}

export default App
