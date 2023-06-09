import React from 'react';
import Buttons from './Buttons';

const TextGrid: React.FC = () => {
  const buttonData = [
    { text: 'Morning Assemblies', link: '/morningassemblies' },
    { text: 'Clubs', link: '/clubs' },
    { text: 'Enrichment Information', link: '/enrichmentinformation' },
    { text: 'Student Senate', link: '/studentsenate' },
    { text: 'Affinity Groups and Allies', link: '/affinitygroups' },
    { text: 'Calendar', link: '/calendar' },
    { text: 'Mentoring Programs', link: '/mentoringprograms' },
    { text: 'Resources and Links', link: '/otherlinks' },
    { text: 'Student Athletics Council', link: '/studentathleticscouncil' },
    { text: 'Course Planning Information', link: '/courseplanninginformation' },
    { text: 'Lunch Menu', link: '/lunchmenu' },
    { text: 'Volunteer Opportunities', link: '/volunteeropportunities' },
    // Add more text and link values as needed
  ];

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {buttonData.map(({ text, link }, index) => (
          <Buttons key={index} text={text} linkTo={link} />
        ))}
      </div>
    </div>
  );
};

export default TextGrid;
