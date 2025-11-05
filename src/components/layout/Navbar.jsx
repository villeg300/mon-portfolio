import logo from '../../assets/icons/luddev.svg'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
function Navbar() {
    return (
        <nav className=' mb-1 flex items-center justify-between py-6 border-b border-neutral-400'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 h-5' src={logo} alt="logo de luddev" />
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'>
                <FaGithub className=' cursor-pointer'/>
                <FaLinkedin className=' cursor-pointer'/>
                <FaFacebook className=' cursor-pointer'/>            
            </div>

        </nav>
    )
}

export default Navbar
