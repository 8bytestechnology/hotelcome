import { ChartOptions } from './widgets.model';

/**
 * Series Data
 */
function generateData(count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = "w" + (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

// otherWidgets
const otherWidgets = [
    {
        id: 1,
        title: "Brand Logo Design - MD",
        subTitle: "Graphics Work",
        subItem: [
            {
                id: 1,
                icon: "mdi mdi-numeric-1-circle",
                iconClass: "success",
                label: "Completed",
            },
            {
                id: 2,
                icon: "mdi mdi-numeric-3-circle",
                iconClass: "info",
                label: "In Progress",
            },
            {
                id: 3,
                icon: "mdi mdi-numeric-2-circle",
                iconClass: "primary",
                label: "To Do",
            },
        ],
        progressBar: [
            { id: 1, bgColor: "bg-success", width: 30 },
            { id: 2, bgColor: "bg-info", width: 50 },
            { id: 3, width: 20 },
        ],
    },
    {
        id: 2,
        title: "Redesign - Landing Page",
        subTitle: "UI/UX Design",
        subItem: [
            {
                id: 1,
                icon: "mdi mdi-numeric-3-circle",
                iconClass: "success",
                label: "Completed",
            },
            {
                id: 2,
                icon: "mdi mdi-numeric-0-circle",
                iconClass: "info",
                label: "In Progress",
            },
            {
                id: 3,
                icon: "mdi mdi-numeric-8-circle",
                iconClass: "primary",
                label: "To Do",
            },
        ],
        progressBar: [
            { id: 1, bgColor: "bg-success", width: 30 },
            { id: 2, bgColor: "bg-info", width: 0 },
            { id: 3, width: 70 },
        ],
    },
    {
        id: 3,
        title: "Ecommerce App for Web",
        subTitle: "CRM Project",
        subItem: [
            {
                id: 1,
                icon: "mdi mdi-numeric-10-circle",
                iconClass: "success",
                label: "Completed",
            },
            {
                id: 2,
                icon: "mdi mdi-numeric-8-circle",
                iconClass: "info",
                label: "In Progress",
            },
            {
                id: 3,
                icon: "mdi mdi-numeric-2-circle",
                iconClass: "primary",
                label: "To Do",
            },
        ],
        progressBar: [
            { id: 1, bgColor: "bg-success", width: 60 },
            { id: 2, bgColor: "bg-info", width: 25 },
            { id: 3, width: 15 },
        ],
    },
];

// Latest Sales
const latestsales = [
    {
        email: 'jordan.martino@hotelcom.com',
        price: '$1.95',
        tag:'Paid'
    },
    {
        email: 'nancy.martino@hotelcom.com',
        price: '$5.00',
        tag:'Pending'
    },
    {
        email: 'pieter.novitsky@hotelcom.com',
        price: '$2.05',
        tag:'Paid'
    },
    {
        email: 'Ashley@hotelcom.com',
        price: '$69.99',
        tag:'Cancelled'
    },
    {
        email: 'Heather@hotelcom.com',
        price: '$16.78',
        tag:'Cancelled'
    },
    {
        email: 'Jimenez@hotelcom.com',
        price: '$79.99',
        tag:'Paid'
    },
    {
        email: 'Daniel@hotelcom.com',
        price: '$87.00',
        tag:'Pending'
    },
    {
        email: 'Scott@hotelcom.com',
        price: '$42.32',
        tag:'Cancelled'
    }
]

// widgetsActivities
const widgetsActivities = [
    {
        id: 1,
        date: "25",
        weekDay: "Tue",
        time: "12:00am - 03:30pm",
        caption: "Meeting for campaign with sales team",
        subItem: [
            { id: 1, img: 'assets/images/users/avatar-1.jpg', name: 'Stine Nielsen' },
            { id: 2, img: 'assets/images/users/avatar-2.jpg', name: 'Jansh Brown' },
            { id: 3, img: 'assets/images/users/avatar-3.jpg', name: 'Dan Gibson' },
            { id: 4, imgNumber: "5", bgcolor: "bg-info" },
        ],
    },
    {
        id: 2,
        date: "20",
        weekDay: "Wed",
        time: "02:00pm - 03:45pm",
        caption: "Adding a new event with attachments",
        subItem: [
            { id: 1, img: 'assets/images/users/avatar-4.jpg', name: 'Frida Bang' },
            { id: 2, img: 'assets/images/users/avatar-5.jpg', name: 'Frida Bang' },
            { id: 3, img: 'assets/images/users/avatar-6.jpg', name: 'Simon Schmidt' },
            { id: 4, img: 'assets/images/users/avatar-7.jpg', name: 'Tosh Jessen' },
            { id: 5, imgNumber: "3", bgcolor: "bg-success" },
        ],
    },
    {
        id: 3,
        date: "17",
        weekDay: "Wed",
        time: "04:30pm - 07:15pm",
        caption: "Create new project Bundling Product",
        subItem: [
            { id: 1, img: 'assets/images/users/avatar-8.jpg', name: 'Nina Schmidt' },
            { id: 2, img: 'assets/images/users/avatar-1.jpg', name: 'Stine Nielsen' },
            { id: 3, img: 'assets/images/users/avatar-2.jpg', name: 'Jansh Brown' },
            { id: 4, imgNumber: "4", bgcolor: "bg-primary" },
        ],
    },
    {
        id: 4,
        date: "12",
        weekDay: "Tue",
        time: "10:30am - 01:15pm",
        caption: "Weekly closed sales won checking with sales team",
        subItem: [
            { id: 1, img: 'assets/images/users/avatar-1.jpg', name: 'Stine Nielsen' },
            { id: 2, img: 'assets/images/users/avatar-5.jpg', name: 'Jansh Brown' },
            { id: 3, img: 'assets/images/users/avatar-2.jpg', name: 'Dan Gibson' },
            { id: 4, imgNumber: "9", bgcolor: "bg-warning" },
        ],
    },
];

// widgetsTasks
const widgetsTasks = [
    {
        id: 1,
        forId: "task_one",
        text: "Review and make sure nothing slips through cracks",
        date: "15 Sep, 2021",
    },
    {
        id: 2,
        forId: "task_two",
        text: "Send meeting invites for sales upcampaign",
        date: "20 Sep, 2021",
    },
    {
        id: 3,
        forId: "task_three",
        text: "Weekly closed sales won checking with sales team",
        date: "24 Sep, 2021",
    },
    {
        id: 4,
        forId: "task_four",
        text: "Add notes that can be viewed from the individual view",
        date: "27 Sep, 2021",
    },
    {
        id: 5,
        forId: "task_five",
        text: "Move stuff to another page",
        date: "27 Sep, 2021",
    },
    {
        id: 6,
        forId: "task_six",
        text: "Styling wireframe design and documentation for velzon admin",
        date: "27 Sep, 2021",
    },
];

// Hot Product

const hotproducts = [
    {
        id: '1',
        image: 'assets/images/products/img-3.png',
        price: '99.94',
        name: '350 ml Glass Grocery Container'
    },
    {
        id: '2',
        image: 'assets/images/products/img-4.png',
        price: '99.94',
        name: 'Fabric Dual Tone Living Room Chair'
    },
    {
        id: '3',
        image: 'assets/images/products/img-5.png',
        price: '99.94',
        name: 'Crux Motorsports Helmet'
    },
    {
        id: '4',
        image: 'assets/images/products/img-6.png',
        price: '99.94',
        name: 'Half Sleeve T-Shirts (Blue)'
    }
]

// candidate
const candidate = [
    {
        id: '1',
        image: 'assets/images/users/avatar-2.jpg',
        name: 'Anna Adame',
        insta: 'Anna',
        designation: 'Web Developer'
    },
    {
        id: '2',
        image: 'assets/images/users/avatar-1.jpg',
        name: 'Patricia Cavin',
        insta: 'Patricia',
        designation: 'Web Developer'
    },
    {
        id: '3',
        image: 'assets/images/users/avatar-3.jpg',
        name: 'Jason Tran',
        insta: 'Jason',
        designation: 'Magento Developer'
    },
    {
        id: '4',
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Cheryl Moore',
        insta: 'Cheryl',
        designation: 'Product Designer'
    },
    {
        id: '5',
        image: 'assets/images/users/avatar-5.jpg',
        name: 'Jennifer Bailey',
        insta: 'Jennifer',
        designation: 'Marketing Director'
    }
]

const bank = [
    {
        id: '1',
        icon: 'visa-fill',
        cardcolor: 'success',
        card: 'Visa Card',
        amount: '8,500',
        state: true
    },
    {
        id: '2',
        icon: 'bank-card-2-line',
        cardcolor: 'info',
        card: 'Credit Card',
        amount: '8,326'
    },
    {
        id: '3',
        icon: 'mastercard-line',
        cardcolor: 'danger',
        card: 'Mastercard Card',
        amount: '8,400'
    }
]

export { otherWidgets,latestsales, widgetsActivities, widgetsTasks,  hotproducts, candidate, bank };
