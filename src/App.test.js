import { render, screen } from '@testing-library/react';
 import App from './App';
// import About from './About';
// import Footer from './Footer';
// import HowItWorks from './howItWorks';
// import Home from './home';
import React from "react";
import {shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe("testing", () =>{
  // Test #1
 // test('render the About Us title', () => {
    //const wrapper = shallow(<About/>);
   // expect(wrapper.find('li .Login').text()).toContain("About Us");
  // const{getByText} =  render(<App />);
  //   const linkElement = getByText('Welcome to the matchmaking application');
  //   expect(linkElement).toBeInTheDocument();
 // });

//   // Test #2 
   test("render text in mission", ()=>{
     const wrapper = shallow(<App/>);
   expect(wrapper.find('li .Login').text()).toContain("Login");
  });

// // Test #3
// test("render the team member section title", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.teamTitle h2').text()).toContain("MEET THE TEAM MEMBERS");
// });
      
// // Test #4
//   test("render homepage text", ()=>{
//   const wrapper = shallow(< Home/>);
//   expect(wrapper.find('.Line1 h1').text()).toContain("The Ultimate Destination");
//   });

// // Test #5
//   test("render footer text - Home", ()=>{
//     const wrapper = shallow(<Footer/>)  
//       expect(wrapper.find('.FooterHome h5').text()).toContain("Home");
//   });

//   // Test 6
//   test("render footer text - About Us", ()=>{
//     const wrapper = shallow(<Footer/>)
//     expect(wrapper.find('.FooterAU h5').text()).toContain("About Us");
//     });

// // Test #7
// test("render footer text - How It Works", ()=>{
//   const wrapper = shallow(<Footer/>)
//   expect(wrapper.find('.FooterHIW h5').text()).toContain("How it works");
//     });

// /* Test 8
// test("render 'Get Started' button", () => {
//   const wrapper = shallow(<Home/>);
//    expect(wrapper.find("#getstarted").text()).toBe("Get Started");
//  });*/
// // Test #9
// test("render 'Our Story' title", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.OS_Title h2').text()).toContain("OUR STORY");
// });
// // Test #10
// test("render 'Our Story' text", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.Our-Story p').text()).toContain("The GMatch team is comprised of four unique individuals with a common goal:");
// });
// // Test #11
// test("render 'How It Works' title", () => {
//   const wrapper = shallow(<HowItWorks/>);
//   expect(wrapper.find('h1').text()).toContain("How It Works");
// });
// // Test #12
// test("render 'How It Works' content", () => {
//   const wrapper = shallow(<HowItWorks/>);
//   expect(wrapper.find('h2').text()).toContain("***CONTENT***");
// });
// // Test #13
// test("render team member - Gopi", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.GopiName h3').text()).toContain("Gopi Macha");
// });
// // Test #14
// test("render team member - Phuong", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.PhuongName h3').text()).toContain("Phuong Nguyen");
// });
// // Test #15
// test("render team member - Leul", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.LeulName h3').text()).toContain("Leul Endashaw");
// });
// // Test 16
// test("render team member - Christy", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.ChristyName h3').text()).toContain("Christy Neal");
// });
// // Test 17 
// test("render how it works description", () => {
//   const wrapper = shallow(<HowItWorks/>);
//   expect(wrapper.find('.HIWDescription h3').text()).toContain("This is How It Works page");
// });
// // Test 18
// test("render Christy Description", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.ChristyName h5').text()).toContain("Team Leader");
// });
// // Test 19
// test("render Line2 of home", () => {
//   const wrapper = shallow(<Home/>);
//   expect(wrapper.find('.Line2 h1').text()).toContain("For Gamers Match Making");
// });
// // Test 20
// test("render Leul Description", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.LeulName h5').text()).toContain("Team Member");
// });
// // Test 21
// test("render Gopi Description", () => {
//   const wrapper = shallow(<About/>);
//   expect(wrapper.find('.GopiName h5').text()).toContain("Team Member");
// });
  })