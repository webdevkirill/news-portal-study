import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/theme';

import { Modal } from '.';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: `Laborum incididunt elit amet do aliquip. 
    Ex nostrud ut fugiat sunt deserunt magna consequat 
    in ad ipsum id aliquip. Sit ullamco sint nostrud anim. 
    Dolore dolor aliqua do sit eiusmod dolore esse aliqua 
    consequat proident nostrud reprehenderit.`,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal isOpen {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
