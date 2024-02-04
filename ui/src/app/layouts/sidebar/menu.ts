import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 0,
    label: 'MENUITEMS.VERSION',
    isTitle: true
  },
  {
    id: 1,
    label: 'MENUITEMS.DASHBORAD',
    icon: "bi bi-speedometer2",
    link: '/'
  },

  {
    id: 2,
    label: 'MENUITEMS.ROOMS',
    link: '/team',

  },
  {
    id: 3,
    label: 'MENUITEMS.GUEST.TEXT',
    link: '/team',
    subItems: [
      {
        id: 21,
        label: 'MENUITEMS.GUEST.LIST.CHECKIN',
        parentId: 3
      },
      {
        id: 22,
        label: 'MENUITEMS.GUEST.LIST.CHECKOUT',
        parentId: 3
      },
    ]

  },
  {
    id: 4,
    label: 'MENUITEMS.DEVICES',
    link: '/team',
  },

  {
    id: 5,
    label: 'MENUITEMS.CALENDER',
    icon: 'bi bi-calendar3',
    link: '/calendar'
  },

  {
    id: 6,
    label: 'MENUITEMS.CALL',
    icon: 'bi bi-person-square',
    link: '/call'
  },
  {
    id: 7,
    label: 'MENUITEMS.SETTINGS',
    link: '/settings',
    parentId: 26
  },
  {
    id: 8,
    label: 'MENUITEMS.FAQS',
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
