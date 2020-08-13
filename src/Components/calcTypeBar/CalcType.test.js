import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import CalcType from './CalcType';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

 describe("Combined component", () => {
    test("renders", () => {
        const wrapper = shallow(<CalcType />);

        expect(wrapper.exists()).toBe(true);
    });


    // test("test value outside of range", () => {
    //     const wrapper = mount(<CalcType currentType="either" />);
    //     const eitherBar = wrapper.find(".either");


    //     expect(eitherBar.classList.contains('selected')).toBe(true);
    // })


});

