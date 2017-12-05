import { ContactUs } from '../model/contactus.interface';
import { Meetup } from '../model/meetup.interface';
import { User } from '../model/user.interface';

export const TestData = {
    contactus: [
        {
        name: "John Doe",
        email: "john@email.com",
        subject: "Feedback",
        message: "The event was awesome!"
        },
        {
        name: "Mary Doe",
        email: "mary@email.com",
        subject: "Message",
        message: "The event was okay."
        },
        {
        name: "Jack Doe",
        email: "jack@email.com",
        subject: "Feedback",
        message: "The event could do better."
        },
    ],
    meetup: [
        {
        _id: "5a1d655aa7b5841dc5739868",
        sequenceNo: 3,
        date: "5-13-2017",
        startTime: "12:45",
        endTime: "1:45",
        location: "NED University",
        city: "Karachi",
        name: "Angular Event 1",
        host: "HostName",
        __v: 0,
        subscribers: [
            {
                userID: "id0",
                code: 34,
                level: 24,
                date: "12-12-2017"
            },
            {
                userID: "id1",
                code: 34,
                level: 24,
                date: "12-12-2017"
            }
        ]
        },
        {
        _id: "5a1d655aa7b5841dc5739869",
        sequenceNo: 4,
        date: "12-29-2017",
        startTime: "12:45",
        endTime: "1:45",
        location: "IBA",
        city: "Karachi",
        name: "Angular Event 2",
        host: "Host",
        __v: 0,
        subscribers: [
            {
                userID: "id0",
                code: 34,
                level: 24,
                date: "12-12-2017"
            },
            {
                userID: "id1",
                code: 34,
                level: 24,
                date: "12-12-2017"
            }
        ]
        },
    ],
    user: [
        {
        name: 'John Doe',
        email1: 'john@email.com',
        email2: 'john@gmail.com',
        phone1: '+923312232434',
        phone2: '+923382717312',
        dob: '3-3-1993',
        github: 'github.com/johndoe',
        facebook: 'facebook.com/johndoe',
        twitter: 'twitter.com/johndoe',
        linkedin: 'linkedin.com/johndoe',
        password: 'password'
        },
        {
        name: 'Mary Doe',
        email1: 'mary@email.com',
        email2: 'mary@gmail.com',
        phone1: '+923312232434',
        phone2: '+923382717312',
        dob: '3-3-1993',
        github: 'github.com/marydoe',
        facebook: 'facebook.com/marydoe',
        twitter: 'twitter.com/marydoe',
        linkedin: 'linkedin.com/marydoe',
        password: 'password'
        }
    ]
}