import { Component, OnInit } from '@angular/core';
import { Speaker } from '../../model/speaker.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from '../../services/speaker.service';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit {
    disable: boolean = false;
    speaker: Speaker;
    constructor(private route: ActivatedRoute, 
                private router: Router, 
                private service: SpeakerService) { }

    ngOnInit(){
        this.speaker = this.route
                        .snapshot
                        .data
                        .speaker
                        .data;
    }

    handleSubmit(speaker: Speaker){
        if(!this.disable){
            this.disable = true;
            this.service.update(speaker)
                .first()
                .subscribe(val => this.router.navigate(['../../'], { relativeTo: this.route }),
                    err => this.disable = false);
        }
    }

    onCancel(event: boolean){
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
}