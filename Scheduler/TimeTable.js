import InputData from "./InputData";

export default class TimeTable {  
     public static slots=new Array<Slot>();
     
     constructor(){
         this.k=0
         this.subjectNo=0
         this.hourCount=1
         this.hours=InputData.hoursPerDay
         this.days=InputData.daysPerWeek
         this.nostgrp=InputData.noStudentGroup

        // creating as many slots as the no of blocks in overall timetable
         slot=new Array(this.hours*this.days*this.nostgrp)

        //  looping thru for every student group
        // be CIT,CIM....

        for(let i=0;i<this.nostgrp;i++){
            this.subjectNo=0

            // for every slot in a week for a student group

            const studentGroup:StudentGroup=InputData.studentGroup[i]

            // if all subjects have been assigned required hours we give
				// free periods

                if(this.subjectNo >=studentGroup.getNoOfSubjects()){
                    
        }
     }
}