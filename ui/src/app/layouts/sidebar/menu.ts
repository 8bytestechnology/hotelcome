import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARD.TEXT',
        icon: "bi bi-speedometer2",
        link: '/',
    },
   

  //{
  //  id: 28,
  //  label: 'MENUITEMS.EXTRAPAGES.LIST.PROFILE',
  //  parentId: 26,
  //  subItems: [

  //  ]
  //},

  {
    id: 27,
    label: 'MENUITEMS.EXTRAPAGES.LIST.SIMPLEPAGE',
    link: '/profile',
    parentId: 26
  },
  {
    id: 27,
    label: 'MENUITEMS.EXTRAPAGES.LIST.SETTINGS',
    link: '/settings',
    parentId: 26
  },
  {
    id: 29,
    label: 'MENUITEMS.EXTRAPAGES.LIST.TEAM',
    link: '/team',
    parentId: 26
  },

  {
    id: 31,
    label: 'MENUITEMS.EXTRAPAGES.LIST.FAQS',
    link: '/faqs',
    parentId: 26
  },
    {
        id: 34,
        label: 'MENUITEMS.WIDGETS.TEXT',
        icon: "bi bi-hdd-stack",
        link: '/widgets',
    },
  
  
    {
        id: 52,
        label: 'MENUITEMS.APPS.LIST.CALENDAR',
        icon: 'bi bi-calendar3',
        link:'/calendar'
    },
  
    {
        id: 73,
        label: 'MENUITEMS.APPS.LIST.CONTACTS',
        icon: 'bi bi-person-square',
        link:'/contact'
    },
    {
        id: 79,
        label: 'MENUITEMS.APPS.LIST.LEADERBOEARD',
        icon: 'bi bi-gem',
        link:'/leaderboards'
    },
    //{
    //    id: 83,
    //    label: 'MENUITEMS.MULTILEVEL.TEXT',
    //    icon: 'bi bi-share',
    //    subItems: [
    //        {
    //            id: 84,
    //            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
    //            parentId: 83
    //        },
    //        {
    //            id: 85,
    //            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
    //            parentId: 83,
    //            subItems: [
    //                {
    //                    id: 86,
    //                    label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
    //                    parentId: 85
    //                },
    //                {
    //                    id: 87,
    //                    label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
    //                    parentId: 85,
    //                    subItems: [
    //                        {
    //                            id: 76,
    //                            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.1',
    //                            parentId: 87
    //                        },
    //                        {
    //                            id: 76,
    //                            label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.2',
    //                            parentId: 87,

    //                        }
    //                    ]
    //                }
    //            ]
    //        }
    //    ]
    //},
]
