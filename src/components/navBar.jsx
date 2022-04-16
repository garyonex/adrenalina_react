import LogoContainer from './logoContainer';
import imagen from './imagenes/adrenalina.png';
import TituloApp from './tituloApp';
import { NavLink } from 'react-router-dom';
import ImagenContainer from './ImagenContainer';

const NavBar = () => {
    return (
        <div className=''>
            <div className='navBar-titulo'>
                <TituloApp
                    titulo={<img className='titulo-header' src={imagen} alt='adrenalina-app' />}
                />
            </div>
            <nav className='navbar container'>
                <div>
                    <NavLink to='/'>
                        <LogoContainer />
                    </NavLink>
                </div>
                <input type='checkbox' id='toggler' />
                <label htmlFor='toggler'>
                    <i className='ri-menu-line'></i>
                </label>
                <div className='menu'>
                    <ul className='menu_list'>
                        <li className='list-item centrar'>
                            <NavLink to='/'>Inicio</NavLink>
                        </li>
                        <li className='list-item  centrar'>
                            <NavLink to='categoria/Romper'>Romper</NavLink>
                        </li>
                        <li className='list-item centrar'>
                            <NavLink to='categoria/Golpear'>Golpear</NavLink>
                        </li>
                        <li className='list-item centrar'>
                            <NavLink to='categoria/Tirar'>Tirar</NavLink>
                        </li>
                    
                        <li className='list-item centrar'>
                            <NavLink to='categoria/Protectores'>
                                Proteccion
                            </NavLink>
                        </li>
                        <li className='list-item'>
                            <button className='botonComprar'>
                                <NavLink to='cart'>
                                    <ImagenContainer />
                                </NavLink>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
