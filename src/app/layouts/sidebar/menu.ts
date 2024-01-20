import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENU',
        isTitle: true
    },
    {
        id: 2,
        label: 'DASHBOARD',
        icon: "bi bi-speedometer2",
        link: '/',
    },
    {
        id: 1,
        label: 'PAGES',
        isTitle: true
    },
    {
        id: 3,
        label: 'AUTHENTICATION',
        icon: "bi bi-person-circle",
        subItems: [
            {
                id: 4,
                label: 'SIGNIN',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/signin/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/signin/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/signin/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 5,
                label: 'SIGNUP',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/signup/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/signup/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/signup/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 6,
                label: 'PASSWORDRESET',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/pass-reset/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/pass-reset/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/pass-reset/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 7,
                label: 'PASSWORDCREATE',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/pass-change/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/pass-change/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/pass-change/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 8,
                label: 'LOCKSCREEN',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/lockscreen/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/lockscreen/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/lockscreen/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 9,
                label: 'LOGOUT',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/logout/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/logout/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/logout/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 10,
                label: 'SUCCESSMESSAGE',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/success-msg/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/success-msg/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/success-msg/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 11,
                label: 'TWOSTEPVERIFICATION',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC',
                        link: '/auth/twostep/basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.BASIC2',
                        link: '/auth/twostep/basic2',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.COVER',
                        link: '/auth/twostep/cover',
                        parentId: 3
                    },
                ]
            },
            {
                id: 12,
                label: 'ERRORS',
                parentId: 3,
                subItems: [
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404BASIC',
                        link: '/auth/error/404-basic',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404COVER',
                        link: '/auth/error/404-cover',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404ALT',
                        link: '/auth/error/404-alt',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.500',
                        link: '/auth/error/500',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.OFFLINE',
                        link: '/auth/error/offline',
                        parentId: 3
                    },
                ]
            },
        ]
    },
    {
        id: 26,
        label: 'MENUITEMS.EXTRAPAGES.TEXT',
        icon: "bi bi-journal-medical",
        subItems: [
            {
                id: 27,
                label: 'STARTER',
                link: '/pages/starter',
                parentId: 26
            },
            {
                id: 28,
                label: 'PROFILE',
                parentId: 26,
                subItems: [
                    {
                        id: 27,
                        label: 'MENUITEMS.EXTRAPAGES.LIST.SIMPLEPAGE',
                        link: '/pages/profile',
                        parentId: 26
                    },
                    {
                        id: 27,
                        label: 'SETTINGS',
                        link: '/pages/settings',
                        parentId: 26
                    }
                ]
            },
            {
                id: 29,
                label: 'TEAM',
                link: '/pages/team',
                parentId: 26
            },
            {
                id: 30,
                label: 'TIMELINE',
                link: '/pages/timeline',
                parentId: 26
            },
            {
                id: 31,
                label: 'FAQS',
                link: '/pages/faqs',
                parentId: 26
            },
            {
                id: 32,
                label: 'PRICING',
                link: '/pages/pricing',
                parentId: 26
            },
            {
                id: 33,
                label: 'MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 26
            },
            {
                id: 33,
                label: 'COMINGSOON',
                link: '/pages/coming-soon',
                parentId: 26
            },
            {
                id: 33,
                label: 'SITEMAP',
                link: '/pages/sitemap',
                parentId: 26
            },
            {
                id: 33,
                label: 'SEARCHRESULTS',
                link: '/pages/search-results',
                parentId: 26
            }
        ]
    },
    {
        id: 34,
        label: 'WIDGETS',
        icon: "bi bi-hdd-stack",
        link: '/widgets',
    },
    // {
    //     id: 38,
    //     label: 'MENUITEMS.COMPONENTS.TEXT',
    //     icon: 'bi bi-layers',
    //     link:'/components'
    // },
    // {
    //     id: 38,
    //     label: 'MENUITEMS.DOCUMENTATION.TEXT',
    //     badge:'MENUITEMS.DOCUMENTATION.BADGE',
    //     icon: 'bi bi-file-earmark-text'
    // },
    {
        id: 52,
        label: 'APPS',
        isTitle: true
    },
    {
        id: 52,
        label: 'CALENDAR',
        icon: 'bi bi-calendar3',
        link:'/apps/calendar'
    },
    {
        id: 56,
        label: 'APIKEY',
        icon: 'bi bi-key',
        link:'/apps/api-key'
    },
    {
        id: 73,
        label: 'CONTACTS',
        icon: 'bi bi-person-square',
        link:'/apps/contact'
    },
    {
        id: 79,
        label: 'LEADERBOEARD',
        icon: 'bi bi-gem',
        link:'/apps/leaderboards'
    },
    {
        id: 83,
        label: 'MULTILEVEL',
        icon: 'bi bi-share',
        subItems: [
            {
                id: 84,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 83
            },
            {
                id: 85,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 83,
                subItems: [
                    {
                        id: 86,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 85
                    },
                    {
                        id: 87,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 85,
                        subItems: [
                            {
                                id: 76,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.1',
                                parentId: 87
                            },
                            {
                                id: 76,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.2',
                                parentId: 87,

                            }
                        ]
                    }
                ]
            }
        ]
    },
]
