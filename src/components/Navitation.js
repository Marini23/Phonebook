import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
// } from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   return (
  //     <div>
  //       <Breadcrumb fontSize={40} ml="30px" width="100%" height={40} bg="tomato">
  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="/register">SignUp</BreadcrumbLink>
  //         </BreadcrumbItem>

  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="/login">LogIn</BreadcrumbLink>
  //         </BreadcrumbItem>

  //         <BreadcrumbItem isCurrentPage>
  //           <BreadcrumbLink href="/contacts">Contacts</BreadcrumbLink>
  //         </BreadcrumbItem>
  //       </Breadcrumb>
  //       <Outlet />
  //     </div>
  //     );

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
    // <ul>
    //   <li>
    //     <Link to="/register">SignUp</Link>
    //   </li>
    //   <li>
    //     <Link to="/login">LogIn</Link>
    //   </li>
    //   <li>
    //     <Link to="/contacts">Contacts</Link>
    //   </li>
    // </ul>
  );
};
