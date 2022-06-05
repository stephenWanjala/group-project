
//gene represents permutation of slots as timetable for a single student group(looks like {5,22,14,1,...} )
class Gene {
    
    constructor(numInteger) {
        let arrayOfSlots = [];
        let daysPerWeek = 5;
        let hoursPerDay = 8;

        // daysperwek & hoursperday should Be from inputdata.js

        this.numInteger = numInteger;
        let randomNumber=new RandomNumber();

        arrayOfSlots=new Array(daysPerWeek*hoursPerDay);
        let flag=new Array(daysPerWeek*hoursPerDay);

        /*  generating an array of slot no corresponding to index of gene eg suppose index
		 *	is 2 then slotno will vary from 2*hours*days to 3*hours*days
		 */

         for (let i = 0; i < daysPerWeek*hoursPerDay; i++) {
            

            let temp
			while(flag[temp=randomNumber.nextInt(days*hours)]==true){}
			flag[temp]=true;
			arrayOfSlots[j]=i*days*hours + temp;

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