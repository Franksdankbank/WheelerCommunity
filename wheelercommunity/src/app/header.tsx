import React from 'react';
import styles from './page.module.css'
import Button from '@/app/components/Button';
interface PageHeaderProps {
}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <header>
      <div className={styles['button-wrapper']}>
            
            <Button text="Home" link="/about" />
            <Button text="Lunch Menu" link="/about" />
            <Button text="Course Planning" link="/about" />
            <Button text="Enrichment Information" link="/about" />
            <Button text="Student Senate" link="/about" />
        </div>
    </header>
  );
};

export default PageHeader;
