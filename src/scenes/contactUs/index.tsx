import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"

type Props = {
	setSelectedPage: (value: SelectedPage) => void
}

function ContactUs({ setSelectedPage }: Props) {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm()

	const onSubmit = async (e: any) => {
		const isValid = await trigger()
		if (!isValid) {
			e.preventDefault()
		}
	}

	return (
		<section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
			>
				{/* HEADER */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>
						<span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
					</HText>
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in
						cum, explicabo quibusdam voluptas sed accusamus ad. Vel inventore
						quibusdam optio sunt rerum eaque autem!
					</p>
				</motion.div>

				{/* FORM AND IMAGE */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<form
							target="_blank"
							onSubmit={onSubmit}
							action="https://formsubmit.co/Youkwhan@gmail.com"
							method="POST"
						>
                     <input />
                  </form>
					</motion.div>
               <img />
				</div>
			</motion.div>
		</section>
	)
}

export default ContactUs
