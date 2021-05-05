// Note, this requires our server to be running. We will look at how
// to automate this later. For now, it just creates this request object
// to use in our tests.
const request = require("supertest")("http://localhost:3000/api");

// Pull in chai
const expect = require("chai").expect;

// Some sample data to load the API
const test_data = [
  ["DELL", "https://example.com/1.jpg", "XPS", "D6FQ1Y3", "02-12-2021"],
  ["DELL", "https://example.com/2.jpg", "INSPIRON", "D6FQ1Y3", "02-12-2021"],
  ["APPLE", "https://example.com/3.jpg", "MAC", "D6FQ1Y3", "02-12-2021"],
  ["DELL", "https://example.com/4.jpg", "LATITUDE", "D6FQ1Y3", "02-12-2021"],
  ["LENOVO", "https://example.com/5.jpg", "ALIENWARE", "D6FQ1Y3", "02-12-2021"]

];

describe("DELETE /devices", function () {
  it("Deletes all devices", async function () {
    const response1 = await request.delete("/devices");
    expect(response1.status).to.eql(200);
    // expect(response.body.data.length).to.eql(30);
    const response2 = await request.get("/devices");
    expect(response2.status).to.eql(200);
    expect(response2.body.length).to.eql(0);
  });
});

describe("POST /devices", function () {
  it("Adds a new device", async function () {
    const response = await request
      .post("/devices")
      .send({ company: test_data[0][0], author: test_data[0][1] });

    expect(response.status).to.eql(200);
  });
});


describe("GET /devices", function () {
  it("returns all devices", async function () {
    await request.delete("/devices");

    for (let device of test_data) {
      await request
        .post("/devices")
        .send({ company: device[0], author: device[1] });

    }

    const response = await request.get("/devices");

    expect(response.status).to.eql(200);
    expect(response.body.length).to.eql(test_data.length);
  });
});

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });