import {expect, test} from "../../fixtures/hooks-fixture.ts";
import apiPathData from "../../data/api-data/api-path-data.json";
import restfulApiData from "../../data/api-data/restful-booker-api-module-data.json"

test("Api Testing",async({request})=>{
    const bookingIds=await request.get(`/booking`);
    console.log(await bookingIds.json());
})

// test("APi Test 2",async({request})=>{
//     const bookingDetails=await request.get("https://restful-booker.herokuapp.com/booking/1");
//     console.log(await bookingDetails.json());
// })

test("id - 8 [Restful-Booker > Booking] Verify that the user is able to fetch all the booking IDs using GET API and receive valid response", {
  tag:['@API','@UAT'],
  annotation: {
    type: "Test Case link",
    description: "https://dev.azure.com/wishinfinite/Wishinfinite/_workitems/edit/8"
  }},async({request})=>{
     const bookindIdsRes=await request.get(`${apiPathData.booking_path}`);
     const bookindIdsJsonRes=await bookindIdsRes.json();
     console.log(bookindIdsJsonRes);
     expect(bookindIdsRes.status()).toBe(200);
     expect(bookindIdsRes.statusText()).toBe('OK');
     //expect(bookindIdsRes.ok()).toBeTruthy();
     expect(bookindIdsRes.headers()['content-type']).toBe(restfulApiData.content_type);
     expect(bookindIdsJsonRes).not.toBeNull();
    
  })
  
  test("id - 9 [Restful-Booker > Booking] Verify that the user is able to fetch booking details for a booking id using GET API and receives", {
  tag:['@API','@UAT'],
  annotation: {
    type: "Test Case link",
    description: "https://dev.azure.com/wishinfinite/Wishinfinite/_workitems/edit/9"
  }
}
,async({request})=>{
  const bookingResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id}`);
  const bookingJsonResp = await bookingResp.json();
  console.log(bookingJsonResp);
  expect(bookingResp.status()).toBe(200);
  expect(bookingResp.statusText()).toBe('OK');
  expect(bookingJsonResp).not.toBeNull();
  expect(bookingJsonResp.firstname).toEqual(restfulApiData.first_name);
}
);

test("id - 10 [Restful-Booker > Booking] Verify that the user is able to create new booking using Post API and receive valid response", {
  tag:['@API','@UAT'],
  annotation:{
    type: "Test Case Link",
    description: "https://dev.azure.com/wishinfinite/Wishinfinite/_workitems/edit/9"
  }
}, async({request})=>{
  const createBookingRes=await request.post(`${apiPathData.booking_path}`,{
    data:restfulApiData.create_booking});
  const createBookingJsonRes=await createBookingRes.json();
  expect(createBookingRes.status()).toBe(200);
  expect(createBookingJsonRes.booking).toMatchObject(restfulApiData.create_booking)

}
);

test("id - 11 [Restful-Booker > Booking] Verify that the user is able to Update existing booking using Put API and receive valid response", {
  tag:['@API','@UAT'],
  annotation:{
    type: "Test Case Link",
    description: "https://dev.azure.com/wishinfinite/Wishinfinite/_workitems/edit/11"
  }
}, async({request,commonApiUtils})=>{
  const tokenValue =await commonApiUtils.createToken();
  const updateBookingRes=await request.put(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
    headers:{
     Cookie:`token=${tokenValue}`
    },
    data:restfulApiData.update_booking
  })
 const updateBookingJsonRes=await updateBookingRes.json();
 expect(updateBookingRes.status()).toBe(200);
 expect(updateBookingJsonRes).toMatchObject(restfulApiData.update_booking);
}
);

test('ID -12 - [Restful-Booker] Booking Verify that the user is able to partially update existing booking using PATCH API and receive val', {
  tag: ['@API', '@UAT'],
  annotation: {
    type: "Test Case Link",
    description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/12"
  },
}, async ({
  request,
  commonApiUtils
}) => {
  const apiToken = await commonApiUtils.createToken();
  const partialUpdateBookingResp = await request.patch(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
    headers: {
      Cookie: `token=${apiToken}`
    },
    data: restfulApiData.update_partial_booking
  })

  const partialUpdateBookingJsonResp = await partialUpdateBookingResp.json();
  expect(partialUpdateBookingResp.status()).toBe(200);
  expect(partialUpdateBookingJsonResp.firstname).toMatch(restfulApiData.update_partial_booking.firstname);
   expect(partialUpdateBookingJsonResp.lastname).toMatch(restfulApiData.update_partial_booking.lastname);
});

test('ID -13 - [Restful-Booker] Booking Verify that the user is able to delete existing booking using Delete API and receive valid re', {
  tag: ['@API', '@UAT'],
  annotation: {
    type: "Test Case Link",
    description: "https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/13"
  },
},async({
  request,
  commonApiUtils
}) => {
  const apiToken = await commonApiUtils.createToken();
 //console.log(apiToken)
  const deleteBookingResp = await request.delete(`${apiPathData.booking_path}/${restfulApiData.booking_id3}`, {
    headers: {
      Cookie: `token=${apiToken}`
    }
  });

  expect(deleteBookingResp.status()).toBe(201);
  expect(deleteBookingResp.statusText()).toBe("Created"); // NOTE: Status text 'Created' (201) is often incorrect for a successful DELETE (should be 204 No Content or 200 OK)

  const getBookingResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id3}`);
  expect(getBookingResp.status()).toBe(404);
  expect(getBookingResp.statusText()).toBe("Not Found");
});
//  import CryptoJS from "crypto-js";
//  import {test} from "@playwright/test"
 
//  test("encrypting.....",async({})=>{
// const encryptUserName=CryptoJS.AES.encrypt("admin","whishinfinite").toString();
//         console.log(encryptUserName);
// const encryptPassword=CryptoJS.AES.encrypt("password123","whishinfinite").toString();
// console.log(encryptPassword)
//  })
//  ;
