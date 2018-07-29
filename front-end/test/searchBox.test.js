import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import SearchBox from '../src/components/searchBox'

describe('<SearchBox />', () => {
  let searchBox = shallow(<SearchBox />)

  describe('Renders the search box', () => {

    it('Creates a form component', () => {
      expect(searchBox.find('form').exists()).toBe(true);
    });

    it('Renders a search button', () => {
      expect(searchBox.find('input').at(1).render().attr('value')).toEqual('Search');
    });

  describe('When typing a search query', () => {
    let charityName = 'Test Charity';

    beforeEach(() => {
      searchBox.find('input').at(0).simulate('change', {
        target: { value: charityName }
      });
    });

    it('.handleChange updates the text in state', () => {
      expect(searchBox.state().value).toEqual(charityName)
    });

    })

  })

});
