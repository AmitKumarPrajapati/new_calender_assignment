import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loading } from 'components/Dentsu';
import { DisplayTable } from "components";

import cms from 'cms/vendorDetailsList';
import VendorList from '.';
import { GET_VENDOR_LIST, GET_REF_DATA } from "./graphQL";

const mockData = hasError => ([
  {
    request: {
      query: GET_VENDOR_LIST,
      variables: {
        req: {
          filter: {
            vendorStatus: "active",
          },
        },
      },
    },
    ...(hasError && {
      result: {
        errors: [new Error('test error')],
      },
    }),
    ...(!hasError && {
      result: {
        data: {
          getVendorList: {
            count: 1,
            records: [{
              aggregatedData: [{
                markets: ["FR", "AR"],
              }],
              aggregatedMarkets: [
                { code: "FR", name: "France" },
                { code: "AR", name: "Argentina" },
              ],
              feedId: "FEED0001",
              feedName: "ads insights",
              vendorId: "VEN00001",
              vendorName: "Test Pass 10",
            },
            ],
          },
        },
      },
    }),
  },
  {
    request: {
      query: GET_REF_DATA,
    },
    result: {
      data: {
        getReferenceData: {
          vendors: [
            { code: 'GOO', name: 'Google' },
            { code: 'MST', name: 'Microsoft' },
          ],
          markets: [
            { code: 'GB', name: 'United Kingdom' },
            { code: 'FR', name: 'France' },
            { code: 'MX', name: 'Mexico' },
          ],
        },
      },
    },
  },
])

const props = {
  cmsData: {},
  updateCmsConfig: jest.fn(),
}

let wrapper;

describe(`VendorList Component`, () => {
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <MockedProvider mocks={mockData(false)} addTypename={false}>
          <VendorList {...props} />
        </MockedProvider>
      </Router>,
    )
  });

  it('Should render VendorList component', async () => {
    await wait(0);
    wrapper.update();
    await wait(0);
    wrapper.update();
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it.skip('check the existance of elements with correct data on final state', async () => {
    await wait(0);
    wrapper.update();
    await wait(0);
    wrapper.update();
    expect(wrapper.find(DisplayTable).length).toBe(1);
  });

  it('Should render Loading state', async () => {
    expect(wrapper.find(Loading).length).toBe(1);
    expect(wrapper.find(Loading).text()).toContain(cms.pleaseWait);
  });

  it('Should render Error state', async () => {
    wrapper = mount(
      <Router>
        <MockedProvider mocks={mockData(true)} addTypename={false}>
          <VendorList {...props} />
        </MockedProvider>
      </Router>,
    );

    await wait(0);
    wrapper.update();
    await wait(0);
    wrapper.update();
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toContain(cms.errorMessage);
  });
});
