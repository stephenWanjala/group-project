import { setFlagsFromString } from "v8";
import { Gene } from "./Gene";
import InputData from "./InputData"

export default class Chromosome {
    public static crossOverRate: number 
    public static mutationRate: number 
    public static hours=InputData.hoursPerDay
    public static days=InputData.daysPerWeek
    public static noStudentGroup=InputData.noStudentGroup
    public static noLecturer=InputData.noLecturer
    public static fitness:Double
    public static point:Number

    public gene:Array<Gene>=new Gene(Chromosome.noStudentGroup)
    
    constructor(){
        this.gene=new  Gene(Chromosome.noStudentGroup)

        for(let i=0;i<Chromosome.noStudentGroup;i++){
            this.gene[i]=new Gene(i)

    }

    getFitness=()=>{
        Chromosome.point=0
        fo(let i=0; i< Chromosome.hours*Chromosome.days; i++){

        }
    }
           
}
    
}