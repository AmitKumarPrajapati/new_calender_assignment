import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import Calender from './Calender';
import mockData from './mockData';


const props = {
  cmsData: {},
  updateCmsConfig: jest.fn(),
}

let wrapper;

describe(`Calender Component`, () => {
  beforeEach(() => {
    wrapper = mount(
          <VendorList {...props} />
    )
  });

  it('Should render Calender component', async () => {
    await wait(0);
    wrapper.update();
    await wait(0);
    wrapper.update();
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

//   it.skip('check the existance of elements with correct data on final state', async () => {
//     await wait(0);
//     wrapper.update();
//     await wait(0);
//     wrapper.update();
//     expect(wrapper.find(DisplayTable).length).toBe(1);
//   });

//   it('Should render Loading state', async () => {
//     expect(wrapper.find(Loading).length).toBe(1);
//     expect(wrapper.find(Loading).text()).toContain(cms.pleaseWait);
//   });

//   it('Should render Error state', async () => {
//     wrapper = mount(
//       <Router>
//         <MockedProvider mocks={mockData(true)} addTypename={false}>
//           <VendorList {...props} />
//         </MockedProvider>
//       </Router>,
//     );

//     await wait(0);
//     wrapper.update();
//     await wait(0);
//     wrapper.update();
//     expect(wrapper.find('p').length).toBe(1);
//     expect(wrapper.find('p').text()).toContain(cms.errorMessage);
//   });
});
