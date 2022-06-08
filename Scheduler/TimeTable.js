import InputData from "./InputData";
import Slot from "./Entities/Slots";

export default class TimeTable {  
     public static slots:Array<Number>=new Array<Number>;
     
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

            const studentGroup=InputData.studentGroup[i]

            // if all subjects have been assigned required hours we give
				// free periods

                if(this.subjectNo >=studentGroup){
                    TimeTable.slots[k++]=null
        }   else{
            // create new slots
            TimeTable.slots[k++]=
            new Slot(studentGroup,studentGroup.lecturerId[this.subjectNo],studentGroup.unit[this.subjectNo])   

            // 	// suppose CIT 101 has to be taught for 5 hours then we make 5
					// slots for CIT 101, we keep track through hourcount
             if(this.hourCount <studentGroup.hours[this.subjectNo]){
                 this.hourCount++
        }  else{
            this.hourCount=1
            this.subjectNo++
        }
     } 
}
}
}