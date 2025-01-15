import React from 'react';
import { IconProps } from '@/types/icon';

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const getSvgContent = (iconName: string): string => {
    switch (iconName) {
      case 'area-financeira':
        return '<path d="M3 3V21H21M13 17V9M18 17V5M8 17V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'aula':
        return '<path d="M12 7C12 5.93913 11.5786 4.92172 10.8284 4.17157C10.0783 3.42143 9.06087 3 8 3H2V18H9C9.79565 18 10.5587 18.3161 11.1213 18.8787C11.6839 19.4413 12 20.2044 12 21M12 7V21M12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H22V18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21M6 8H8M6 12H8M16 8H18M16 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'calendario':
        return '<path d="M8 2V6M16 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'cursos':
        return '<path d="M7 3V21M4 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM20.4 18.9C20.6 19.4 20.3 20 19.8 20.2L17.9 20.9C17.4 21.1 16.8 20.8 16.6 20.3L11.1 5.1C10.9 4.6 11.2 4 11.7 3.8L13.6 3.1C14.1 2.9 14.7 3.2 14.9 3.7L20.4 18.9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'geral':
        return '<path d="M10 4V8M2 8H22M6 4V8M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'gestao-curricular':
        return '<path d="M12 3V20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H3M16 19L18 21L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'logout':
        return '<path d="M12 7V11M7.99788 9.00305C7.44121 9.74624 7.10249 10.6298 7.01968 11.5546C6.93687 12.4795 7.11324 13.4091 7.52902 14.2394C7.9448 15.0697 8.58358 15.7678 9.37376 16.2554C10.1639 16.7431 11.0743 17.0011 12.0029 17.0005C12.9314 17 13.8415 16.7408 14.6311 16.2522C15.4206 15.7635 16.0585 15.0646 16.4733 14.2338C16.888 13.403 17.0632 12.4732 16.9793 11.5484C16.8953 10.6237 16.5555 9.74055 15.9979 8.99805M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'modulos':
        return '<path d="M2 6.5H6M2 10.5H6M2 14.5H6M2 18.5H6M9.5 8.5H14.5M9.5 12.5H16M9.5 16.5H14M6 2.5H18C19.1046 2.5 20 3.39543 20 4.5V20.5C20 21.6046 19.1046 22.5 18 22.5H6C4.89543 22.5 4 21.6046 4 20.5V4.5C4 3.39543 4.89543 2.5 6 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      case 'relatorios':
        return '<path d="M13.4 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12.6M2 6H6M2 10H6M2 14H6M2 18H6M21.378 5.6259C21.7763 5.22755 22.0001 4.68726 22.0001 4.1239C22.0001 3.56055 21.7763 3.02026 21.378 2.6219C20.9796 2.22355 20.4393 1.99976 19.876 1.99976C19.3126 1.99976 18.7723 2.22355 18.374 2.6219L13.364 7.6339C13.1262 7.87153 12.9522 8.16524 12.858 8.4879L12.021 11.3579C11.9959 11.444 11.9944 11.5352 12.0166 11.622C12.0389 11.7088 12.084 11.7881 12.1474 11.8515C12.2108 11.9148 12.2901 11.96 12.3769 11.9823C12.4637 12.0045 12.5549 12.003 12.641 11.9779L15.511 11.1409C15.8336 11.0467 16.1274 10.8727 16.365 10.6349L21.378 5.6259Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      default:
        return '';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      dangerouslySetInnerHTML={{ __html: getSvgContent(name) }}
    />
  );
};

export default Icon;

