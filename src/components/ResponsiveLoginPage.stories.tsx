import type { Meta, StoryObj } from '@storybook/react';
import ResponsiveLoginPage from './ResponsiveLoginPage';

const meta: Meta<typeof ResponsiveLoginPage> = {
  title: 'Components/ResponsiveLoginPage',
  component: ResponsiveLoginPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveLoginPage>;

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
