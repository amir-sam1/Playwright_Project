import{test, expect, request} from"@playwright/test"

test("1 get user bu Id", async({request})=>{

    const baseUrl = 'https://reqres.in/'

    //use pw request api/users/2 to get single user
    const response = await request.get(baseUrl +'api/users/2')

    //verify that response status is 200
    expect(response.status()).toBe(200)

    //extract json from body from response then make sure the user returned with id 2 an email value
    const resopnseBodyJson = await respone.json()
    expect(resopnseBodyJson.data.id).toBe(2)
    expect(resopnseBodyJson.data.email).toBeTruthy()

    //print response body
    console.log(resopnseBodyJson)

})

test('2 get users with page number', async({request})=>{
    
    const baseUrl = 'https://reqres.in/'

    //user pw request api/users/ to get users with para page=2
    const response = await request.get(baseUrl +'api/users', {
        params: {
            page: 2

        }
    })

    //verify that response status code 200, then print the response url
    expect(response.status()).toBe(200)
    console.log(response.url())

    //extract json body from response 
    const resopnseBodyJson = await response.json()

    //verify that page number value is 2
    expect(resopnseBodyJson.page).toBe(2)

    //verify that total numbers of users is 12
    expect(resopnseBodyJson.total).toBe(12)

    //verify that first user id returned value is 7
    expect(resopnseBodyJson.data[0].id).toBe(7)

    //print the response body
    console.log(resopnseBodyJson)
    
    })

test('3 create new user', async({request})=>{

    const baseUrl = 'https://reqres.in/'



    //use pw request '/api/users' to create new user with request data {name, job}

    const response = await request.post(baseUrl +'api/users' ,{
        data: {
         "name": "amir",
         "job": "Tester"
        },
         headers:{
            'x-api-key': 'reqres-free-v1'
        }
    })

    //verify that response status is 201
    expect(response.status()).toBe(201)

    //extract json body from response than make sure the user returned with the same name and job sent and also has an id value
    const responseJsonBody = await response.json()
    expect(responseJsonBody.name).toBe('amir')
    expect(responseJsonBody.job).toBe('Tester')
    expect(responseJsonBody.id).toBeTruthy()

    //print response body
    console.log(responseJsonBody)







})


test('update user', async({request})=>{

    const baseUrl = 'https://reqres.in/'

    // use pw request '/api/users/2' to update job value using put method
    const response = await request.put(baseUrl + 'api/users/2', {
        data:{
         "name": "amir",
         "job": "QC"

        },
        headers:{
            'x-api-key': 'reqres-free-v1'
        }
    })

 
    //verify that response status is 200
    // expect(response.status()).toBe(200)

    //extract json body from response than make sure the user returned with the same name but updated job
    const responseJsonBody = await response.json()

    //print the response body 
    console.log(responseJsonBody)





})


test('delete user', async({request})=>{
    const baseUrl = 'https://reqres.in/'

    //use pw request /api/users/2' to delete user

    const response = await request.delete(baseUrl + 'api/users/2', {
        headers:{
            'x-api-key': 'reqres-free-v1'
        }
    })
    
    // verify that response status 204
    expect(response.status()).toBe(204)


})
