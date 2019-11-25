import axios from '@/utils/AjaxRequest';

// eslint-disable-next-line import/prefer-default-export
export const fetchCategory = () => axios.request({ url: '/category' });
