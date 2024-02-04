import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.VERSION',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBORAD',
    icon: "bi bi-speedometer2",
    link: '/'
  },

  {
    id: 3,
    label: 'MENUITEMS.ROOMS',
    icon: "bi bi-houses",
    link: '/team',

  },
  {
    id: 4,
    label: 'MENUITEMS.GUEST.TEXT',
    link: '/team',
    icon: "bi bi-people-fill",
    subItems: [
      {
        id: 41,
        label: 'MENUITEMS.GUEST.LIST.CHECKIN',
        link: '/team',
        icon: 'bi bi-person-add',
        parentId: 4,
       
      },
      {
        id: 42,
        label: 'MENUITEMS.GUEST.LIST.CHECKOUT',
        link: '/team',
        icon: 'bi bi-person-dash',
        parentId: 4
      },
    ]

  },
  {
    id: 5,
    label: 'MENUITEMS.DEVICES',
    link: '/team',
    icon: "bi bi-hdd-network-fill",
  },

  {
    id: 6,
    label: 'MENUITEMS.CALENDER',
    icon: 'bi bi-calendar3',
    link: '/calendar'
  },

  {
    id: 7,
    label: 'MENUITEMS.CALL',
    icon: 'bi bi-telephone',
    link: '/call',
  },
  {
    id: 8,
    label: 'MENUITEMS.SETTINGS',
    link: '/settings',
    icon: 'bi bi-gear',
    parentId: 26
  },
  {
    id: 9,
    label: 'MENUITEMS.FAQS',
    icon: 'bi bi-patch-plus-fill',
    link: '/faqs',
  },
  //{
  //    id: 79,
  //    label: 'MENUITEMS.APPS.LIST.LEADERBOEARD',
  //    icon: 'bi bi-gem',
  //    link:'/leaderboards'
  //},
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
