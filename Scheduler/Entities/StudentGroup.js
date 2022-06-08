
export default class StudentGroup {
     static id:number;
    public static unit:Array<String>;
    lecturerId:number[]
    hours:number[]
    nosubject:number


    constructor(){
      StudentGroup.unit=new Array<String>(10);
       this.lecturerId=new Array<number>(10);

       this.hours=new Array<number>(10);
       
    }




}