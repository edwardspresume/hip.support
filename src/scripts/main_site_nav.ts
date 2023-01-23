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

main_nav_menu &&
    main_nav_menu.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as Element;

        if (target.getAttribute('data-section-tab') !== 'true') return;

        html_body_tag.classList.remove('main_nav_menu_active');
        main_nav_menu_div.classList.remove('main_nav_menu_active');
    });

/* =========================================
   Toggle Main site submenu on mobile
========================================= */

main_nav_menu &&
    main_nav_menu.addEventListener('click', (event) => {
        const target = event.target as Element;

        const closest = target.closest('.toggle_submenu_btn');

        if (closest === null) return;

        const submenu_btn = closest;
        const has_submenu_li = submenu_btn.parentNode as Element;
        const submenu = submenu_btn.nextElementSibling as Element;

        const is_submenu_open: boolean =
            submenu_btn.getAttribute('aria-expanded') === 'true';

        submenu_btn.setAttribute('aria-expanded', String(!is_submenu_open));
        has_submenu_li.classList.toggle('submenu_active');
        submenu.classList.toggle('submenu_active');
    });
