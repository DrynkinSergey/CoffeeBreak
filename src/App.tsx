import { FC, useState } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
type Props = {
  setIsStartBreak: (p: boolean) => void;
};
const Completionist: FC<Props> = ({ setIsStartBreak }) => {
  return (
    <button
      className='border-4 px-4 py-2 my-2 rounded-md border-black hover:bg-black hover:text-white transition-all duration-300'
      onClick={() => setIsStartBreak(true)}
    >
      Start break
    </button>
  );
};
export const App = () => {
  const renderer = ({ minutes, seconds, completed }: { minutes: number; seconds: number; completed: boolean }) => {
    if (completed) {
      return <Completionist setIsStartBreak={setIsStartBreak} />;
    } else {
      return minutes >= 10 ? (
        <h1 className=' glitch-text text-green-700 text-6xl'>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </h1>
      ) : (
        <h1 className='glitch-text text-red-700 text-6xl'>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </h1>
      );
    }
  };
  const [isStartBreak, setIsStartBreak] = useState(false);
  const [time, setTime] = useState('30');

  return (
    <div>
      <div className='relative h-screen flex justify-start items-center'>
        <video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover'>
          <source src='/bg.mp4' type='video/mp4' />
        </video>
        <div className='absolute top-[28%] left-[20%] z-10 '>
          <div className='ml-10  border-4 rounded-2xl p-10 backdrop-blur-sm bg-white/10 border-orange-900 shadow-orange-800 shadow-lg  '>
            <h1 onClick={() => setTime(prompt('Enter time:') ?? '30')} className='glitch-text text-white text-2xl font-bold' data-text='Coffee time'>
              Coffee time
            </h1>
            <div className='text-white/90 text-1xl font-bold'>
              {!isStartBreak && <Completionist setIsStartBreak={setIsStartBreak} />}
              {isStartBreak && (
                <Countdown date={Date.now() + +time * 60 * 1000} precision={3} renderer={renderer}>
                  <h1 className='glitch-text'>Go ahead!!</h1>
                </Countdown>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
