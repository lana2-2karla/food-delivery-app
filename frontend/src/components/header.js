import menuLogo from '../assets/menu-aberto.png'
import foodLogo from '../assets/prato.png'

function Header () {
  return (
    <nav className="p-5 bg-login-color bgshadow md:flex md:items-center md:justify-between">
    <div className="flex justify-between items-center ">
      <span className="text-2xl font-[Poppins] cursor-pointer">
        <img className="h-20 inline" src={foodLogo}/>
      </span>

      <span className="text-3xl cursor-pointer mx-2 md:hidden block">
      <img className="h-20 inline" src={menuLogo}/>
      </span>
    </div>

    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      <li className="mx-4 my-6 md:my-0">
        <a href="/shops" className="text-lg hover:text-red-700 duration-500">HOME</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="#" className="text-lg  hover:text-red-700 duration-500">ABOUT</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="#" className="text-lg  hover:text-red-700 duration-500">CONTACT</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="#" className="text-lg  hover:text-red-700 duration-500">BLOG</a>
      </li>
    </ul>
  </nav>
  )
}

// <a href="https://www.flaticon.com/br/icones-gratis/prato" title="prato ícones">Prato ícones criados por Freepik - Flaticon</a>

export default Header
