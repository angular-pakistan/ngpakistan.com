import { Component, OnInit } from '@angular/core';
import { Speaker } from '../../model/speaker.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from '../../services/speaker.service';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent {
    disable = false;

    constructor(private route: ActivatedRoute, 
                private router: Router, 
                private service: SpeakerService) { }

    handleSubmit(speaker: Speaker) {
        if (!this.disable) {
            this.disable = true;
            this.service.save(speaker)
                .first()
                .subscribe(val => this.router.navigate(['../'], { relativeTo: this.route }),
                    err => this.disable = false);
        }
    }

    onCancel(event: boolean) {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
