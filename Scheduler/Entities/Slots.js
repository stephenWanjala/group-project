export default class Slot{
    public studentGroup:StudentGroup;
    public lecturerId:number;
    public unit:String
// empty constructor to allow for free slots/periods
    constructor(){}


    constructor(studentGroup:StudentGroup,lecturerId:number,unit:String){
        this.studentGroup=studentGroup;
        this.lecturerId=lecturerId;
        this.unit=unit;
    }
}