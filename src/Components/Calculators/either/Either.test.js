import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Either from './Either';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

 describe("Combined component", () => {
    test("renders", () => {
        const wrapper = shallow(<Either />);

        expect(wrapper.exists()).toBe(true);
    });


    test("test value outside of range", () => {
        const wrapper = mount(<Either />);
        const firstInput = wrapper.find("input").at(0);
        const calculateButton = wrapper.find(".button").at(1);

        
        firstInput.simulate("change", {
            target: { value: 2}
        });

        calculateButton.simulate('click');

        expect(wrapper.state().errorOne).toEqual(true);
    })

    // test("test either calculation", () => {
    //     const wrapper = mount(<Either />);
    //     const firstInput = wrapper.find("input").at(0);
    //     const secondInput = wrapper.find("input").at(1);
    //     const calculateButton = wrapper.find(".button").at(1);

        
    //     firstInput.simulate("change", {
    //         target: { value: 0.5}
    //     });
    //     secondInput.simulate("change", {
    //         target: { value: 0.5}
    //     });
    //     calculateButton.simulate('click');

    //     expect(wrapper.state('result')).toEqual(0.25);
    // })

});

