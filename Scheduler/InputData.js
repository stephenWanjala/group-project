
export default class InputData {
    public static crossOverRate: number = 1.0;
    public static mutationRate: number = 0.1;
    public static studentGroup=new Array<StudentGroup>();
    public static lecturer=new Array<Lecturer>();
    public static hoursPerDay: number 
    public static daysPerWeek: number
    public static noStudentGroup: number=10
    public static noLecturer: number

    constructor() {
        studentGroup = new Array<StudentGroup>(100);
        lecturer = new Array<Lecturer>(100);
    }


    classFormat=():Boolean=>{
        
    }

}