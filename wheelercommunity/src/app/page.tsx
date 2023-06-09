import Image from 'next/image'
import TextGrid from '@/app/components/TextGrid';

import Title from '@/app/components/Title';
//import styles from './page.module.css'

export default function Home() {
    return (
        <div>
            <Title>
                Wheeler Upper School Community Page
            </Title>
            <TextGrid />
        </div>
        
        
        )
    }