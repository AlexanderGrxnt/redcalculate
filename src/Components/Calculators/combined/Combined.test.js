import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Combined from './';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

 describe("Combined component", () => {
//     test("renders", () => {
//         const wrapper = shallow(<Combined />);

//         expect(wrapper.exists()).toBe(true);
//     });
// });

test("user text is echoed", () => {
    const wrapper = shallow(<Combined />);

    wrapper.find("input").simulate("change", {
        target: { value: "test"}
    });

    expect(wrapper.find('input').props().value).toEqual('test');
})

});

