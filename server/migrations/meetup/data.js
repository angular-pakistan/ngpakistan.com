const mongoose = require( 'mongoose' );
const meetups = [
    {
    sequenceNo: 1,
    name: 'Angular JS Meetup',
    date: '2017-01-06',
    startTime: '19:30',
    endTime: '22:00',
    location: 'Attribe Solutions, Shahra-e-Faisal, Karachi',
    city: 'Karachi',
    host: 'Attribe Solutions',
    talks:[],
    subscribers:[]
    },
    {
    sequenceNo: 2,
    name: 'Angular JS Meetup',
    date: '2017-04-22',
    startTime: '14:00',
    endTime: '16:00',
    location: '10Pearls University, 8th Floor, Parsa Tower, Shahra-e-Faisal, Karachi',
    city: 'Karachi',
    host: '10Pearls University',
    talks:[],
    subscribers:[]
    },
    {
    sequenceNo: 3,
    name: 'Angular JS Meetup',
    date: '2017-05-24',
    startTime: '16:00',
    endTime: '19:30',
    location: 'Folio3 - 805 Business Center, PECHS Block-6, Shahra-e-Faisal, Karachi',
    city: 'Karachi',
    host: 'Folio3',
    talks:[{
        title: 'An Insight into Navigation and Routing in Angular2',
        slides: '',
        video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FngPakistan%2Fvideos%2F432600710436676%2F&show_text=0&width=560',
        speaker:[]
    },
    {
        title: 'Dependency Injection in Angular 2 - An Introduction',
        slides: '',
        video: '',
        speaker:[]
    },
    {
        title: 'Angular & ngrx',
        slides: 'https://slides.com/ahsanayaz/angular-ngrx',
        video: '',
        speaker:[]
    },
    {
        title: 'Creating & Publishing an Open Source Angular 2 Library',
        slides: 'http://bit.ly/2ruZS10',
        video: '',
        speaker:[]
    },
    {
        title: 'The Miraculous Async Await ES7',
        slides: '',
        video: '',
        speaker:[]
    }],
    subscribers:[]
    },
    {
    sequenceNo: 4,
    name: 'Angular JS Meetup',
    date: '2017-09-14',
    startTime: '18:00',
    endTime: '20:30',
    location: 'Recurship - House 9/A, Block A, SMCHS, Karachi',
    city: 'Karachi',
    host: 'Recurship',
    talks: [{
        title: 'Building Angular Applications',
        slides: 'https://goo.gl/aUpkTc',
        video: 'https://www.youtube.com/embed/AkI8pMuTWK8',
        speaker: []
    },
    {
        title: 'Component Communications in Angular',
        slides: '',
        video: 'https://www.youtube.com/embed/6UTfYN2--i8',
        speaker: []
    },
    {
        title: 'How to boost Angular Development',
        slides: 'https://goo.gl/VztemX',
        video: 'https://www.youtube.com/embed/LCgj4ecujVs',
        speaker: []
    },
    {
        title: 'Creating Progressive Web Apps Using Angular',
        slides: 'https://goo.gl/CMoYzE',
        video: 'https://www.youtube.com/embed/LXo-NnGVpS0',
        speaker: []
    },
    {
        title: 'Deploying Super Responsive Angular Apps in Production',
        slides: 'https://goo.gl/bUFaa3',
        video: 'https://www.youtube.com/embed/SxqUfdMfEi0',
        speaker: []
    }],
    subscribers:[]
    },
    {
    sequenceNo: 5,
    name: 'Angular JS Meetup',
    date: '2017-10-25',
    startTime: '18:00',
    endTime: '20:30',
    location: 'DotZero - 14th Floor, Dilkusha Forum, Main Tariq Road, Karachi',
    city: 'Karachi',
    host: 'DotZero',
    talks:[{
        title: 'Team Angular Pakistan, OS Conf Pakistan and more',
        slides: 'http://bit.ly/angular-pakistan-meetup5-intro-talk',
        video: 'https://www.youtube.com/embed/KQrLPkTHUu0',
        speaker: []
    },
    {
        title: 'Angular Modules - The Mystery of ngModules',
        slides: 'http://slides.com/faris-ah/deck#',
        video: 'https://www.youtube.com/embed/syQ97PXrA9I',
        speaker: []
    },
    {
        title: 'Introduction to Observables and RxJs',
        slides: 'http://slides.com/abdulmoiz/deck-4#/',
        video: 'https://www.youtube.com/embed/6MixBvb5hZ0',
        speaker: []
    },
    {
        title: 'Geo fire Query with Angular 2+',
        slides: '',
        video: '',
        speaker: []
    },
    {
        title: 'Angular v4 Advanced Routing',
        slides: 'https://goo.gl/GxwxGA',
        video: 'https://www.youtube.com/embed/EnHrxPSZukI',
        speaker: []
    },
    {
        title: 'Javascript difference between es5/es6/es7 and usage',
        slides: '',
        video: '',
        speaker: []
    }
    ],
    subscribers:[]
    },
    {
    sequenceNo: 6,
    name: 'Angular JS Meetup',
    date: '2017-12-20',
    startTime: '18:00',
    endTime: '20:00',
    location: '10Pearls University, 8th Floor, Parsa Tower, Shahra-e-Faisal, Karachi',
    city: 'Karachi',
    host: '10Pearls',
    talks:[
        {
        title: 'Performance Optimizations in Angular',
        slides: 'http://bit.ly/ng-pk-m6-talk-1',
        video: '',
        speaker: [new mongoose.Types.ObjectId("5a5dd1f090793a0766a19f3b")]
        },
        {
        title: 'The power of decorators in TypeScript',
        slides: 'http://bit.ly/ng-pk-m6-talk-3',
        video: '',
        speaker: [new mongoose.Types.ObjectId("5a5dd1f090793a0766a19f3b")]
        },
        {
        title: 'RxJS Hot and Cold Observable',
        slides: 'http://bit.ly/ng-pk-m6-talk-2',
        video: '',
        speaker: []
        },
        {
        title: 'Building Better Apps with Angular V5 & beyond',
        slides: '',
        video: '',
        speaker: []
        },
    ],
    subscribers:[]
    }
];

module.exports.meetups = meetups;