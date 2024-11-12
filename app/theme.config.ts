import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#000',
    borderRadius: 4,
  },
  components: {
    Button: {
      controlHeight: 40,
      paddingContentHorizontal: 24,
    },
    Input: {
      controlHeight: 40,
      paddingInline: 16,
    },
  },
};

export default theme;