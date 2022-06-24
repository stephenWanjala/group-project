
//gene represents permutation of slots as timetable for a single student group(looks like {5,22,14,1,...} )
module.exports= class Gene {
    
         public arrayOfSlots: Array<Number>;
         daysPerWeek:Number
         hoursPerDay:Number
         randomNumber:Number
    constructor(numInteger) {
         this.arrayOfSlots = Array<Number>
         this.daysPerWeek = InputData.prototype.getDaysPerWeek;
         this.hoursPerDay=InputData.prototype.getHoursPerDay

        // daysperwek & hoursperday should Be from inputdata.js

        this.numInteger = numInteger;
         this.randomNumber:Number=new Math.random()

        this.arrayOfSlots=new Array(this.daysPerWeek*this.hoursPerDay);
        let flag:Number[]=new Array(this.daysPerWeek*this.hoursPerDay);

        /*  generating an array of slot no corresponding to index of gene eg suppose index
		 *	is 2 then slotno will vary from 2*hours*days to 3*hours*days
		 */

         for (let i = 0; i < this.daysPerWeek*this.hoursPerDay; i++) {
            

            let temp
			while(flag[temp=this.randomNumber.nextInt(this.daysPerWeek*this.hoursPerDay)]==true){}
			flag[temp]=true;
			this.arrayOfSlots[j]=i*this.daysPerWeek*this.hoursPerDay + temp;

            /*	Slot[] slot=TimeTable.returnSlots();
			 *	if(slot[slotno[j]]!=null)System.out.print(slot[slotno[j]].subject+" ");
			 *	else console.log("break ");
			 */

        }


    }

    
    getNumInteger() {
        return this.numInteger;
    }
   

    
}