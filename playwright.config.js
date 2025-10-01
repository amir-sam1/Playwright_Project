import { devices } from "@playwright/test";
require('dotenv').config();

const config = {
    testDir: 'POM',
    // timeout: 15000,
    use:{
        baseURL: "https://opensource-demo.orangehrmlive.com",
        headless: false,
        //browserName: 'firefox',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'only-on-failure',

        lanuchOptions: {
            slowMo: 100
            }

    },
    // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium',
      use: { ...devices['iphone 13 pro Max'] },

    },
  ],

    // reporter: process.env.CI ? [['dot'], ['html']] : 'list',
       reporter: [
         [
           "allure-playwright",
           {
            detail: true,
             outputFolder: "my-allure-results",
            suiteTitle: false,
         },
        ],
       ],

    // reporter: './MyReporter.js',

    //lw 3ande aktr mn test case hy3mlhom run m3a b3d deh faydet workers
    

    workers: 3,
    retries:1

};

export default config;




/*
import { devices } from "@playwright/test";
require('dotenv').config();

const config ={
    testDir: 'tests',
    timeout: 40000,
    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        headless: true,
        // browserName: 'firefox',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        // viewport: { width: 1280, height: 720 },
        launchOptions: {
            slowMo: 100,
        },
    },
    projects: [
        // {
        //   name: 'Android Pixel',
        //   use: { ...devices['Pixel 5'] },
        // },
        {
          name: 'Desktop Chrome',
          use: { ...devices['Desktop Chrome'] },
        },
        // {
        //   name: 'Desktop firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit Mohamed',
        //   use: { ...devices['iPhone 13 Pro Max'] },
        // },
      ],
    reporter: process.env.CI ? [['dot'], ['html']] : 'list',
    // reporter: [
    //   [
    //     "allure-playwright",
    //     {
    //       detail: true,
    //       outputFolder: "my-allure-results",
    //       suiteTitle: false,
    //     },
    //   ],
    // ],
    workers: 3,
    retries: 0,
    reportSlowTests: null,
};

export default config;
*/