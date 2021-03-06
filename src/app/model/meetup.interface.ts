export interface Meetup {
  _id: string
  __v: number,
  sequenceNo: number,
  name: string,
  date:string,
  startTime:string,
  endTime:string,
  location:string,
  city:string,
  host:string,
  talks?:[
    {
      title : string ,
      slides? : string,
      video? : string,
      speaker? : [
        {
          _id?: string,
          name?: string,
          company?: string,
          email?: string,
          github?: string,
          twitter?: string,
          linkedIn?: string
        }
      ]
    }
  ],
  subscribers:[
    {
      user: string,
      date: string,
      confirmed: boolean
    }
  ]
}
