import React from 'react';
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';
import AppMenu from './AppMenu';

const AppTopbar = (props) => {

    const onInputKeydown = (event) => {
        const key = event.which;

        //escape, tab and enter
        if (key === 27 || key === 9 || key === 13) {
            if (props.searchActive)
                props.onTopbarSearchToggle()
        }
    }

    return (
        <div className="layout-topbar">
            <div className="layout-topbar-wrapper">
                <div className="layout-topbar-left">
                    <button tabIndex="0" className="menu-button p-link" onClick={props.onMenuButtonClick}>
                        <i className="pi pi-bars"></i>
                    </button>
                    <button tabIndex="0" id="logo-link" className="layout-topbar-logo p-link">
                        <img src={`assets/layout/images/logo-${props.topbarScheme === 'dark' ? 'freya-white' : 'freya'}.svg`} alt="freya-layout" />
                    </button>
                </div>

                <AppMenu menuMode={props.menuMode} sidebarActive={props.sidebarActive} sidebarStatic={props.sidebarStatic} model={props.menu} menuActive={props.menuActive} onRootMenuItemClick={props.onRootMenuItemClick}
                    onMobileMenuActive={props.onMobileMenuActive} onMenuItemClick={props.onMenuItemClick} onSidebarMouseOver={props.onSidebarMouseOver} onSidebarMouseLeave={props.onSidebarMouseLeave}
                    onToggleMenu={props.onToggleMenu} resetActiveIndex={props.resetActiveIndex} onMenuClick={props.onMenuClick}

                />

                <div className="layout-topbar-right">
                    <ul className="layout-topbar-actions">
                        <li className={classNames('topbar-item search-item', { 'active-topmenuitem': props.searchActive })}>
                            <a tabIndex="0" onClick={props.onTopbarSearchToggle}>
                                <i className="topbar-icon pi pi-search"></i>
                            </a>

                            <div className="search-input-wrapper" onClick={props.onTopbarSearchClick}>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText type="text" placeholder="Search..." onKeyDown={onInputKeydown} />
                                </span>
                            </div>

                            <ul className="fadeInDown">
                                <div className="search-input-wrapper p-fluid" style={{ width: '100%' }} onClick={props.onTopbarSearchClick} >
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search"></i>
                                        <InputText type="text" placeholder="Search..." onKeyDown={onInputKeydown} />
                                    </span>
                                </div>
                            </ul>
                        </li>

                        <li className={classNames('topbar-item user-profile', { 'active-topmenuitem fadeInDown': props.topbarUserMenuActive })}>
                            <a onClick={props.onTopbarUserMenuClick}>
                                <img src="assets/layout/images/avatar-profilemenu.png" alt="freya-layout" />
                            </a>
                            <ul className="fadeInDown">
                                <li>
                                    <a href="#">
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Messages</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Notifications</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <a tabIndex="0" className="layout-rightpanel-button" onClick={props.onRightPanelButtonClick}>
                        <i className="pi pi-arrow-left"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AppTopbar;