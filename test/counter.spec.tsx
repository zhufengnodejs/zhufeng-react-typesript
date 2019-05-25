import * as React from 'react';
import { shallow, configure } from 'enzyme'
import * as  Adapter from 'enzyme-adapter-react-16'
import Counter from '../src/components/Counter';
configure({ adapter: new Adapter() })
test('Jest-React-TypeScript运行', () => {
    const renderer = shallow(<Counter name="计数器"/>);
　　expect(renderer.text()).toContain('计数器') // Pass
})