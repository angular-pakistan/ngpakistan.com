import { Component, OnInit, Input } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meetup-form',
  styleUrls: ['./meetup-form.component.css'],
  templateUrl: './meetup-form.component.html',
})
export class MeetupFormComponent implements OnInit {
  @Input() meetup: Meetup;
  form: FormGroup;
  talks: FormArray;
  selectedTalk: number = 0;
  selectedSpeaker: number = 0;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      if(this.meetup){
        let talks = this.meetup.talks.map((meetup) => {
          let speakers = meetup.speaker.map((speaker) => this.formBuilder.group({
            name: [speaker.name],
            company: [speaker.company],
            email: [speaker.email],
            github: [speaker.github],
            linkedIn: [speaker.linkedIn],
            twitter: [speaker.twitter]
          }))
          
          return this.formBuilder.group({
            title: [meetup.title],
            slides: [meetup.slides],
            video: [meetup.video],
            speakers: this.formBuilder.array(speakers)
          });
        });

        this.form = this.formBuilder.group({
          details: this.formBuilder.group({
            name: [this.meetup.name],
            sequenceNo: [this.meetup.sequenceNo],
            date: [this.meetup.date],
            startTime: [this.meetup.startTime],
            endTime: [this.meetup.endTime],
            location: [this.meetup.location],
            city: [this.meetup.city],
            host: [this.meetup.host],
          }),
          talks: this.formBuilder.array(talks)
        })
      } else {
        this.form = this.formBuilder.group({
          details: this.formBuilder.group({
            name: [''],
            sequenceNo: [''],
            date: [''],
            startTime: [''],
            endTime: [''],
            location: [''],
            city: [''],
            host: [''],
          }),
          talks: this.formBuilder.array([])
        })
      }
      this.talks = this.form.get('talks') as FormArray;
      console.log(this.talks.controls[1]);
  }
  onSubmit(meetup) {
    console.log(meetup);
  }
  private createTalkGroup(): FormGroup {
    const talkGroup = {
      title: [''],
      slides: [''],
      video: [''],
      speakers: this.formBuilder.array([])
    };
    return this.formBuilder.group(talkGroup);
  }
  private createSpeakerGroup(): FormGroup {
    const speakerGroup = {
      name: [''],
      company: [''],
      email: [''],
      github: [''],
      linkedIn: [''],
      twitter: ['']
    };
    return this.formBuilder.group(speakerGroup);
  }
  onAddTalk() {
    this.talks.push(this.createTalkGroup());
    this.selectedTalk = this.talks.length - 1;
  }
  onAddSpeaker(talkIndex: number) {
    let speakers = this.talks.controls[talkIndex].get('speakers') as FormArray;
    speakers.push(this.createSpeakerGroup());
  }
  onShowSpeaker(index: number) {
    this.selectedSpeaker = index;
  }
  onShowTalk(index: number){
    this.selectedTalk = index;
    this.selectedSpeaker = 0;
  }
  removeTalk(index: number){
    this.talks.removeAt(index);
  }
  removeSpeaker(talkIndex: number, speakerIndex:number){
    let speakers = this.talks.controls[talkIndex].get('speakers') as FormArray;
    speakers.removeAt(speakerIndex);
  }
}
