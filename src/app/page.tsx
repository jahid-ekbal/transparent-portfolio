import ToastButton from "@/components/Buttons/ToastButton";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js Starter Fullstack",
	description: "Production grade Fullstack Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<div className="space-y-4 text-center">
				<h1 className="text-5xl font-semibold">Jahid Ekbal Mallick</h1>
				<h2 className="text-3xl">
					Jahid Ekbal: Full-Stack Developer & Digital Creator
				</h2>

				<ToastButton />
			</div>
		</section>
	);
};

export default page;
