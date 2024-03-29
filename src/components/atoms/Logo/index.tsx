import { IoAnalyticsOutline } from 'react-icons/io5';
import { Wrapper } from './styles';

export const Logo = () => {
  return (
    <Wrapper to="/">
      <div className="icon-background">
        <IoAnalyticsOutline />
      </div>
      <p>Dashboard Kit</p>
    </Wrapper>
  );
};
