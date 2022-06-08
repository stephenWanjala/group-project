
import Slot from "./Entities/Slots";
import { Gene } from "./Gene";
import InputData from "./InputData"
import TimeTable from "./TimeTable";

export default class Chromosome {
    public static crossOverRate: number 
    public static mutationRate: number 
    public static hours=InputData.hoursPerDay
    public static days=InputData.daysPerWeek
    public static noStudentGroup=InputData.noStudentGroup
    public static noLecturer=InputData.noLecturer
    public static fitness:Number
    public static point:Number

    public gene:Array<Gene>=new Gene(Chromosome.noStudentGroup)
    
    constructor(){
        this.gene=new  Gene(Chromosome.noStudentGroup)

        for(let i=0;i<Chromosome.noStudentGroup;i++){
            this.gene[i]=new Gene(i)

    }

    Chromosome.fitness=this.getFitness()

}

    getFitness=()=>{
        Chromosome.point=0
        fo(let i=0; i< Chromosome.hours*Chromosome.days; i++){
            const lecturerList:Array<Number>=new Array<Number>()

            for(let j=0; j<Chromosome.noStudentGroup; j++){{
               const slot:Slot

               if(TimeTable.slots[this.gene[j].arrayOfSlots[i]]!=null){
                   slot=TimeTable.slots[this.gene[j].arrayOfSlots[i]]
               }  else{
                   slot=null
               }


            //    check if slot is now !null

            if(slot!=null){
                if(lecturerList.includes(slot.lecturerId)){
                    Chromosome.point++
                }   else{ 
                    lecturerList.push(slot.lecturerId)  
                }
            }
            }
            
        }
    }

    // point


Chromosome.fitness=1-(Chromosome.point/((Chromosome.noStudentGroup)*Chromosome.hours*Chromosome.days))
Chromosome.point=0
return  Chromosome.fitness
           
}



// // printing fNal Table

// printFinalTimetaBle=()=>{
//     	//for each student group separate time table
//    for(let i=0; i<Chromosome.noStudentGroup; i++){  

//     //status used to get name of student grp because in case first class is free it will throw error
//     // nu;ll
//     status:Boolean=false
//     l:Number=0


//         while (!status) {

//             if(TimeTable.slots[this.gene[i].arrayOfSlots[l]]!=null){
//                 status=true

//             }
            
            
//         }
//         i++

//    }


    
}