// In our tsconfig, we made @ our absolute path to our src directory
import Navbar from "@/scenes/navbar"
import { useState } from "react"
import { SelectedPage } from "@/shared/types"

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	)

	return (
		<div className="app bg-gray-20">
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
		</div>
	)
}

export default App
