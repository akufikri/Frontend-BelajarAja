import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
      const location = useLocation();

      const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');

      return (
            <Breadcrumb aria-label="Breadcrumb" className='mb-10'>
                  {crumbs.map((crumb, index) => (
                        <Breadcrumb.Item key={index} href={`/${crumbs.slice(0, index + 1).join('/')}`}>
                              {crumb}
                        </Breadcrumb.Item>
                  ))}
            </Breadcrumb>
      );
};

export default Breadcrumbs;
