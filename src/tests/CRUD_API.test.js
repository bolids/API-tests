const axios = require('axios');

async function getToken() {
    const basUrl = 'https://restful-booker.herokuapp.com';
    const credentials = { username: 'admin', password: 'password123' };

    const response = await axios.post(basUrl + '/auth', credentials, {
        headers: { 'Content-Type': 'application/json' }
    });

    const token = response.data["token"];
    console.log(`Auth token: ${token}`);

    return token;
}

describe('API testing', () => {
    const basUrl = 'https://restful-booker.herokuapp.com';

    it('Get Booking', async () => {
        console.log('Hello API');

        const token = "token=" + await getToken();
        const bookings_response = await axios.get(basUrl + '/booking', {
            headers: {
                'Accept': 'application/json'
            }
        });

        console.log(bookings_response.data);
        const booking_response = await axios.get(basUrl + '/booking/256', {
            headers: { 'Accept': 'application/json' }
        });

        console.log(booking_response.data);
        let firstName = booking_response.data["firstname"];
        console.log(firstName);

        //Assert
        expect(firstName).toBe("James");
   });

    it('Add Booking', async () => {
        console.log('Add Booking API test');

        const token = "token=" + await getToken();
        let addBoking_data={
          "firstname" : "Jim",
          "lastname" : "Brown",
          "totalprice" : 111,
          "depositpaid" : true,
          "bookingdates" : {
              "checkin" : "2018-01-01",
              "checkout" : "2019-01-01"
          },
          "additionalneeds" : "Breakfast"
        }
        let addBokingPostData = await axios.post(basUrl + '/booking', addBoking_data, {
            headers: {
                'Cookie': `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        console.log("addBokingPostData request data: " + addBokingPostData.data);
        console.log("addBokingPostData request status: " + addBokingPostData.status);

        // Assert
        expect(addBokingPostData.status).toBe(200);
    });

    it('Update Booking', async () => {
        console.log('Update Booking data API test');

        const token = "token=" + await getToken();
        let updateBooking_data = {
            "firstname" : "James",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }

        let updateBookingPostData = await axios.put(basUrl + '/booking/3071', updateBooking_data, {
            headers: {
                'Cookie': `${token}`,
                'Content-Type':  'application/json',
                'Accept': 'application/json'
            }
        });

        console.log("Update Booking request data: " + updateBookingPostData.data);
        console.log("Update Booking request status: " + updateBookingPostData.status);

        //Assert
        expect(updateBookingPostData.status).toBe(200);
    });

    it('PartialUpdateBooking', async () => {
        console.log('Partial Update Booking data API test');

        const token = "token=" + await getToken();
        let partialUpdateBooking_data = {
            "firstname" : "Jameson",
            "lastname" : "Brown"
        }

        let partialUpdateBookingPostData = await axios.patch(basUrl + '/booking/1959', partialUpdateBooking_data, {
            headers: {
                'Cookie': `${token}`,
                'Content-Type':  'application/json',
                'Accept': 'application/json'
            }
        });

        console.log("PartialUpdateBooking request data: " + partialUpdateBookingPostData.data);
        console.log("PartialUpdateBooking request status: " + partialUpdateBookingPostData.status);

        //Assert
        expect(partialUpdateBookingPostData.status).toBe(200);
    });

    it('Delete Booking', async () => {
        console.log('Delete Booking API test');

        const token = "token=" + await getToken();

        let deleteBokingPostData = await axios.delete(basUrl + '/booking/256', {
            headers: {
                'Cookie': `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        console.log("Delete booking request result: " + deleteBokingPostData.data);
        console.log("Delete booking request status: " + deleteBokingPostData.status);

        // Assert
        expect(deleteBokingPostData.status).toBe(201);
    });
});
