import React from 'react';
 // also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

 import { Lolly, LollyProps } from '../components/Lolly';
import Result, { ResultProps } from '../components/Result';

export default {
    title: 'Components/Result',
    component: Result,

} as Meta;

const Template: Story<ResultProps> = (args) => <Result {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    link: "dsdeq3rt"
    , sender: "mateen", rec: "sameer", msg: "hello"
}
