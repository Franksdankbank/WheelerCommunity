import React from 'react';
import styles from './page.module.css'
import Button from '@/app/components/Button';
interface PageHeaderProps {
}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <header>
      <div className={styles['button-wrapper']}>
            
            <Button text="Home" link="/" />
            <Button text="Lunch Menu" link="/lunchmenu" />
            <Button text="Course Planning" link="/courseplanninginformation" />
            <Button text="Enrichment Information" link="/enrichmentinformation" />
            <Button text="Student Senate" link="/studentsenate" />
        </div>
    </header>
  );
};

export default PageHeader;
