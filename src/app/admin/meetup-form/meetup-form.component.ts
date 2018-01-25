import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Meetup } from '../../model/meetup.interface';
import { Speaker } from '../../model/speaker.interface';


@Component({
  selector: 'app-meetup-form',
  styleUrls: ['./meetup-form.component.css'],
  templateUrl: './meetup-form.component.html',
})
export class MeetupFormComponent implements OnInit {
  @Input() meetup: Meetup;
  @Input() disable: boolean = false;
  @Input() speakers: Speaker[];
  @Output() submitEvent: EventEmitter<Meetup> = new EventEmitter<Meetup>();
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() speakerEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  form: FormGroup;
  talks: FormArray;
  selectedTalk: number = 0;
  selectedSpeaker: number = 0;

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
    });
    this.talks = this.form.get('talks') as FormArray;
    const subscribers = this.form.get('subscribers') as FormArray;
    if(this.meetup) {
      this.form.patchValue(this.meetup);
      this.meetup.talks.map((talk) => {
        let speakers = talk.speaker.map((speaker) => new FormControl(speaker._id, Validators.required));
        this.talks.push(this.createTalkGroup(speakers, talk));
      });
      this.meetup.subscribers.map((sub) => {
        subscribers.push(this.createSubscriberGroup(sub));
      });
    }
  }

  onSubmit(meetup: Meetup) {
    if(this.form.valid && !this.disable){
      this.submitEvent.emit(meetup);
    }
  }

  onCancel() {
    this.cancelEvent.emit(true);
  }

  onNewSpeaker() {
    this.speakerEvent.emit(true);
  }

  private createTalkGroup(speakers = [], talk = null): FormGroup {
    var talkGroup;
    if(talk){
      talkGroup = {
        _id: [talk._id],
        title: [talk.title, Validators.required],
        slides: [talk.slides],
        video: [talk.video],
        speaker: this.formBuilder.array(speakers)
      };
    } else {
      talkGroup = {
        title: ['', Validators.required],
        slides: [''],
        video: [''],
        speaker: this.formBuilder.array(speakers)
      };
    }
    return this.formBuilder.group(talkGroup);
  }

  private createSubscriberGroup(subscriber): FormGroup {
    const subscriberGroup = {
      _id: [subscriber._id],
      userID: [subscriber.userID],
      date: [subscriber.date],
      level: [subscriber.level],
      code: [subscriber.code]
    };
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

  onAddTalk() {
    this.talks.push(this.createTalkGroup());
    this.selectedTalk = this.talks.length - 1;
  }

  onAddSpeaker(talkIndex: number) {
    const speakers = this.talks.controls[talkIndex].get('speaker') as FormArray;
    speakers.push(new FormControl('', Validators.required));
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
