export default {};

/* =========================================
                DOM elements
========================================= */

const html_body_tag = document.querySelector('body') as HTMLElement;

const open_main_nav_btn = document.getElementById(
    'open_main_nav_btn'
) as HTMLButtonElement;

const close_main_nav_btn = document.getElementById(
    'close_main_nav_btn'
) as HTMLButtonElement;

const main_nav_menu_div = document.getElementById(
    'main_nav_menu_div'
) as HTMLElement;

const main_nav_menu = document.getElementById('main_nav_menu') as HTMLElement;

/* =========================================
   Toggle Main site navigation on mobile
========================================= */

const toggleMainNav = () => {
    html_body_tag.classList.toggle('main_nav_menu_active');
    main_nav_menu_div.classList.toggle('main_nav_menu_active');
};

open_main_nav_btn && open_main_nav_btn.addEventListener('click', toggleMainNav);

open_main_nav_btn &&
    close_main_nav_btn.addEventListener('click', toggleMainNav);

/* =====================================================
Close Main site navigation when a section tab is click
===================================================== */

// Listen for clicks on the main navigation menu
main_nav_menu &&
    main_nav_menu.addEventListener('click', (event: MouseEvent) => {
        // Get the element that was clicked
        const target = event.target as Element;

        // If the element does not have the data-section-tab attribute, return
        if (target.getAttribute('data-section-tab') !== 'true') return;

        // Remove the active class from the body and main navigation menu
        html_body_tag.classList.remove('main_nav_menu_active');
        main_nav_menu_div.classList.remove('main_nav_menu_active');
    });

/* =========================================
   Toggle Main site submenu on mobile
========================================= */

// This code adds an event listener to the main navigation menu.
// When a user clicks on a button that is a child of an element with the class
// "has_submenu", the code checks if the submenu is open.
// If it's open, the submenu is closed, and vice versa.

main_nav_menu &&
    main_nav_menu.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as Element;

        // find the button that was clicked
        const closest = target.closest('.toggle_submenu_btn');

        // if it's not a button, exit
        if (closest === null) return;

        // get the button, the li it's in, and the submenu
        const submenuBtn = closest as HTMLButtonElement;
        const hasSubmenuLi = submenuBtn.parentNode as HTMLLIElement;
        const submenu = submenuBtn.nextElementSibling as HTMLUListElement;

        // check if the submenu is open
        const isSubmenuOpen: boolean =
            submenuBtn.getAttribute('aria-expanded') === 'true';

        // toggle the open/closed aria attribute
        submenuBtn.setAttribute('aria-expanded', String(!isSubmenuOpen));

        // toggle the active classes
        hasSubmenuLi.classList.toggle('submenu_active');
        submenu.classList.toggle('submenu_active');
    });
