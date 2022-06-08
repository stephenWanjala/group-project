
export default class StudentGroup {
     static id
    static unit =[]
    lecturerId=[]
    hours=[]


    constructor(){
       this.unit = new Array<Unit>(10);
       hour=new Array<number>(10);
       this.lecturerId=new Array<number>(10);
    }


    setId(id){
        this.id=id;
    }

    setUnit(unit){
        this.unit=unit;
    }   

    setLecturerId(lecturerId){    //set lecturer id 
        this.lecturerId=lecturerId; 
    }

    setHours(hours){
        this.hours=hours;
    }

    getId(){
        return this.id;
    }
    
    getUnit(){
        return this.unit;
    }

    getLecturerId(){
        return this.lecturerId;
    }

    getHours(){
        return this.hours;
    }

    getLecturer(){
        return this.lecturer;
    }

    setLecturer(lecturer){
        this.lecturer=lecturer;
    }

    getStudentGroup(){
        return this.studentGroup;
    }

    setStudentGroup(studentGroup){
        this.studentGroup=studentGroup;
    }

    getStudentGroupId(){
        return this.studentGroupId;
    }




}