import { render, screen } from '@testing-library/react';
 import App from './App';
// import About from './About';
// import Footer from './Footer';
// import HowItWorks from './howItWorks';
// import Home from './home';

import React from "react";
import { Link } from 'react-router';
import {shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from "react-router-dom";
import { mount } from 'enzyme';
import Home from './components/home';
import Login from "./components/login.component";
import About from './components/about'
import SignUp from "./components/signup.component";
import mockAxios from 'jest-mock-axios';
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
   test("Home page Login button text", ()=>{
     const wrapper = shallow(<App/>);
   expect(wrapper.find('li .Login1').text()).toContain("Login");
  });

// // Test #3
test('valid path should redirect to Home', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
   
});

// test('valid path should redirect to ticket', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={[ "/tickets" ]}>
//       <ticket/>
//     </MemoryRouter>
//   );
//   expect(wrapper.find(ticket)).toHaveLength(1);

// });

test('valid path should redirect to About', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ "/about" ]}>
      <About/>
    </MemoryRouter>
  );
  expect(wrapper.find(About)).toHaveLength(1);

});

test('valid path should redirect to signup', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ "/sign-up" ]}>
      <SignUp/>
    </MemoryRouter>
  );
  expect(wrapper.find(SignUp)).toHaveLength(1);

}); 


// it('calls handleDropdown onChange', () => {
//   const handleDropdown = jest.fn();
//   const wrapper = shallow(<handleChange handleDropdown={handleDropdown} />);
  
//   wrapper.find(Login).first().invoke('onChange', { name: { value: 'A' } });
//   expect(handleDropdown).toBeCalledWith(whatever); // whatever NativeSelect calls it with
// });
// it('should call onChange prop with input value', () => {
//   const onSearchMock = jest.fn();
//   const component = enzyme.mount(<Login handleChange={handleChange} value="custom value" />);
//   component.find('input').simulate('change');
//   expect(handleChange).toBeCalledWith('custom value');
// });
// it("responds to name change", done => {
//   const handleChangeSpy = sinon.spy(Login.prototype, "handleChange");
//   const event = {target: {name: "email", value: "gmacha@students.kennesaw.edu"}};
//   const wrap = mount(
//     <Login/>
//   );
//   wrap.ref('pollName').simulate('change', event);
//   expect(handleChangeSpy.calledOnce).to.equal(true);
// })
// it('should pass a selected value to the onChange function', () => {
//   const component = shallow(<Login />);
//   component.find('input').simulate('change', { target: {
//     value: 'Change function' }
//   });

  // expect(toJson(component)).toMatchSnapshot();
// });
test('valid path should redirect to Login', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ "/sign-in" ]}>
      <Login/>
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(1);

});
// it("responds to name change", done => {
//   const handleChangeSpy = sinon.stub(Login.prototype, "handleChange");
//   const event = {target: {name: "password"}};
//   const wrap = mount(
//     <Login />
//   );
//   wrap.name('password').simulate('change', event);
//   expect(handleChangeSpy.calledOnce).to.equal(true);
// })
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

it('Login email field',()=>{
  const wrapper=shallow(<Login />)
  let nameInput=wrapper.find('.em')
  nameInput.simulate('change',{
    target:{name:'email',value:'gmacha@students.kennesaw.edu'}
  })
  // console.log(nameInput);
  // console.log(wrapper)
   //nameInput=wrapper.find('input').first()
   expect(wrapper.find(".em").prop("value")).toEqual("gmacha@students.kennesaw.edu");
   //expect(nameInput.props().value).toEqual('gm')
 
})
it('Login password field',()=>{
  const wrapper=shallow(<Login />)
  let nameInput=wrapper.find('.pa')
  nameInput.simulate('change',{
    target:{name:'password',value:'Betalian@123'}
  })
  // console.log(nameInput);
  // console.log(wrapper)
   //nameInput=wrapper.find('input').first()
   expect(wrapper.find(".pa").prop("value")).toEqual("Betalian@123");
   //expect(nameInput.props().value).toEqual('gm')
 
})
it('signup password field',()=>{
  const wrapper=shallow(<SignUp />)
  let nameInput=wrapper.find('.pa')
  nameInput.simulate('change',{
    target:{name:'password',value:'Betalian@123'}
  })
  // console.log(nameInput);
  // console.log(wrapper)
   //nameInput=wrapper.find('input').first()
   expect(wrapper.find(".pa").prop("value")).toEqual("Betalian@123");
   //expect(nameInput.props().value).toEqual('gm')
 
})
// it('Login password axios',()=>{
//   const wrapper=shallow(<Login />)
//   let nameInput=wrapper.find('.on')
//   nameInput.simulate('submit',{
//     target:{name:'password',value:'Betalian@123',name:'email',value:"gmacha@students.kennesaw.edu"}
//   })
  //console.log(nameInput);
  //console.log(wrapper)
   //nameInput=wrapper.find('input').first()
   //expect(wrapper.find(".pa").prop("value")).toEqual("Betalian@123");
   //expect(nameInput.props().value).toEqual('gm')
 
// })
// it("UppercaseProxy should get data from the server and convert it to UPPERCASE", async () => {
//   const clientMessage = "client is saying hello!";

//   const promise = Login(clientMessage);

//   expect(mockAxios.post).toHaveBeenCalledWith("/https://swe-capstone-backend.herokuapp.com/auth/sign-in/", {
//     email: state.email,
//     password: state.password
//   });

//   // simulating a server response
//   const responseObj = { data: "server says hello!" };
//   mockAxios.mockResponse(responseObj);

//   const result = await promise;

//   expect(result).toEqual("SERVER SAYS HELLO!")
// });
  })