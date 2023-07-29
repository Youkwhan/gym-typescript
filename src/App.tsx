// In our tsconfig, we made @ our absolute path to our src directory
import Navbar from "@/scenes/navbar"

function App() {
	return (
		<>
			<div className="app bg-gray-20">
				<Navbar />
			</div>
		</>
	)
}

export default App
