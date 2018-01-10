import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Meetup } from '../../model/meetup.interface';


@Component({
  selector: 'app-meetup-form',
  styleUrls: ['./meetup-form.component.css'],
  templateUrl: './meetup-form.component.html',
})
export class MeetupFormComponent implements OnInit {
  @Input() meetup: Meetup;
  @Output() onsubmit: EventEmitter<Meetup> = new EventEmitter<Meetup>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();
  form: FormGroup;
  talks: FormArray;
  selectedTalk: number = 0;
  selectedSpeaker: number = 0;
  disable: boolean = false;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      __v: [''],
      _id: [''],
      name: ['', Validators.required],
      sequenceNo: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      location: ['', Validators.required],
      city: ['', Validators.required],
      host: ['', Validators.required],
      talks: this.formBuilder.array([]),
      subscribers: this.formBuilder.array([])
    })
    this.talks = this.form.get('talks') as FormArray;
    const subscribers = this.form.get('subscribers') as FormArray;
    if(this.meetup) {
      this.meetup.talks.map((talk) => {
        let speakers = talk.speaker.map((speaker) => this.createSpeakerGroup());
        this.talks.push(this.createTalkGroup(speakers));
      });
      this.meetup.subscribers.map((sub) => {
        subscribers.push(this.createSubscriberGroup());
      })
      this.form.patchValue(this.meetup);
    }
  }
  onSubmit(meetup: Meetup) {
    if(this.form.valid){
      this.disable = true;
      this.onsubmit.emit(meetup);
    }
  }
  onCancel() {
   this.disable = true;
   this.cancel.emit(true);
  }
  private createTalkGroup(speakers = []): FormGroup {
    const talkGroup = {
      _id: [''],
      title: ['', Validators.required],
      slides: [''],
      video: [''],
      speaker: this.formBuilder.array(speakers)
    };
    return this.formBuilder.group(talkGroup);
  }
  private createSpeakerGroup(): FormGroup {
    const speakerGroup = {
      _id: [''],
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: [''],
      github: [''],
      linkedIn: [''],
      twitter: ['']
    };
    return this.formBuilder.group(speakerGroup);
  }
  private createSubscriberGroup(): FormGroup {
    const subscriberGroup = {
      _id: [''],
      userID: [''],
      date: [''],
      level: [''],
      code: ['']
    }
    return this.formBuilder.group(subscriberGroup);
  }
  isValid(name: string){
    const field = this.form.get(name);
    return field.invalid && (field.dirty || field.touched);
  }
  isValidTalk(index: number){
    const field = this.talks.at(index);
    return field.invalid && (field.dirty || field.touched);
  }
  isValidSpeaker(talkIndex: number, speakerIndex: number){
    const speakers = this.talks.at(talkIndex).get('speaker') as FormArray;
    const field = speakers.at(speakerIndex);
    return field.invalid && (field.dirty || field.touched);
  }
  isValidTalkField(name: string, index: number){
    const field = this.talks.controls[index].get(name);
    return field.invalid && (field.dirty || field.touched);
  }
  isValidSpeakerField(name: string, talkIndex: number, speakerIndex: number){
    const speakers = this.talks.controls[talkIndex].get('speaker') as FormArray;
    const field = speakers.at(speakerIndex).get(name);
    return field.invalid && (field.dirty || field.touched);
  }
  onAddTalk() {
    this.talks.push(this.createTalkGroup());
    this.selectedTalk = this.talks.length - 1;
  }
  onAddSpeaker(talkIndex: number) {
    const speakers = this.talks.controls[talkIndex].get('speaker') as FormArray;
    speakers.push(this.createSpeakerGroup());
    this.selectedSpeaker = speakers.length - 1;
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
    const speakers = this.talks.controls[talkIndex].get('speaker') as FormArray;
    speakers.removeAt(speakerIndex);
  }
}
