import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Speaker } from '../../model/speaker.interface';
import { SpeakerService } from '../../services/speaker.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-manage-speakers',
  templateUrl: './manage-speakers.component.html',
  styleUrls: ['./manage-speakers.component.css']
})
export class ManageSpeakersComponent implements OnInit {
    speakers: Speaker[];
    constructor(private route: ActivatedRoute,
                private service: SpeakerService,
                private location: Location) {}

    ngOnInit() {
        this.speakers = this.route
                            .snapshot
                            .data
                            .speakers
                            .data;
    }

    onDelete(speaker: Speaker){
        if(confirm(`Are you sure you want to delete ${speaker.name}?`)){
            this.service.delete(speaker._id).first()
                .subscribe(val => this.service.getAll().first()
                    .subscribe(res => this.speakers = res.data));
        }      
    }

}
