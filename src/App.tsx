import { FC, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
type Props = {
	setIsStartBreak: (p: boolean) => void
}
const Completionist: FC<Props> = ({ setIsStartBreak }) => {
	return (
		<button
			className='border-4 px-4 py-2 my-2 rounded-md border-black hover:bg-black hover:text-white transition-all duration-300'
			onClick={() => setIsStartBreak(true)}
		>
			Start break
		</button>
	)
}
export const App = () => {
	const renderer = ({ minutes, seconds, completed }: { minutes: number; seconds: number; completed: boolean }) => {
		if (completed) {
			return <Completionist setIsStartBreak={setIsStartBreak} />
		} else {
			return minutes >= 10 ? (
				<span className='text-green-700 text-6xl'>
					{zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
			) : (
				<span className='text-red-700 text-6xl'>
					{zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
			)
		}
	}
	const [isStartBreak, setIsStartBreak] = useState(false)
	const [time, setTime] = useState('30')

	return (
		<div className="italic bg-[url('./assets/bg.jpg')] h-screen bg-cover flex justify-start items-center">
			<div className='ml-10  border-4 rounded-2xl p-10 bg-white/50  '>
				<h1 onClick={() => setTime(prompt('Enter time:') ?? '30')} className='text-black text-5xl font-bold'>
					We have a coffee break
				</h1>
				<div className='text-black/90 text-3xl font-bold'>
					{!isStartBreak && <Completionist setIsStartBreak={setIsStartBreak} />}
					{isStartBreak && (
						<Countdown date={Date.now() + +time * 60 * 1000} precision={3} renderer={renderer}>
							<h1>Go ahead!!</h1>
						</Countdown>
					)}
				</div>
			</div>
		</div>
	)
}
