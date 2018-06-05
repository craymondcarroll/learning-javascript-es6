

let restaurant = {

    name: 'ASB',
    guestCapacity: 74,
    guestCount: 0,
    checkAdvailabilty: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <=seatsLeft;
    },

    seatParty: function (partySize) {
        let seatsAvailable = this.checkAdvailabilty(partySize);
          if(seatsAvailable) {
                this.guestCount +=partySize;
         }
    },

    removeParty: function (partySize) {

        if(this.guestCount >= partySize) {
            this.guestCount =-  partySize;
        }

    }

}


restaurant.seatParty(4);
restaurant.seatParty(34);

console.log(restaurant.guestCount);
