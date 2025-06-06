import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  "navTheme": "realDark",
  "colorPrimary": "#1890ff",
  "layout": "top",
  "contentWidth": "Fixed",
  "fixedHeader": false,
  "fixSiderbar": true,
  "pwa": true,
  "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "token": {},
  "siderMenuType": "group",
  "splitMenus": false,
  "menuRender": false,
  "menuHeaderRender": false,
  "footerRender": false,
  "headerRender": false
};

export default Settings;
