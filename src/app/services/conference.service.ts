import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Conference } from '../model/conference.interface';

@Injectable()
export class ConferenceService {

    constructor() { }

    getConferences(): Conference[] {
        return [{
            name: 'Angular Conf Pakistan 2018',
            date: 'February 2018',
            organiser: 'Pakistan Open Source ™ & Angular Pakistan',
            url: 'https://osconf.org/'
        },
        {
            name: 'JS Pakistan Conf 2018',
            date: 'November 2018',
            organiser: 'Pakistan Open Source ™',
            url: 'https://osconf.org/'
        }];
    }

}
