import React from 'react';
import AppCodeHighlight from '../AppCodeHighlight';

export const Documentation = () => {

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card docs no-margin">
                    <h4>Current Version</h4>
                    <p>React 17.x and PrimeReact 6.x</p>

                    <h4>Getting Started</h4>
                    <p>Roma is an application template for React, based on the popular <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> that allows
                            creating React apps with no configuration. To get started extract the contents of the zip bundle and install the dependencies
                            with npm or yarn.</p>
<AppCodeHighlight>
{`
"npm install" or "yarn"
`}
</AppCodeHighlight>

                    <p>Next step is running the application using the start script and navigate to <b>http://localhost:3000/</b> to view the application.</p>

<AppCodeHighlight>
{`
"npm start" or "yarn start"
`}
</AppCodeHighlight>
                    <p>That is it, you may now start with the development of your application using the Roma template.</p>

                    <h4>React Scripts</h4>
                    <p>Following commands are derived from create-app-app.</p>
<AppCodeHighlight>
{`
"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
</AppCodeHighlight>

                    <h4>Structure</h4>
                    <p>Roma consists of 3 main parts; the application layout, layout resources and theme resources for PrimeReact components. <b>App.js</b> inside src folder is the main component containing the template for the base layout
                            whereas required resources for the layout are placed inside the <b>public/assets/layout</b> folder and similarly theme resources are inside <b>public/assets/theme</b> folder.
                        </p>

                    <h4>Template</h4>
                    <p>Main layout is the JSX of the App.js, it is divided into a couple of child components such as topbar, profile, menu and footer. Here return of the
                    App.js component that implements the logic such as menu state, layout modes and so on.
                        </p>

<AppCodeHighlight>
{`
<div className={layoutClassName} onClick={onDocumentClick}>
    <AppTopbar topbarMenuActive={topbarMenuActive} activeTopbarItem={activeTopbarItem} inlineUser={inlineUser}
        onRightMenuButtonClick={onRightMenuButtonClick} onMenuButtonClick={onMenuButtonClick}
        onTopbarMenuButtonClick={onTopbarMenuButtonClick} onTopbarItemClick={onTopbarItemClick} />

    <AppRightMenu rightPanelMenuActive={rightPanelMenuActive} onRightMenuClick={onRightMenuClick}></AppRightMenu>

    <div className="layout-menu-container" onClick={onMenuClick}>
        {
            inlineUser && (
                <div className="layout-profile">
                    <button type="button" className="p-link layout-profile-button" onClick={onInlineUserClick}>
                        <img src="assets/layout/images/avatar.png" alt="roma-layout" />
                        <div className="layout-profile-userinfo">
                            <span className="layout-profile-name">Arlene Welch</span>
                            <span className="layout-profile-role">Design Ops</span>
                        </div>
                    </button>
                    <CSSTransition classNames="p-toggleable-content" timeout={inlineUserTimeout} in={inlineUserMenuActive} unmountOnExit>
                        <ul className={classNames('layout-profile-menu', { 'profile-menu-active': inlineUserMenuActive })}>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-user"></i><span>Profile</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-cog"></i><span>Settings</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-envelope"></i><span>Messages</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-bell"></i><span>Notifications</span>
                                </button>
                            </li>
                        </ul>
                    </CSSTransition>
                </div>
            )
        }
        <AppMenu model={menu} onMenuItemClick={onMenuItemClick} onRootMenuItemClick={onRootMenuItemClick} layoutMode={layoutMode} active={menuActive} mobileMenuActive={staticMenuMobileActive} />
    </div>

    <div className="layout-main">
        <div className="layout-content">
            // routers
        </div>

        <AppConfig configActive={configActive} onConfigClick={onConfigClick} onConfigButtonClick={onConfigButtonClick}
            rippleActive={ripple} onRippleChange={onRippleChange} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
            theme={theme} onThemeChange={onThemeChange} topbarColor={topbarColor} onTopbarColorChange={onTopbarColorChange}
            inlineUser={inlineUser} onProfileModeChange={onProfileModeChange} isRTL={isRTL} onOrientationChange={onOrientationChange}
            layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} lightMenu={lightMenu} onMenuColorChange={onMenuColorChange}></AppConfig>

        <AppFooter />
    </div>

    <div className="layout-content-mask"></div>
</div>
`}
</AppCodeHighlight>

                    <h4>Menu</h4>
                    <p>Menu is a separate component defined in <i>AppMenu.js</i> file based on PrimeReact MenuModel API. In order to define the menuitems,
                        navigate to data section of <i>App.js</i> file and define your own model as a nested structure using the menu property.
                        Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.</p>
<div style={{ overflow: 'auto', height: '400px' }}>
<AppCodeHighlight lang="js">
{`
const menu = [

    { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
    {
        label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
        items: [
            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
            { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
            { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/floatlabel' },
            { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button' },
            { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
            { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
            { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
            { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
            { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
            { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
            { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
            { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
            { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
        ]
    },
    {
        label: 'Utilities', icon: 'pi pi-fw pi-globe',
        items: [
            { label: 'Display', icon: 'pi pi-fw pi-desktop', to: '/display' },
            { label: 'Elevation', icon: 'pi pi-fw pi-external-link', to: '/elevation' },
            { label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
            { label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
            { label: 'Widgets', icon: 'pi pi-fw pi-star-o', to: '/widgets' },
            { label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
            { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
            { label: 'Typography', icon: 'pi pi-fw pi-align-center', to: '/typography' },
            { label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' }
        ]
    },
    {
        label: 'Pages', icon: 'pi pi-fw pi-copy',
        items: [
            { label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar' },
            { label: 'Landing', icon: 'pi pi-fw pi-user-plus', command: () => window.open('assets/pages/landing.html', '_blank') },
            { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
            { label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice' },
            { label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help' },
            { label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
            { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-triangle', to: '/notfound' },
            { label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
            { label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty' }

        ]
    },
    {
        label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
        items: [
            {
                label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                items: [
                    {
                        label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                            { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                            { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                            { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                        ]
                    },
                ]
            }
        ]
    },
    {
        label: 'Docs', icon: 'pi pi-fw pi-file', to: '/documentation'
    },
    {
        label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', command: () => window.open('https://www.primefaces.org/store', '_blank')
    }
];
`}
</AppCodeHighlight>
</div>

                    <p>Dependencies of Layout are listed below and needs to be added to package.json. Only required
                            dependency is PrimeReact where optional dependencies exist to enable certain components in PrimeReact.</p>

<AppCodeHighlight lang="js">
{`
"primereact": "...",                //required: PrimeReact components
"primeicons": "...",                //required: Icons
"primeflex": "..."                  //required: Grid system
`}
</AppCodeHighlight>

                    <h4>Theme</h4>
                    <p>Roma provides 15 PrimeReact themes out of the box, setup of a theme is simple as including the css of theme to your application. All themes are located inside are located inside public/assets/theme folder.</p>

                    <ul>
                        <li>blue</li>
                        <li>green</li>
                        <li>orange</li>
                        <li>magenta</li>
                        <li>bluegrey</li>
                        <li>deeppurple</li>
                        <li>brown</li>
                        <li>lime</li>
                        <li>rose</li>
                        <li>cyan</li>
                        <li>teal</li>
                        <li>deeporange</li>
                        <li>indigo</li>
                        <li>pink</li>
                        <li>purple</li>
                    </ul>

                    <p>A custom theme can be developed by the following steps.</p>
                    <ul>
                        <li>Choose a custom theme name such as "mytheme".</li>
                        <li>Create a folder named "mytheme" under <i>assets/theme</i> folder.</li>
                        <li>Create a file such as theme.scss under <i>assets/theme/mytheme</i> folder.</li>
                        <li>Define the variables listed below in your file and import the <i>../../sass/theme/_theme.scss</i> file.</li>
                        <li>Build the scss to generate css</li>
                        <li>Include the generated theme.css to your page.</li>
                    </ul>

                    <p>Here are the variables required to create a sample theme.</p>

<AppCodeHighlight lang="scss">
{`
$primaryColor: #0f97c7 !default;
$primaryLightColor: scale-color($primaryColor, $lightness: 60%) !default;
$primaryDarkColor: scale-color($primaryColor, $lightness: -10%) !default;
$primaryDarkerColor: scale-color($primaryColor, $lightness: -20%) !default;
$primaryTextColor: #ffffff !default;

$highlightBg: $primaryColor;
$highlightTextColor: $primaryTextColor;

@import '../sass/theme/_theme';
`}
</AppCodeHighlight>

<p>An example sass command to compile the css would be;</p>

<AppCodeHighlight>
{`
sass public/assets/theme/mytheme/theme.scss:public/assets/theme/mytheme/theme.css
`}
</AppCodeHighlight>

                    <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                        so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
<AppCodeHighlight>
{`
sass --watch public/assets:public/assets
`}
</AppCodeHighlight>

                    <p>Same can also be applied to layout itself;</p>
                    <ul>
                        <li>Choose a layout name such as layout-myown.</li>
                        <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>
                        <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>
                        <li>Build the scss to generate css</li>
                        <li>Serve the css by importing it using a link tag or a bundler.</li>
                    </ul>

                    <p>Here are the variables required to create a layout.</p>

<AppCodeHighlight>
{`
$primaryColor:#0f97c7;
$primaryTextColor:#ffffff;
$primaryLightestColor:#2ed7e4;

@import '../../sass/layout/_layout';
`}
</AppCodeHighlight>

                    <h4>Common SASS Variables</h4>
                    <p>In case you'd like to customize the shared variables, the _variables.scss files are where the options are defined for layout and theme.</p>

                    <h6>sass/_variables.scss</h6>
<div style={{ height: '400px', overflow: 'auto'}}>
<AppCodeHighlight lang="scss">
{`
//reused color variables
$shade000:#ffffff !default;    //surface
$shade100:#f8f9fa !default;    //header background
$shade200:#e9ecef !default;    //hover background
$shade300:#dee2e6 !default;    //border, divider
$shade400:#ced4da !default;    //input border
$shade500:#adb5bd !default;    //input icon
$shade600:#6c757d !default;    //text secondary color
$shade700:#495057 !default;    //text color
$shade800:#343a40 !default;    //unused
$shade900:#212529 !default;    //unused

//global
$fontFamily:'Inter UI',sans-serif;
$fontSize:1rem !default;
$fontWeight:normal !default;
$textColor:$shade700 !default;
$textSecondaryColor:$shade600 !default;
$borderRadius:3px !default;
$transitionDuration:.2s !default;
$formElementTransition:background-color $transitionDuration, color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration !default;
$actionIconTransition:background-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration !default;
$listItemTransition:box-shadow $transitionDuration !default;
$primeIconFontSize:1rem !default;
$divider:1px solid $shade300 !default;
$inlineSpacing:.5rem !default;
$disabledOpacity:.6 !default;
$maskBg:rgba(0, 0, 0, 0.4) !default;
$loadingIconFontSize:2rem !default;
$errorColor:#f44336 !default;

//scale
$scaleSM:0.875 !default;
$scaleLG:1.25 !default;

//focus
$focusOutlineColor:$primaryLightColor !default;
$focusOutline:0 none !default;
$focusOutlineOffset:0 !default;
$focusShadow:0 0 0 0.2rem $focusOutlineColor !default;

//action icons
$actionIconWidth:2rem !default;
$actionIconHeight:2rem !default;
$actionIconBg:transparent !default;
$actionIconBorder:0 none !default;
$actionIconColor:$shade600 !default;
$actionIconHoverBg:$shade200 !default;
$actionIconHoverBorderColor:transparent !default;
$actionIconHoverColor:$shade700 !default;
$actionIconBorderRadius:50% !default;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:.5rem .5rem !default;
$inputTextFontSize:1rem !default;
$inputBg:$shade000 !default;
$inputTextColor:$shade700 !default;
$inputIconColor:$shade600 !default;
$inputBorder:1px solid $shade400 !default;
$inputHoverBorderColor:$primaryColor !default;
$inputFocusBorderColor:$primaryColor !default;
$inputErrorBorderColor:$errorColor !default;
$inputPlaceholderTextColor:$shade600 !default;
$inputFilledBg:$shade100 !default;
$inputFilledHoverBg:$inputFilledBg !default;
$inputFilledFocusBg:$inputFilledBg !default;

//input groups
$inputGroupBg:$shade200 !default;
$inputGroupTextColor:$shade600 !default;
$inputGroupAddOnMinWidth:2.357rem !default;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListBg:$shade000 !default;
$inputListTextColor:$shade700 !default;
$inputListBorder:$inputBorder !default;
$inputListPadding:.5rem 0 !default;
$inputListItemPadding:.5rem 1rem !default;
$inputListItemBg:transparent !default;
$inputListItemTextColor:$shade700 !default;
$inputListItemHoverBg:$shade200 !default;
$inputListItemTextHoverColor:$shade700 !default;
$inputListItemBorder:0 none !default;
$inputListItemBorderRadius:0 !default;
$inputListItemMargin:0 !default;
$inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor !default;
$inputListHeaderPadding:.5rem 1rem !default;
$inputListHeaderMargin:0 !default;
$inputListHeaderBg:$shade100 !default;
$inputListHeaderTextColor:$shade700 !default;
$inputListHeaderBorder:0 none !default;

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBg:$inputListBg !default;
$inputOverlayHeaderBg:$inputListHeaderBg !default;
$inputOverlayBorder:0 none !default;
$inputOverlayShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;

//password
$passwordMeterBg:$shade300 !default;
$passwordWeakBg:#FFCDD2 !default;
$passwordMediumBg:#FFECB3 !default;
$passwordStrongBg:#C8E6C9 !default;

//button
$buttonPadding:.5rem 1rem !default;
$buttonIconOnlyWidth:2.357rem !default;
$buttonIconOnlyPadding:.5rem 0 !default;
$buttonBg:$primaryColor !default;
$buttonTextColor:$primaryTextColor !default;
$buttonBorder:1px solid $primaryColor !default;
$buttonHoverBg:$primaryDarkColor !default;
$buttonTextHoverColor:$primaryTextColor !default;
$buttonHoverBorderColor:$primaryDarkColor !default;
$buttonActiveBg:$primaryDarkerColor !default;
$buttonTextActiveColor:$primaryTextColor !default;
$buttonActiveBorderColor:$primaryDarkerColor !default;
$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !default;
$roundedButtonBorderRadius:2rem !default;

$textButtonHoverBgOpacity:.04 !default;
$textButtonActiveBgOpacity:.16 !default;
$outlinedButtonBorder:1px solid !default;
$plainButtonTextColor:$textSecondaryColor !default;
$plainButtonHoverBgColor:$shade200 !default;
$plainButtonActiveBgColor:$shade300 !default;

$secondaryButtonBg:#607D8B !default;
$secondaryButtonTextColor:#ffffff !default;
$secondaryButtonBorder:1px solid $secondaryButtonBg !default;
$secondaryButtonHoverBg:scale-color($secondaryButtonBg, $lightness: -10%) !default;
$secondaryButtonTextHoverColor:$secondaryButtonTextColor !default;
$secondaryButtonHoverBorderColor:scale-color($secondaryButtonBg, $lightness: -10%) !default;
$secondaryButtonActiveBg:scale-color($secondaryButtonBg, $lightness: -20%) !default;
$secondaryButtonTextActiveColor:$secondaryButtonTextColor !default;
$secondaryButtonActiveBorderColor:scale-color($secondaryButtonBg, $lightness: -20%) !default;
$secondaryButtonFocusShadow:0 0 0 0.2rem scale-color($secondaryButtonBg, $lightness: 60%) !default;

$infoButtonBg:#0288D1 !default;
$infoButtonTextColor:#ffffff !default;
$infoButtonBorder:1px solid $infoButtonBg !default;
$infoButtonHoverBg:scale-color($infoButtonBg, $lightness: -10%) !default;
$infoButtonTextHoverColor:$infoButtonTextColor !default;
$infoButtonHoverBorderColor:scale-color($infoButtonBg, $lightness: -10%) !default;
$infoButtonActiveBg:scale-color($infoButtonBg, $lightness: -20%) !default;
$infoButtonTextActiveColor:$infoButtonTextColor !default;
$infoButtonActiveBorderColor:scale-color($infoButtonBg, $lightness: -20%) !default;
$infoButtonFocusShadow:0 0 0 0.2rem scale-color($infoButtonBg, $lightness: 60%) !default;

$successButtonBg:#689F38 !default;
$successButtonTextColor:#ffffff !default;
$successButtonBorder:1px solid $successButtonBg !default;
$successButtonHoverBg:scale-color($successButtonBg, $lightness: -10%) !default;
$successButtonTextHoverColor:$successButtonTextColor !default;
$successButtonHoverBorderColor:scale-color($successButtonBg, $lightness: -10%) !default;
$successButtonActiveBg:scale-color($successButtonBg, $lightness: -20%) !default;
$successButtonTextActiveColor:$successButtonTextColor !default;
$successButtonActiveBorderColor:scale-color($successButtonBg, $lightness: -20%) !default;
$successButtonFocusShadow:0 0 0 0.2rem scale-color($successButtonBg, $lightness: 60%) !default;

$warningButtonBg:#FBC02D !default;
$warningButtonTextColor:#212529 !default;
$warningButtonBorder:1px solid $warningButtonBg !default;
$warningButtonHoverBg:scale-color($warningButtonBg, $lightness: -10%) !default;
$warningButtonTextHoverColor:$warningButtonTextColor !default;
$warningButtonHoverBorderColor:scale-color($warningButtonBg, $lightness: -10%) !default;
$warningButtonActiveBg:scale-color($warningButtonBg, $lightness: -20%) !default;
$warningButtonTextActiveColor:$warningButtonTextColor !default;
$warningButtonActiveBorderColor:scale-color($warningButtonBg, $lightness: -20%) !default;
$warningButtonFocusShadow:0 0 0 0.2rem scale-color($warningButtonBg, $lightness: 60%) !default;

$helpButtonBg:#9C27B0 !default;
$helpButtonTextColor:#ffffff !default;
$helpButtonBorder:1px solid $helpButtonBg !default;
$helpButtonHoverBg:scale-color($helpButtonBg, $lightness: -10%) !default;
$helpButtonTextHoverColor:$helpButtonTextColor !default;
$helpButtonHoverBorderColor:scale-color($helpButtonBg, $lightness: -10%) !default;
$helpButtonActiveBg:scale-color($helpButtonBg, $lightness: -20%) !default;
$helpButtonTextActiveColor:$helpButtonTextColor !default;
$helpButtonActiveBorderColor:scale-color($helpButtonBg, $lightness: -20%) !default;
$helpButtonFocusShadow:0 0 0 0.2rem scale-color($helpButtonBg, $lightness: 60%) !default;

$dangerButtonBg:#D32F2F !default;
$dangerButtonTextColor:#ffffff !default;
$dangerButtonBorder:1px solid $dangerButtonBg !default;
$dangerButtonHoverBg:scale-color($dangerButtonBg, $lightness: -10%) !default;
$dangerButtonTextHoverColor:$dangerButtonTextColor !default;
$dangerButtonHoverBorderColor:scale-color($dangerButtonBg, $lightness: -10%) !default;
$dangerButtonActiveBg:scale-color($dangerButtonBg, $lightness: -20%) !default;
$dangerButtonTextActiveColor:$dangerButtonTextColor !default;
$dangerButtonActiveBorderColor:scale-color($dangerButtonBg, $lightness: -20%) !default;
$dangerButtonFocusShadow:0 0 0 0.2rem scale-color($dangerButtonBg, $lightness: 60%) !default;

$linkButtonColor:$primaryDarkerColor !default;
$linkButtonHoverColor:$primaryDarkerColor !default;
$linkButtonTextHoverDecoration:underline !default;
$linkButtonFocusShadow:0 0 0 0.2rem $focusOutlineColor !default;

//checkbox
$checkboxWidth:20px !default;
$checkboxHeight:20px !default;
$checkboxBorder:2px solid $shade400 !default;
$checkboxIconFontSize:14px !default;
$checkboxActiveBorderColor:$primaryColor !default;
$checkboxActiveBg:$primaryColor !default;
$checkboxIconActiveColor:$primaryTextColor !default;
$checkboxActiveHoverBg:$primaryDarkerColor !default;
$checkboxIconActiveHoverColor:$primaryTextColor !default;
$checkboxActiveHoverBorderColor:$primaryDarkerColor !default;

//radiobutton
$radiobuttonWidth:20px !default;
$radiobuttonHeight:20px !default;
$radiobuttonBorder:2px solid $shade400 !default;
$radiobuttonIconSize:12px !default;
$radiobuttonActiveBorderColor:$primaryColor !default;
$radiobuttonActiveBg:$primaryColor !default;
$radiobuttonIconActiveColor:$primaryTextColor !default;
$radiobuttonActiveHoverBg:$primaryDarkerColor !default;
$radiobuttonIconActiveHoverColor:$primaryTextColor !default;
$radiobuttonActiveHoverBorderColor:$primaryDarkerColor !default;

//colorpicker
$colorPickerPreviewWidth:2rem !default;
$colorPickerPreviewHeight:2rem !default;
$colorPickerBg:#323232 !default;
$colorPickerBorderColor:#191919 !default;
$colorPickerHandleColor:$shade000 !default;

//togglebutton
$toggleButtonBg:$inputBg !default;
$toggleButtonBorder:1px solid $shade400 !default;
$toggleButtonTextColor:$shade700 !default;
$toggleButtonIconColor:$shade600 !default;
$toggleButtonHoverBg:$shade200 !default;
$toggleButtonHoverBorderColor:$shade400 !default;
$toggleButtonTextHoverColor:$shade700 !default;
$toggleButtonIconHoverColor:$shade600 !default;
$toggleButtonActiveBg:$primaryColor !default;
$toggleButtonActiveBorderColor:$primaryColor !default;
$toggleButtonTextActiveColor:$primaryTextColor !default;
$toggleButtonIconActiveColor:$primaryTextColor !default;
$toggleButtonActiveHoverBg:$primaryDarkColor !default;
$toggleButtonActiveHoverBorderColor:$primaryDarkColor !default;
$toggleButtonTextActiveHoverColor:$primaryTextColor !default;
$toggleButtonIconActiveHoverColor:$primaryTextColor !default;

//inplace
$inplacePadding:$inputPadding !default;
$inplaceHoverBg:$shade200 !default;
$inplaceTextHoverColor:$shade700 !default;

//rating
$ratingIconFontSize:1.143rem !default;
$ratingCancelIconColor:#e74c3c !default;
$ratingCancelIconHoverColor:#c0392b !default;
$ratingStarIconOffColor:$shade700 !default;
$ratingStarIconOnColor:$primaryColor !default;
$ratingStarIconHoverColor:$primaryColor !default;

//slider
$sliderBg:$shade300 !default;
$sliderBorder:0 none !default;
$sliderHorizontalHeight:.286rem !default;
$sliderVerticalWidth:0.286rem !default;
$sliderHandleWidth:1.143rem !default;
$sliderHandleHeight:1.143rem !default;
$sliderHandleBg:$shade000 !default;
$sliderHandleBorder:2px solid $primaryColor !default;
$sliderHandleBorderRadius:50% !default;
$sliderHandleHoverBorderColor:$primaryColor !default;
$sliderHandleHoverBg:$primaryColor !default;
$sliderRangeBg:$primaryColor !default;

//calendar
$calendarTableMargin:.5rem 0 !default;
$calendarPadding:.5rem !default;
$calendarBg:$shade000 !default;
$calendarInlineBg:$calendarBg !default;
$calendarTextColor:$shade700 !default;
$calendarBorder:$inputListBorder !default;
$calendarOverlayBorder:$inputOverlayBorder !default;

$calendarHeaderPadding:.5rem !default;
$calendarHeaderBg:$shade000 !default;
$calendarInlineHeaderBg:$calendarBg !default;
$calendarHeaderBorder:1px solid $shade300 !default;
$calendarHeaderTextColor:$shade700 !default;
$calendarHeaderFontWeight:600 !default;
$calendarHeaderCellPadding:.5rem !default;

$calendarCellDatePadding:.5rem !default;
$calendarCellDateWidth:2.5rem !default;
$calendarCellDateHeight:2.5rem !default;
$calendarCellDateBorderRadius:50% !default;
$calendarCellDateBorder:1px solid transparent !default;
$calendarCellDateHoverBg:$shade200 !default;
$calendarCellDateTodayBg:$shade400 !default;
$calendarCellDateTodayBorderColor:transparent !default;
$calendarCellDateTodayTextColor:$shade700 !default;

$calendarButtonBarPadding:1rem 0 !default;
$calendarTimePickerPadding:.5rem !default;
$calendarTimePickerElementPadding:0 .5rem !default;
$calendarTimePickerTimeFontSize:1.25rem !default;

$calendarBreakpoint:769px !default;
$calendarCellDatePaddingSM:0 !default;

//input switch
$inputSwitchWidth:3rem !default;
$inputSwitchHeight:1.75rem !default;
$inputSwitchBorderRadius:30px !default;
$inputSwitchHandleWidth:1.250rem !default;
$inputSwitchHandleHeight:1.250rem !default;
$inputSwitchHandleBorderRadius:50% !default;
$inputSwitchSliderPadding:.25rem !default;
$inputSwitchSliderOffBg:$shade400 !default;
$inputSwitchHandleOffBg:$shade000 !default;
$inputSwitchSliderOffHoverBg:scale-color($shade400, $lightness: -10%) !default;
$inputSwitchSliderOnBg:$primaryColor !default;
$inputSwitchSliderOnHoverBg:$primaryDarkColor !default;
$inputSwitchHandleOnBg:$shade000 !default;

//panel
$panelHeaderBorder:1px solid $shade300 !default;
$panelHeaderBg:$shade100 !default;
$panelHeaderTextColor:$shade700 !default;
$panelHeaderFontWeight:600 !default;
$panelHeaderPadding:1rem !default;
$panelToggleableHeaderPadding:.5rem 1rem !default;

$panelHeaderHoverBg:$shade200 !default;
$panelHeaderHoverBorderColor:$shade300 !default;
$panelHeaderTextHoverColor:$shade700 !default;

$panelContentBorder:1px solid $shade300 !default;
$panelContentBg:$shade000 !default;
$panelContentTextColor:$shade700 !default;
$panelContentPadding:1rem !default;

$panelFooterBorder:1px solid $shade300 !default;
$panelFooterBg:$shade000 !default;
$panelFooterTextColor:$shade700 !default;
$panelFooterPadding:0.5rem 1rem !default;

//accordion
$accordionSpacing:0 !default;
$accordionHeaderBorder:$panelHeaderBorder !default;
$accordionHeaderBg:$panelHeaderBg !default;
$accordionHeaderTextColor:$panelHeaderTextColor !default;
$accordionHeaderFontWeight:$panelHeaderFontWeight !default;
$accordionHeaderPadding:$panelHeaderPadding !default;

$accordionHeaderHoverBg:$shade200 !default;
$accordionHeaderHoverBorderColor:$shade300 !default;
$accordionHeaderTextHoverColor:$shade700 !default;

$accordionHeaderActiveBg:$panelHeaderBg !default;
$accordionHeaderActiveBorderColor:$shade300 !default;
$accordionHeaderTextActiveColor:$shade700 !default;

$accordionHeaderActiveHoverBg:$shade200 !default;
$accordionHeaderActiveHoverBorderColor:$shade300 !default;
$accordionHeaderTextActiveHoverColor:$shade700 !default;

$accordionContentBorder:$panelContentBorder !default;
$accordionContentBg:$panelContentBg !default;
$accordionContentTextColor:$panelContentTextColor !default;
$accordionContentPadding:$panelContentPadding !default;

//tabview
$tabviewNavBorder:1px solid $shade300 !default;
$tabviewNavBorderWidth:0 0 2px 0 !default;
$tabviewNavBg:$shade000 !default;

$tabviewHeaderSpacing:0 !default;
$tabviewHeaderBorder:solid $shade300 !default;
$tabviewHeaderBorderWidth:0 0 2px 0 !default;
$tabviewHeaderBorderColor:transparent transparent $shade300 transparent !default;
$tabviewHeaderBg:$shade000 !default;
$tabviewHeaderTextColor:$shade600 !default;
$tabviewHeaderFontWeight:$panelHeaderFontWeight !default;
$tabviewHeaderPadding:$panelHeaderPadding !default;
$tabviewHeaderMargin:0 0 -2px 0 !default;

$tabviewHeaderHoverBg:$shade000 !default;
$tabviewHeaderHoverBorderColor:$shade600 !default;
$tabviewHeaderTextHoverColor:$shade600 !default;

$tabviewHeaderActiveBg:$shade000 !default;
$tabviewHeaderActiveBorderColor:$primaryColor !default;
$tabviewHeaderTextActiveColor:$primaryColor !default;

$tabviewContentBorder:0 none !default;
$tabviewContentBg:$panelContentBg !default;
$tabviewContentTextColor:$panelContentTextColor !default;
$tabviewContentPadding:$panelContentPadding !default;

//upload
$fileUploadProgressBarHeight:.25rem !default;
$fileUploadContentPadding:2rem 1rem !default;

//scrollpanel
$scrollPanelTrackBorder:0 none !default;
$scrollPanelTrackBg:$shade100 !default;

//card
$cardBodyPadding:1rem !default;
$cardTitleFontSize:1.5rem !default;
$cardTitleFontWeight:700 !default;
$cardSubTitleFontWeight:400 !default;
$cardSubTitleColor:$shade600 !default;
$cardContentPadding:1rem 0 !default;
$cardFooterPadding:1rem 0 0 0 !default;
$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12) !default;

//editor
$editorToolbarBg:$panelHeaderBg !default;
$editorToolbarBorder:$panelHeaderBorder !default;
$editorToolbarPadding:$panelHeaderPadding !default;
$editorToolbarIconColor:$textSecondaryColor !default;
$editorToolbarIconHoverColor:$textColor !default;
$editorIconActiveColor:$primaryColor !default;
$editorContentBorder:$panelContentBorder !default;
$editorContentBg:$panelContentBg !default;

//paginator
$paginatorBg:$shade000 !default;
$paginatorTextColor:$shade600 !default;
$paginatorBorder:solid $shade200 !default;
$paginatorBorderWidth:0 !default;
$paginatorPadding:.5rem 1rem !default;
$paginatorElementWidth:$buttonIconOnlyWidth !default;
$paginatorElementHeight:$buttonIconOnlyWidth !default;
$paginatorElementBg:transparent !default;
$paginatorElementBorder:0 none !default;
$paginatorElementIconColor:$shade600 !default;
$paginatorElementHoverBg:$shade200 !default;
$paginatorElementHoverBorderColor:transparent !default;
$paginatorElementIconHoverColor:$shade700 !default;
$paginatorElementBorderRadius:$borderRadius !default;
$paginatorElementMargin:.143rem !default;
$paginatorElementPadding:0 !default;

//table
$tableHeaderBorder:1px solid $shade200 !default;
$tableHeaderBorderWidth:1px 0 1px 0 !default;
$tableHeaderBg:$shade100 !default;
$tableHeaderTextColor:$shade700 !default;
$tableHeaderFontWeight:600 !default;
$tableHeaderPadding:1rem 1rem !default;

$tableHeaderCellPadding:1rem 1rem !default;
$tableHeaderCellBg:$shade100 !default;
$tableHeaderCellTextColor:$shade700 !default;
$tableHeaderCellFontWeight:600 !default;
$tableHeaderCellBorder:1px solid $shade200 !default;
$tableHeaderCellBorderWidth:0 0 1px 0 !default;
$tableHeaderCellHoverBg:$shade200 !default;
$tableHeaderCellTextHoverColor:$shade700 !default;
$tableHeaderCellIconColor:$shade600 !default;
$tableHeaderCellIconHoverColor:$shade600 !default;
$tableHeaderCellHighlightBg:$shade100 !default;
$tableHeaderCellHighlightTextColor:$primaryColor !default;
$tableHeaderCellHighlightHoverBg:$shade200 !default;
$tableHeaderCellHighlightTextHoverColor:$primaryColor !default;
$tableSortableColumnBadgeSize:1.143rem !default;

$tableBodyRowBg:$shade000 !default;
$tableBodyRowTextColor:$shade700 !default;
$tableBodyRowEvenBg:scale-color($tableBodyRowBg, $lightness: -1%) !default;
$tableBodyRowHoverBg:$shade200 !default;
$tableBodyRowTextHoverColor:$shade700 !default;
$tableBodyCellBorder:1px solid $shade200 !default;
$tableBodyCellBorderWidth:0 0 1px 0 !default;
$tableBodyCellPadding:1rem 1rem !default;

$tableFooterCellPadding:1rem 1rem !default;
$tableFooterCellBg:$shade100 !default;
$tableFooterCellTextColor:$shade700 !default;
$tableFooterCellFontWeight:600 !default;
$tableFooterCellBorder:1px solid $shade200 !default;
$tableFooterCellBorderWidth:0 0 1px 0 !default;
$tableResizerHelperBg:$primaryColor !default;

$tableFooterBorder:1px solid $shade200 !default;
$tableFooterBorderWidth:0 0 1px 0 !default;
$tableFooterBg:$shade100 !default;
$tableFooterTextColor:$shade700 !default;
$tableFooterFontWeight:600 !default;
$tableFooterPadding:1rem 1rem !default;

$tableCellContentAlignment:left !default;
$tableTopPaginatorBorderWidth:0 0 1px 0 !default;
$tableBottomPaginatorBorderWidth:0 0 1px 0 !default;

$tableScaleSM:0.5 !default;
$tableScaleLG:1.25 !default;

//dataview
$dataViewContentPadding:0 !default;
$dataViewContentBorder:0 none !default;
$dataViewListItemBorder:solid $shade200 !default;
$dataViewListItemBorderWidth:0 0 1px 0 !default;

//orderlist, picklist
$orderListBreakpoint:769px !default;
$pickListBreakpoint:769px !default;

//schedule
$fullCalendarEventBg:$primaryDarkColor !default;
$fullCalendarEventBorder:1px solid $primaryDarkColor !default;
$fullCalendarEventTextColor:$primaryTextColor !default;

//tree
$treeContainerPadding:0.286rem !default;
$treeNodePadding:0.143rem !default;
$treeNodeContentPadding:.5rem !default;
$treeNodeChildrenPadding:0 0 0 1rem !default;
$treeNodeIconColor:$shade600 !default;

//timeline
$timelineVerticalEventContentPadding:0 1rem !default;
$timelineHorizontalEventContentPadding:1rem 0 !default;
$timelineEventMarkerWidth:1rem !default;
$timelineEventMarkerHeight:1rem !default;
$timelineEventMarkerBorderRadius:50% !default;
$timelineEventMarkerBorder:2px solid $primaryColor !default;
$timelineEventMarkerBackground:$shade000 !default;
$timelineEventConnectorSize:2px !default;
$timelineEventColor:$shade300 !default;

//org chart
$organizationChartConnectorColor:$shade300 !default;

//message
$messageMargin:1rem 0 !default;
$messagePadding:1rem 1.5rem !default;
$messageBorderWidth:0 0 0 6px !default;
$messageIconFontSize:1.5rem !default;
$messageTextFontSize:1rem !default;
$messageTextFontWeight:500 !default;

//inline message
$inlineMessagePadding:$inputPadding !default;
$inlineMessageMargin:0 !default;
$inlineMessageIconFontSize:1rem !default;
$inlineMessageTextFontSize:1rem !default;
$inlineMessageBorderWidth:0px !default;

//toast
$toastIconFontSize:2rem !default;
$toastMessageTextMargin:0 0 0 1rem !default;
$toastMargin:0 0 1rem 0 !default;
$toastPadding:1rem !default;
$toastBorderWidth:0 0 0 6px !default;
$toastShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;
$toastOpacity:.9 !default;
$toastTitleFontWeight:700 !default;
$toastDetailMargin:$inlineSpacing 0 0 0 !default;

//severities
$infoMessageBg:#B3E5FC !default;
$infoMessageBorder:solid scale-color($infoMessageBg, $lightness: -50%) !default;
$infoMessageTextColor:scale-color($infoMessageBg, $lightness: -75%) !default;
$infoMessageIconColor:scale-color($infoMessageBg, $lightness: -75%) !default;
$successMessageBg:#C8E6C9 !default;
$successMessageBorder:solid scale-color($successMessageBg, $lightness: -50%) !default;
$successMessageTextColor:scale-color($successMessageBg, $lightness: -75%) !default;
$successMessageIconColor:scale-color($successMessageBg, $lightness: -75%) !default;
$warningMessageBg:#FFECB3 !default;
$warningMessageBorder:solid scale-color($warningMessageBg, $lightness: -50%) !default;
$warningMessageTextColor:scale-color($warningMessageBg, $lightness: -75%) !default;
$warningMessageIconColor:scale-color($warningMessageBg, $lightness: -75%) !default;
$errorMessageBg:#FFCDD2 !default;
$errorMessageBorder:solid scale-color($errorMessageBg, $lightness: -50%) !default;
$errorMessageTextColor:scale-color($errorMessageBg, $lightness: -75%) !default;
$errorMessageIconColor:scale-color($errorMessageBg, $lightness: -75%) !default;

//overlays
$overlayContentBorder:0 none !default;
$overlayContentBg:$panelContentBg !default;
$overlayContainerShadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12) !default;

//dialog
$dialogHeaderBg:$shade000 !default;
$dialogHeaderBorder:0 none !default;
$dialogHeaderTextColor:$shade700 !default;
$dialogHeaderFontWeight:600 !default;
$dialogHeaderFontSize:1.25rem !default;
$dialogHeaderPadding:1.5rem !default;
$dialogContentPadding:0 1.5rem !default;
$dialogFooterBorder:0 none !default;
$dialogFooterPadding:1.5rem !default;

//confirmpopup
$confirmPopupContentPadding:$panelContentPadding;
$confirmPopupFooterPadding:0 1rem 1rem 1rem;

//tooltip
$tooltipBg:$shade700 !default;
$tooltipTextColor:$shade000 !default;
$tooltipPadding:$inputPadding !default;

//steps
$stepsItemBg:$shade000 !default;
$stepsItemBorder:1px solid $shade200 !default;
$stepsItemTextColor:$shade600 !default;
$stepsItemNumberWidth:2rem !default;
$stepsItemNumberHeight:2rem !default;
$stepsItemNumberFontSize:1.143rem !default;
$stepsItemNumberColor:$shade700 !default;
$stepsItemNumberBorderRadius:50% !default;
$stepsItemActiveFontWeight:600 !default;

//progressbar
$progressBarHeight:1.5rem !default;
$progressBarBorder:0 none !default;
$progressBarBg:$shade300 !default;
$progressBarValueBg:$primaryColor !default;

//menu (e.g. menu, menubar, tieredmenu)
$menuWidth:12.5rem !default;
$menuBg:$shade000 !default;
$menuBorder:1px solid $shade300 !default;
$menuTextColor:$shade700 !default;
$menuitemPadding:.75rem 1rem !default;
$menuitemBorderRadius:0 !default;
$menuitemTextColor:$shade700 !default;
$menuitemIconColor:$shade600 !default;
$menuitemTextHoverColor:$shade700 !default;
$menuitemIconHoverColor:$shade600 !default;
$menuitemHoverBg:$shade200 !default;
$menuitemTextActiveColor:$shade700 !default;
$menuitemIconActiveColor:$shade600 !default;
$menuitemActiveBg:$shade200 !default;
$menuitemSubmenuIconFontSize:.875rem !default;
$submenuHeaderMargin:0 !default;
$submenuHeaderPadding:.75rem 1rem !default;
$submenuHeaderBg:$shade000 !default;
$submenuHeaderTextColor:$shade700 !default;
$submenuHeaderBorderRadius:0 !default;
$submenuHeaderFontWeight:600 !default;
$overlayMenuBg:$menuBg !default;
$overlayMenuBorder:0 none !default;
$overlayMenuShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;
$verticalMenuPadding:.25rem 0 !default;
$menuSeparatorMargin:.25rem 0 !default;

$breadcrumbPadding:1rem !default;
$breadcrumbBg:$menuBg !default;
$breadcrumbBorder:$menuBorder !default;
$breadcrumbItemTextColor:$menuitemTextColor !default;
$breadcrumbItemIconColor:$menuitemIconColor !default;
$breadcrumbLastItemTextColor:$menuitemTextColor !default;
$breadcrumbLastItemIconColor:$menuitemIconColor !default;
$breadcrumbSeparatorColor:$menuitemTextColor !default;

$horizontalMenuPadding:.5rem !default;
$horizontalMenuBg:$shade100 !default;
$horizontalMenuBorder:$menuBorder !default;
$horizontalMenuTextColor:$menuTextColor !default;
$horizontalMenuRootMenuitemPadding:$menuitemPadding !default;
$horizontalMenuRootMenuitemBorderRadius:$borderRadius !default;
$horizontalMenuRootMenuitemTextColor:$menuitemTextColor !default;
$horizontalMenuRootMenuitemIconColor:$menuitemIconColor !default;
$horizontalMenuRootMenuitemTextHoverColor:$menuitemTextHoverColor !default;
$horizontalMenuRootMenuitemIconHoverColor:$menuitemIconHoverColor !default;
$horizontalMenuRootMenuitemHoverBg:$menuitemHoverBg !default;
$horizontalMenuRootMenuitemTextActiveColor:$menuitemTextActiveColor !default;
$horizontalMenuRootMenuitemIconActiveColor:$menuitemIconActiveColor !default;
$horizontalMenuRootMenuitemActiveBg:$menuitemActiveBg !default;

//badge and tag
$badgeBg:$primaryColor !default;
$badgeTextColor:$primaryTextColor !default;
$badgeMinWidth:1.5rem !default;
$badgeHeight:1.5rem !default;
$badgeFontWeight:700 !default;
$badgeFontSize:.75rem !default;

$tagPadding:.25rem .4rem !default;

//carousel
$carouselIndicatorsPadding:1rem !default;
$carouselIndicatorBg:$shade200 !default;
$carouselIndicatorHoverBg:$shade300 !default;
$carouselIndicatorBorderRadius:0 !default;
$carouselIndicatorWidth:2rem !default;
$carouselIndicatorHeight:.5rem !default;

//galleria
$galleriaMaskBg:rgba(0,0,0,0.9) !default;
$galleriaCloseIconMargin:.5rem !default;
$galleriaCloseIconFontSize:2rem !default;
$galleriaCloseIconBg:transparent !default;
$galleriaCloseIconColor:$shade100 !default;
$galleriaCloseIconHoverBg:rgba(255,255,255,0.1) !default;
$galleriaCloseIconHoverColor:$shade100 !default;
$galleriaCloseIconWidth:4rem !default;
$galleriaCloseIconHeight:4rem !default;
$galleriaCloseIconBorderRadius:50% !default;

$galleriaItemNavigatorBg:transparent !default;
$galleriaItemNavigatorColor:$shade100 !default;
$galleriaItemNavigatorMargin:0 .5rem !default;
$galleriaItemNavigatorFontSize:2rem !default;
$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaItemNavigatorHoverColor:$shade100 !default;
$galleriaItemNavigatorWidth:4rem !default;
$galleriaItemNavigatorHeight:4rem !default;
$galleriaItemNavigatorBorderRadius:$borderRadius !default;

$galleriaCaptionBg:rgba(0,0,0,.5) !default;
$galleriaCaptionTextColor:$shade100 !default;
$galleriaCaptionPadding:1rem !default;

$galleriaIndicatorsPadding:1rem !default;
$galleriaIndicatorBg:$shade200 !default;
$galleriaIndicatorHoverBg:$shade300 !default;
$galleriaIndicatorBorderRadius:50% !default;
$galleriaIndicatorWidth:1rem !default;
$galleriaIndicatorHeight:1rem !default;
$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5) !default;
$galleriaIndicatorBgOnItem:rgba(255,255,255,.4) !default;
$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6) !default;

$galleriaThumbnailContainerBg:rgba(0,0,0,.9) !default;
$galleriaThumbnailContainerPadding:1rem .25rem !default;
$galleriaThumbnailNavigatorBg:transparent !default;
$galleriaThumbnailNavigatorColor:$shade100 !default;
$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaThumbnailNavigatorHoverColor:$shade100 !default;
$galleriaThumbnailNavigatorBorderRadius:50% !default;
$galleriaThumbnailNavigatorWidth:2rem !default;
$galleriaThumbnailNavigatorHeight:2rem !default;

//divider
$dividerHorizontalMargin:1rem 0;
$dividerHorizontalPadding:0 1rem;
$dividerVerticalMargin:0 1rem;
$dividerVerticalPadding:1rem 0;
$dividerSize:1px;
$dividerColor:$shade300;

//avatar
$avatarBg:$shade300;
$avatarColor:$textColor;

//scrollTop
$scrollTopBg:rgba(0,0,0,0.7);
$scrollTopHoverBg:rgba(0,0,0,0.8);
$scrollTopWidth:3rem;
$scrollTopHeight:3rem;
$scrollTopBorderRadius:50%;
$scrollTopFontSize:1.5rem;
$scrollTopTextColor:$shade100;

:root {
	--surface-a:#{$shade000};
	--surface-b:#{$shade100};
	--surface-c:#{$shade200};
	--surface-d:#{$shade300};
	--surface-e:#{$shade000};
	--surface-f:#{$shade000};
	--text-color:#{$shade700};
	--text-color-secondary:#{$shade600};
	--primary-color:#{$primaryColor};
	--primary-color-text:#{$primaryTextColor};
	--font-family:#{$fontFamily};
}
`}
</AppCodeHighlight>
</div>
      
                    <h6>sass/layout/_variables</h6>
<AppCodeHighlight lang="scss">
{`
$fontFamily:'Inter UI',sans-serif;
$fontSize:13px;
$textColor:#252529;
$textSecondaryColor:#65656a;
$borderRadius:2px;
$transitionDuration:.2s;

//main
$bodyBgColor:#f4f4f4;

$footerBgColor:#ffffff;
$footerBorderColor:#ebebef;

$dividerColor: #ebedef;

//light menu
$menuBgColor:#ffffff;
$menuBorderColor:#ebebef;
$menuitemTextColor:#666666;
$menuitemIconColor:#65656a;
$menuitemTextHoverColor:#252529;
$menuitemIconHoverColor:#252529;
$menuitemHoverBgColor:#eaeaea;
$menuitemSeparator:#ebebef;

//dark menu
$darkMenuBgColor:#252529;
$darkMenuBorderColor:#252529;
$darkMenuitemTextColor:#8b8b90;
$darkMenuitemIconColor:#a6a6a6;
$darkMenuitemTextHoverColor:#ebebef;
$darkMenuitemIconHoverColor:#ebebef;
$darkMenuitemHoverBgColor:#2e2e33;
$darkMenuitemSeparator:#424247;

$slimMenuTooltipBgColor:#333333;
$slimMenuTooltipTextColor:#c8c8c8;
`}
</AppCodeHighlight>

                    <p>In the demo app layout and theme css files are defined using link tags in index.html so the demo can switch them on the fly by changing the path however if this is not a requirement, you may also import them in App.js so that webpack adds them to the bundle.</p>

                    <h4>Menu Modes</h4>
                    <p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in app.component.html is used to define which mode to use by adding specific classes. List
                        below indicates the style classes for each mode. </p>

                    <ul>
                        <li>Static: "layout-wrapper layout-static"</li>
                        <li>Overlay: "layout-wrapper layout-overlay"</li>
                        <li>Slim: "layout-wrapper layout-slim"</li>
                        <li>Horizontal: "layout-wrapper layout-horizontal"</li>
                    </ul>

                    <p>For example to create a horizontal menu, the div element should be in following form;</p>
<AppCodeHighlight>
{`
<div className="layout-wrapper layout-horizontal">
`}
</AppCodeHighlight>

                    <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                            application has an example implementation of such use case. Refer to App.js for an example.</p>

                    <h4>Menu Colors</h4>
                    <p>Menu offers two color options, "light" and "dark" which is defined using the main container element.</p>
                    <ul>
                        <li>Light: "layout-wrapper layout-menu-light"</li>
                        <li>Dark: "layout-wrapper layout-menu-dark"</li>
                    </ul>

                    <h4>TopBar Colors</h4>
                    <p>Roma provides 17 built-in color alternatives for the topbar which is defined by adding a style class to the "layout-wrapper" element such as "layout-topbar-dark".</p>
<AppCodeHighlight>
{`
<div className="layout-wrapper layout-topbar-dark">
`}
</AppCodeHighlight>

                    <p>The full list of alternatives are;</p>
                    <ul>
                        <li>layout-topbar-light</li>
                        <li>layout-topbar-dark</li>
                        <li>layout-topbar-blue</li>
                        <li>layout-topbar-green</li>
                        <li>layout-topbar-orange</li>
                        <li>layout-topbar-magenta</li>
                        <li>layout-topbar-bluegrey</li>
                        <li>layout-topbar-deeppurple</li>
                        <li>layout-topbar-brown</li>
                        <li>layout-topbar-lime</li>
                        <li>layout-topbar-rose</li>
                        <li>layout-topbar-cyan</li>
                        <li>layout-topbar-teal</li>
                        <li>layout-topbar-deeporange</li>
                        <li>layout-topbar-indigo</li>
                        <li>layout-topbar-pink</li>
                        <li>layout-topbar-purple</li>
                    </ul>

                    <h4>Grid CSS</h4>
                    <p>Roma uses PrimeReact Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Roma Layout itself does not depend on PrimeFlex CSS.</p>

                    <h4>Customizing Styles</h4>
                    <p>It is suggested to add your customizations in the following sass files under the "sass/overrides" folder instead of adding them to the scss files under sass folder to avoid maintenance issues after an update.</p>

                    <ul>
                        <li><b>_layout_variables</b>: Variables of the layout.</li>
                        <li><b>_layout_styles</b>: Styles for the layout.</li>
                        <li><b>_theme_variables</b>: Variables of the theme.</li>
                        <li><b>_theme_styles</b>: Styles for the theme.</li>
                    </ul>

                    <h4>Migration Guide</h4>
                    <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>
                </div>
            </div>
        </div>
    )
}
