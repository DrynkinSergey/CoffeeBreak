import { useState } from 'react'
export const App = () => {
	const [from, setFrom] = useState<string | null>('11:00')
	const [to, setTo] = useState<string | null>('11:30')
	return (
		<div className="italic bg-[url('./assets/bg.jpg')] h-screen bg-cover flex justify-start items-center">
			<div className='ml-10  border-4 rounded-2xl p-10 bg-white/50  '>
				<h1 className='text-black text-5xl font-bold'>
					We have a coffee break
				</h1>
				<div className='text-black/90 text-3xl font-bold'>
					<h2
						onClick={() => setFrom(prompt('Enter time from:', '11:00') || from)}
					>
						From: <span>{from}</span>
					</h2>
					<h2 onClick={() => setTo(prompt('Enter time to:', '11:30') || to)}>
						To: <span>{to}</span>
					</h2>
				</div>
			</div>
		</div>
	)
}
