import Image from 'next/image'
import Arrows from '../assets/Arrow-23.svg'
import vk from '../assets/vk_icon.svg'
import tg from '../assets/tg_icon.svg'
import mail from '../assets/mail_icon.svg'
import exit from '../assets/Arrow-exit.svg'

export default function NavBar() {
  return (
    <nav className="flex justify-between my-2 font-iraTitle text-2xl">
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] relative">
          <Image src={Arrows} alt="Arrows" sizes="50x50" fill />
        </div>
        <div className="mr-5">
          <strong>ХИМИЯ</strong>
        </div>
        <div className="mr-5">ТЕОРИЯ</div>
        <div className="mr-5">ПРАКТИКУМ</div>
        <div>ТЕСТЫ</div>
      </div>
      <div className="flex items-center">
        <div className="w-[45px] h-[40px] relative">
          <Image src={vk} alt="vk icon" sizes="45x40" fill />
        </div>
        <div className="mx-3 w-[40px] h-[40px] relative">
          <Image src={tg} alt="tg icon" sizes="40x40" fill />
        </div>
        <div className="mx-4 w-[53px] h-[40px] relative">
          <Image src={mail} alt="mail icon" sizes="53x40" fill />
        </div>
        <div className="px-4">username</div>
        <div className="w-[50px] h-[50px] relative">
          <Image src={exit} alt="exit" sizes="50x50" fill />
        </div>
      </div>
    </nav>
  )
}
