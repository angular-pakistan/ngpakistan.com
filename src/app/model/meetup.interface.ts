export interface Meetup {
  _id: string,
  __v: number,
  sequenceNo: number,
  name: string,
  date:string,
  startTime:string,
  endTime:string,
  location:string,
  city:string,
  host:string,
  talks:[
    {
      title : string ,
      slides : string,
      video : string,
      speaker : [
        {
          name : string,
          company : string,
          email : string,
          github : string ,
          linkedIn : string,
          twitter : string
        }
      ]
    }
  ],
  subscribers:[
    {
      userID: string,
      date: string,
      level: number,
      code: number
    }
  ]
}
