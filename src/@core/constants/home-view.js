import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Seize the Overspend!',
    subHeading: 'Meet your New Grocery Trip Companion',
    text: 'Kitchen Coin is an interactive credit card app designed to help users outline a strict grocery and food budget, discover the best bargains on food related items, and the best establishments for buying these items without breaking the bank. ',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}

export const brandSelectionContent = {
    heading: 'Why Choose Kitchen Coin',
    descriptions: [
        'The first of its kind, Kitchen Coin brings every thing grocery shopping related into one place. You not only get to budget with an essential shopping list in mind, you also get to avail promotions, socialize with like minded people, and use the in-app credit card.',
        'The app makes use of geolocation technology to assess the average cost of items in your area, to keep you from buying overpriced items, and also offering you an estimate on your expected damage on specific shopping trips.',
        'Kitchen Coin focuses on functionality and making a positive impact in every user’s life. By offering a line of credit and a budget cap, the app instills healthy habits and a motivation for users to avail discounts and bargains that ultimately reward them in the form of monthly savings.'
    ],
}

export const benefitsContent = {
    heading: 'Take Control of your Grocery Expenditure Today',
    text: 'Kitchen Coin makes planning for grocery trips easier and less frustrating by keeping you in line with your budget. The app is designed to offer a 360 degree solution to the dilemma of overspending on food via a multitude of features that make this possible for every single user.',
    benefits: [
        {
            title: 'Spending Overview',
            description: 'The app shows you a monthly report that outlines your spending habits and changes in this pattern.',
            icon: 'spending'
        },
        {
            title: 'Budgeting Cap',
            description: 'By setting a cap you are better able to monitor and control your expenditure. ',
            icon: 'budget-cap'
        },
        {
            title: 'Easy Gigs',
            description: 'Delivered at a time that suits you.',
            icon: 'gigs'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'Budget Maker',
            description: 'Users can set a number to your monthly grocery and food expenditure.',
            icon: 'budget-file'
        },
        {
            title: 'Set up Credit Card',
            description: 'Users can set a number to your monthly grocery and food expenditure.',
            icon: 'credit-card'
        },
        {
            title: 'Social Forum',
            description: 'Users can set a number to your monthly grocery and food expenditure.',
            icon: 'social-chat'
        },
        {
            title: 'Promote Businesses',
            description: 'Users can set a number to your monthly grocery and food expenditure.',
            icon: 'business-growth'
        },
    ]
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Are users the only ones who can avail line of credit?',
            answer: 'The answer will be here......',

        },
        {
            question: 'How much credit can I get as an individual app user?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up as a store, driver, or a customer?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Find Out How You Can Benefit from the App!',
    text: 'Sign up to be the first ones to download Kitchen Coin.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        },
        {
            icon: 'pinterest',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: 'Why Kitchen Coin', sectionId: 'whyUs' }
]
