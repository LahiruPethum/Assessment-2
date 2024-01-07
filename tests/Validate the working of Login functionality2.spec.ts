import { test, expect } from '@playwright/test';

const URL = "https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=";

test('validate login using valid credencials', async ({ request }) => {


    // let response = await request.post(
    //     URL,
    //     {
    //         data: {
    //             userid: "pethum013@gmail.com",
    //             password: "petMAX123@"
    //         }

    //     }
    // );

    const postData = new URLSearchParams();
    postData.append('login', 'pethum013@gmail.com');
    postData.append('password', 'petMAX123@');
    postData.append('id', 'ca4d6970-f370-4eb1-9603-04a3fa322fae');
    postData.append('redirectUri', '/action/showPreferences?logout=true&menuTab=AccountInfo');
    postData.append('loginUrl', '/action/doLogin?prg140729=71af4298-eb2e-4515-b642-d1d9bd3d809c');
    postData.append('submitButton', 'Log In');

    let response = await request.post(
        URL,
        {
            data: postData.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

    );


    expect(response.status()).toBe(200);
    expect(response.status()).toBeTruthy();

    response = await response.json();
    console.log(response);
});
