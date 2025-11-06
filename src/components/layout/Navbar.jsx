import logo from '../../assets/icons/luddev.svg'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className=' mb-1 flex items-center justify-between py-6 border-b border-neutral-400'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 h-5' src={logo} alt="logo de luddev" />
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'>
                <a href='https://github.com/villeg300' target='_blank' rel='noreferrer' aria-label='GitHub'>
                    <FaGithub className=' cursor-pointer hover:text-gray-300' />
                </a>
                <a href='https://www.linkedin.com/in/ludovic-moyenga' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                    <FaLinkedin className=' cursor-pointer hover:text-blue-500' />
                </a>
                <a href='https://web.facebook.com/profile.php?id=100082321161732' target='_blank' rel='noreferrer' aria-label='Facebook'>
                    <FaFacebook className=' cursor-pointer hover:text-blue-600' />
                </a>
            </div>

        </nav>
    )
}

export default Navbar
