//@ts-ignore
import React from 'react';

function Menu() {
    return (
        <nav className="fixed top-0 w-full bg-gray-100 dark:bg-gray-900 z-50 shadow-md shadow-gray-800 dark:shadow-gray-200">
            <ul className="flex justify-around">
                <li><a href="#top" className="text-gray-800 dark:text-gray-200">Félix MARQUET</a></li>
                <li><a href="#about" className="text-gray-800 dark:text-gray-200">A propos de moi</a></li>
                <li><a href="#projects" className="text-gray-800 dark:text-gray-200">Mes projets</a></li>
                <li><a href="#cv" className="text-gray-800 dark:text-gray-200">Mon CV</a></li>
            </ul>
        </nav>
    )
}

export default Menu;